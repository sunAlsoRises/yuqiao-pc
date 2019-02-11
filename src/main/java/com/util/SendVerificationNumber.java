package com.util;


import com.sms.restDemo.HttpConnectionManager;
import com.model.util.MessageVerification;

import org.apache.http.HttpResponse;

import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

//给第三方接口发送数据--短信验证码
@Configuration
public class SendVerificationNumber {

    @ResponseBody
    public static Map<String, Object> send(MessageVerification mv){
        Map<String,Object> map = new HashMap<>();
        Map<String,Object> map2 = new HashMap<>();
        String msgg = "";
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");// 设置日期格式

        try {
//            String server = SysConfig.getInstance().getProperty("rest_server");
//            System.out.println(server);
//            StringBuffer sb = new StringBuffer("https://");
//            sb.append(server).append("/ol/sms");
//            String url = sb.append("/sendsms").toString();
            String url = "https://open.ucpaas.com/ol/sms/sendsms";
           String param = mv.getParam()+",60";
            HttpPost httpPost = new HttpPost(url);
            CloseableHttpClient httpClient = HttpConnectionManager.getInstance().getHttpClient();

            map.put("sid", mv.getSid());
            map.put("token", mv.getToken());
            map.put("appid", mv.getAppid());
            map.put("templateid", mv.getTemplateid());
            map.put("param", param);
            System.out.println(mv.getMobile());
            map.put("mobile", mv.getMobile());
            map.put("uid", "4584");
            JSONObject jb = new JSONObject(map);
            System.out.println(jb);
            // 设置连接超时,设置读取超时
            RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(10000)
                    .setSocketTimeout(10000).build();
            httpPost.setConfig(requestConfig);
            httpPost.setHeader("Accept", "application/json");
            httpPost.setHeader("Content-Type", "application/json;charset=utf-8");
            // 设置参数
            StringEntity se = new StringEntity(jb.toString(), "UTF-8");
            httpPost.setEntity(se);
            // 执行请求
            HttpResponse response = httpClient.execute(httpPost);
            // 打印执行结果
            String msg = EntityUtils.toString(response.getEntity(), "utf-8");
            System.out.println(msg);
            JSONObject jj = new JSONObject(msg);
            int code_ = jj.getInt("code");
            msgg = jj.getString("msg");
            System.out.println(code_);
            if (code_ == 000000) {
                // 发送成功

                map.put("code", Integer.valueOf(200));
                map.put("msg", "发送成功");
                map.put("resp", "");
                Date create_time = df.parse(df.format(new Date()));
                Date due_time = new Date();
                System.out.println(due_time);
                due_time.setTime(due_time.getTime() + 3 * 60 * 1000);

            } else {
                map.put("code", Integer.valueOf(100));
                map.put("msg", msgg);
                map.put("resp", "");
            }
        } catch (IOException e) {
            e.printStackTrace();
            map2.put("code", 100);
            map2.put("msg", "发送失败" + e.getMessage());
            map2.put("resp", "");
        } catch (JSONException e) {
            map.put("code", 100);
            map.put("msg", "发送失败" + e.getMessage());
            map.put("resp", "");
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return map ;

    }
}
