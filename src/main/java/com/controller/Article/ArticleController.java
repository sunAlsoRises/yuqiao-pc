package com.controller.Article;

import com.model.Sys_Article;
import com.service.Article.ArticleService;
import com.util.Page;
import com.util.QueryVo;
import com.util.article.QueryArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping(value = "/article")
public class ArticleController {
    @Autowired
    ArticleService article ;
    @PostMapping(value = "/index")
    @ResponseBody
    public Page<Sys_Article>  getArticleByPage(Integer action,String type){
        QueryArticle vo = new QueryArticle();
        vo.setPageSize(action);
        vo.setType(type);
        System.out.println("类型"+vo.getType());
        Page<Sys_Article> page = this.article.findArticleByPage(vo);
        return page ;
    }
    @GetMapping(value = "/{id}")
    //根据文章id查询文章
    public String getErShouFangById(@PathVariable("id") String id, Map<String,Object> map) {
        //通过id查询文章
        Sys_Article articleById = this.article.findArticleById(id);

        //通过该文章类型查找同类型10篇文章
        if (articleById.getType() !=null){
            QueryArticle qa = new QueryArticle();
            qa.setType(articleById.getType());
            qa.setPageSize(10);
            Page<Sys_Article> articleByPage = this.article.findArticleByPage(qa);
            map.put("page",articleByPage);
        }

        map.put("data" ,articleById);
        return "article/article";
    }
    //通过文章类型查找文章
    @GetMapping(value = "/type/{type}")
    public String  getArticleByType(@PathVariable("type") String type ,Map<String,Object> map,QueryArticle query) {

        query.setType(type);
        Page<Sys_Article> articleByPage = this.article.findArticleByPage(query);
        map.put("page",articleByPage);
        return "article/articlelists";
    }
    //文章分页查询
    @GetMapping(value = "/ar")
    public String  findArticleByPage(Map<String,Object> map,QueryArticle query) {
        Page<Sys_Article> articleByPage = this.article.findArticleByPage(query);
        map.put("page",articleByPage);
        return "article/articlelists";
    }
}
