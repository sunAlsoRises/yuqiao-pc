WebJSQDaiKuanHuanKuan = {
    init: function () {
        this.bindHouseJSQ();
    },
    bindHouseJSQ: function () {
        var self = this;
        var tmpSearch = location.search.replace("?", "");
        if (tmpSearch) {
            try {
                $("#price").val(tmpSearch.split("&")[1]);
                $("#sqm").val(tmpSearch.split("&")[0]);
                $("#years").val(tmpSearch.split("&")[2]);
                //document.getElementById("JSQjieguo").style.display = 'none';
                self.ext_total();
            } catch (e) {

            }
        }
    },
    exc_zuhe: function (v) {
        var self = this;
        if (v == 3) {
            document.getElementById("calc1_zuhe").style.display = 'block';
            form1.jisuan_radio[1].checked = true;
            self.exc_js(2);
        }
        else {
            document.getElementById("calc1_zuhe").style.display = 'none';
        }
    },
    exc_js: function (v) {
        if (v == 1) {
            document.getElementById("calc1_js_div1").style.display = 'block';
            document.getElementById("calc1_js_div2").style.display = 'none';

            if ($("#type").val() == "3") {
                $("#type").val(2);
            }
        }
        else {
            document.getElementById("calc1_js_div1").style.display = 'none';
            document.getElementById("calc1_js_div2").style.display = 'block';
        }
    },
    exc_js_g: function (v) {
        if (v == 1) {
            document.getElementById("calc1_js_div1_g").style.display = 'block';
            document.getElementById("calc1_js_div2_g").style.display = 'none';

            if ($("#type").val() == "3") {
                $("#type").val(2);
            }
        }

        else {
            document.getElementById("calc1_js_div1_g").style.display = 'none';
            document.getElementById("calc1_js_div2_g").style.display = 'block';
        }
    },
    ext_total: function (type) {

        if (isNaN($("#price").val())){
           alert("请在填写正确的单价(数字)");
           return;
        }
        if (isNaN($("#sqm").val())){
            alert("请在填写正确的面积(数字)");
            return;
        }
        if (type == undefined) {
            type = $("#type").val();
        }
        var self = this;
        var jisuan_radio = $("input[name=jisuan_radio]:checked").val();//计算方式
        if (jisuan_radio == 2) {
            if ($("#daikuan_total0").val() == "") {
                alert("请填写贷款总额");
                return;
            }
        } else if (jisuan_radio == 1) {
            if ($("#price").val() == "" || $("#sqm").val() == "") {
                alert("请填写单价或面积");
                return;
            }
        }

        var month_sd = $("#years").val();//商业贷款属于哪个档
        if (month_sd == 1) {
            month_sd = 1;//1年
        }
        else if (month_sd > 1 && month_sd <= 5) {
            month_sd = 5;//1-5年
        } else {
            month_sd = 0;//5年以上
        }
        var month_gjj = $("#years").val();//商业贷款属于哪个档
        if (month_gjj >= 1 && month_gjj <= 5) {
            month_gjj = 5;//1-5年
        } else {
            month_gjj = 0;//5年以上
        }
        var huankuantype = $("input[name=huankuantype]:checked").val();//还款方式
        if (huankuantype == "bx") {//等额本息
            $("#calc1_de").css("display", "inline");
            $("#calc1_bj").css("display", "none");
            self.bx_gongshi(huankuantype, type, jisuan_radio, month_gjj, month_sd);
        } else {//等额本金
            $("#calc1_de").css("display", "none");
            $("#calc1_bj").css("display", "inline");
            self.bx_gongshi(huankuantype, type, jisuan_radio, month_gjj, month_sd);
        }
    },
    bx_gongshi: function (hkfs, dklb, jsfs, month_gjj, month_sd) {//本息计算公式 还款方式,贷款类别,计算方式,商业贷款属于哪个档,公积金贷款属于哪个档
        var self = this;
        var fwzj = parseFloat($("#price").val()) * parseFloat($("#sqm").val());//房屋总价
        var sfk = fwzj * parseFloat(1 - $("#anjie").val() * 0.1).toFixed(1);//首付款
        var dkze = 0;//贷款总额
        if (jsfs == "1") {//根据面积、单价计算
            dkze = parseFloat(fwzj) - parseFloat(sfk);//贷款总额
        }
        else if (jsfs == "2") {//根据贷款总额计算
            dkze = parseFloat($("#daikuan_total0").val()) * 10000;//贷款总额
        }
        if (dklb == "3") {//组合贷款
            dkze = parseFloat($("#total_sy").val()) * 10000 + parseFloat($("#total_gjj").val()) * 10000;//贷款总额
        }
        var gjj = parseFloat($("#total_gjj").val()) * 10000;//组合贷款时填的公积金贷款总额
        var syx = parseFloat($("#total_sy").val()) * 10000;//组合贷款时填的商业性贷款总额
        var gjjdklv = lilv_array[$("#ContentPlaceHolder1_lilv").val()][1][month_gjj];//公积金贷款利率
        var sydklv = lilv_array[$("#ContentPlaceHolder1_lilv").val()][2][month_sd];//商业贷款利率
        var dkys = parseInt($("#years").val()) * 12;//贷款月数
        var yjhk = 0;//月均还款
        var hkze = 0;//还款总额
        if (hkfs == "bx") {//还款方式选的是等额本息
            if (dklb == "2") {//商业贷款
                yjhk = self.getMonthMoney(sydklv, dkze, dkys).toFixed(2);
            }
            else if (dklb == "1") {//公积金贷款
                yjhk = self.getMonthMoney(gjjdklv, dkze, dkys).toFixed(2);
            }
            else {//组合贷款
                yjhk = parseFloat(self.getMonthMoney(gjjdklv, gjj, dkys).toFixed(2)) + parseFloat(self.getMonthMoney(sydklv, syx, dkys).toFixed(2));//月均还款
            }
            hkze = yjhk * dkys;//还款总额
        } else if (hkfs == "bj") {//还款方式选的是等额本金
            if (dklb == "2") {//商业贷款
                for (j = 0; j < dkys; j++) {
                    //调用函数计算: 本金月还款额
                    huankuan = self.getMonthMoney2(sydklv, dkze, dkys, j);
                    hkze += huankuan;//还款总额
                    huankuan = Math.round(huankuan * 100) / 100;
                    yjhk += (j + 1) + "月：" + huankuan + "(元)\n";
                }
            }
            else if (dklb == "1") {//公积金贷款
                for (j = 0; j < dkys; j++) {
                    //调用函数计算: 本金月还款额
                    huankuan = self.getMonthMoney2(gjjdklv, dkze, dkys, j);
                    hkze += huankuan;//还款总额
                    huankuan = Math.round(huankuan * 100) / 100;
                    yjhk += (j + 1) + "月：" + huankuan + "(元)\n";
                }
            }
            else {//组合贷款
                for (j = 0; j < dkys; j++) {
                    //调用函数计算: 本金月还款额
                    huankuan = self.getMonthMoney2(sydklv, syx, dkys, j) + self.getMonthMoney2(gjjdklv, gjj, dkys, j);
                    hkze += huankuan;//还款总额
                    huankuan = Math.round(huankuan * 100) / 100;
                    yjhk += (j + 1) + "月：  " + huankuan + "(元)\n";
                }
            }
        }
        var zflxk = hkze - dkze;//支付利息款
        $("#fangkuan_total1").text(fwzj);//房屋总价
        $("#money_first1").text(parseFloat(sfk));//首付款huankuantype1
        $("#daikuan_total1").text(dkze.toFixed(2));//贷款总额
        if (dklb == "2") {//商业贷款
            $("#ggj_lilv1").text("0");//公积金贷款利率
            $("#sy_lilv1").text((sydklv * 100).toFixed(2) + "%");//商业贷款利率
        }
        else if (dklb == "1") {//公积金贷款
            $("#ggj_lilv1").text((gjjdklv * 100).toFixed(2) + "%");//公积金贷款利率
            $("#sy_lilv1").text("0");//商业贷款利率
        }
        else {//组合贷款
            $("#ggj_lilv1").text((gjjdklv * 100).toFixed(2) + "%");//公积金贷款利率
            $("#sy_lilv1").text((sydklv * 100).toFixed(2) + "%");//商业贷款利率
        }
        $("#all_total1").text(hkze.toFixed(2));//还款总额
        $("#accrual1").text(zflxk.toFixed(2));//支付利息款
        $("#month1").text(dkys);//贷款月数
        $("#month_money1").text(yjhk);//月均还款
        $("#month_money2").text(yjhk);//月均还款
        $("#jieguo").show();//显示手机版的结果
        // var huankuanmingxi = document.getElementById("ltlHuanKuanMingXi");

        //   huankuanmingxi.innerHTML = "<li><em></em><b>" + yjhk + "</b></li>";

        //   document.getElementById("jieguo").style.display = 'block';

        //   var odiv = document.getElementByIdx_x("jieguo");

        //   alert(odiv.getBoundingClientRect().left);

        //   alert(odiv.getBoundingClientRect().top);

    },


    ext_total_g: function (type_g) {
        var self = this;
        var jisuan_radio_g = $("input[name=jisuan_radio_g]:checked").val();//计算方式

        if (jisuan_radio_g == 2) {
            if ($("#daikuan_total0_g").val() == "") {
                alert("请填写贷款总额");
                return;
            }
        } else if (jisuan_radio_g == 1) {
            if ($("#price_g").val() == "" || $("#sqm_g").val() == "") {
                alert("请填写单价或面积");
                return;
            }
        }

        var month_sd_g = $("#years_g").val();//商业贷款属于哪个档
        if (month_sd_g == 1) {
            month_sd_g = 1;//1年
        }
        else if (month_sd_g > 1 && month_sd_g <= 5) {
            month_sd_g = 5;//1-5年
        } else {
            month_sd_g = 0;//5年以上
        }
        var month_gjj_g = $("#years_g").val();//商业贷款属于哪个档
        if (month_gjj_g >= 1 && month_gjj_g <= 5) {
            month_gjj_g = 5;//1-5年
        } else {
            month_gjj_g = 0;//5年以上
        }
        var huankuantype_g = $("input[name=huankuantype_g]:checked").val();//还款方式
        if (huankuantype_g == "bx") {//等额本息
            $("#calc1_de_g").css("display", "inline");
            $("#calc1_bj_g").css("display", "none");
            self.bx_gongshi_g(huankuantype_g, type_g, jisuan_radio_g, month_gjj_g, month_sd_g);
        } else {//等额本金
            $("#calc1_de_g").css("display", "none");
            $("#calc1_bj_g").css("display", "inline");
            self.bx_gongshi_g(huankuantype_g, type_g, jisuan_radio_g, month_gjj_g, month_sd_g);
        }
    },
    bx_gongshi_g: function (hkfs_g, dklb_g, jsfs_g, month_gjj_g, month_sd_g) {//本息计算公式 还款方式,贷款类别,计算方式,商业贷款属于哪个档,公积金贷款属于哪个档
        var self = this;
        var fwzj_g = parseFloat($("#price_g").val()) * parseFloat($("#sqm_g").val());//房屋总价
        var sfk_g = fwzj_g * parseFloat(1 - $("#anjie_g").val() * 0.1).toFixed(1);//首付款
        var dkze_g = 0;//贷款总额
        if (jsfs_g == "1") {//根据面积、单价计算
            dkze_g = parseFloat(fwzj_g) - parseFloat(sfk_g);//贷款总额
        }
        else if (jsfs_g == "2") {//根据贷款总额计算
            dkze_g = parseFloat($("#daikuan_total0_g").val()) * 10000;//贷款总额
        }
        if (dklb_g == "3") {//组合贷款
            dkze_g = parseFloat($("#total_sy_g").val()) * 10000 + parseFloat($("#total_gjj_g").val()) * 10000;//贷款总额
        }
        var gjj_g = parseFloat($("#total_gjj_g").val()) * 10000;//组合贷款时填的公积金贷款总额
        var syx_g = parseFloat($("#total_sy_g").val()) * 10000;//组合贷款时填的商业性贷款总额
        var gjjdklv_g = lilv_array[$("#ContentPlaceHolder1_lilv_g").val()][1][month_gjj_g];//公积金贷款利率
        var sydklv_g = lilv_array[$("#ContentPlaceHolder1_lilv_g").val()][2][month_sd_g];//商业贷款利率
        var dkys_g = parseInt($("#years_g").val()) * 12;//贷款月数
        var yjhk_g = 0;//月均还款
        var hkze_g = 0;//还款总额
        if (hkfs_g == "bx") {//还款方式选的是等额本息
            if (dklb_g == "2") {//商业贷款
                yjhk_g = self.getMonthMoney(sydklv_g, dkze_g, dkys_g).toFixed(2);
            }
            else if (dklb_g == "1") {//公积金贷款
                yjhk_g = self.getMonthMoney(gjjdklv_g, dkze_g, dkys_g).toFixed(2);
            }
            else {//组合贷款
                yjhk_g = parseFloat(self.getMonthMoney(gjjdklv_g, gjj_g, dkys_g).toFixed(2)) + parseFloat(self.getMonthMoney(sydklv_g, syx_g, dkys_g).toFixed(2));//月均还款
            }
            hkze_g = yjhk_g * dkys_g;//还款总额
        } else if (hkfs_g == "bj") {//还款方式选的是等额本金
            if (dklb_g == "2") {//商业贷款
                for (j = 0; j < dkys_g; j++) {
                    //调用函数计算: 本金月还款额
                    huankuan_g = self.getMonthMoney2(sydklv_g, dkze_g, dkys_g, j);
                    hkze_g += huankuan_g;//还款总额
                    huankuan_g = Math.round(huankuan_g * 100) / 100;
                    yjhk_g += (j + 1) + "月：" + huankuan_g + "(元)<br/>";
                }
            }
            else if (dklb_g == "1") {//公积金贷款
                for (j = 0; j < dkys_g; j++) {
                    //调用函数计算: 本金月还款额
                    huankuan_g = self.getMonthMoney2(gjjdklv_g, dkze_g, dkys_g, j);
                    hkze_g += huankuan_g;//还款总额
                    huankuan_g = Math.round(huankuan_g * 100) / 100;
                    yjhk_g += (j + 1) + "月：" + huankuan_g + "(元)<br/>";
                }
            }
            else {//组合贷款
                for (j = 0; j < dkys_g; j++) {
                    //调用函数计算: 本金月还款额
                    huankuan_g = self.getMonthMoney2(sydklv_g, syx_g, dkys_g, j_g) + self.getMonthMoney2(gjjdklv_g, gjj_g, dkys_g, j);
                    hkze_g += huankuan_g;//还款总额
                    huankuan_g = Math.round(huankuan_g * 100) / 100;
                    yjhk_g += (j + 1) + "月：" + huankuan_g + "(元)<br/>";
                }
            }
        }
        var zflxk_g = hkze_g - dkze_g;//支付利息款
        //$("#fangkuan_total1_g").text(fwzj_g);//房屋总价
        //$("#money_first1_g").text(parseFloat(sfk_g));//首付款huankuantype1
        $("#daikuan_total1_g").text(dkze_g.toFixed(2));//贷款总额
        if (dklb_g == "2") {//商业贷款
            $("#ggj_lilv1_g").text("0");//公积金贷款利率
            $("#sy_lilv1_g").text((sydklv_g * 100).toFixed(2) + "%");//商业贷款利率
        }
        else if (dklb_g == "1") {//公积金贷款
            $("#ggj_lilv1_g").text((gjjdklv_g * 100).toFixed(2) + "%");//公积金贷款利率
            $("#sy_lilv1_g").text("0");//商业贷款利率
        }
        else {//组合贷款
            $("#ggj_lilv1_g").text((gjjdklv_g * 100).toFixed(2) + "%");//公积金贷款利率
            $("#sy_lilv1_g").text((sydklv_g * 100).toFixed(2) + "%");//商业贷款利率
        }
        $("#all_total1_g").text(hkze_g.toFixed(2));//还款总额
        $("#accrual1_g").text(zflxk_g.toFixed(2));//支付利息款
        $("#month1_g").text(dkys_g);//贷款月数
        $("#month_money1_g").text(yjhk_g);//月均还款
        $("#month_money2_g").text(yjhk_g);//月均还款

        var huankuanmingxi = document.getElementById("ltlgongjijin");

        huankuanmingxi.innerHTML = "<li><em></em><b>" + yjhk_g + "</b></li>";

        document.getElementById("jieguo_g").style.display = 'block';
    },



    ext_total_z: function (type_z) {
        var self_z = this;
        var jisuan_radio_z = $("input[name=jisuan_radio_z]:checked").val();//计算方式

        if ($("#total_gjj_z").val() == "" || $("#total_sy_z").val() == "") {
            alert("请填写公积金贷款或商业贷款");
            return;
        }

        var month_sd_z = $("#years_z").val();//商业贷款属于哪个档
        if (month_sd_z == 1) {
            month_sd_z = 1;//1年
        }
        else if (month_sd_z > 1 && month_sd_z <= 5) {
            month_sd_z = 5;//1-5年
        } else {
            month_sd_z = 0;//5年以上
        }
        var month_gjj_z = $("#years_z").val();//商业贷款属于哪个档
        if (month_gjj_z >= 1 && month_gjj_z <= 5) {
            month_gjj_z = 5;//1-5年
        } else {
            month_gjj_z = 0;//5年以上
        }
        var huankuantype_z = $("input[name=huankuantype_z]:checked").val();//还款方式
        if (huankuantype_z == "bx") {//等额本息
            $("#calc1_de_z").css("display", "inline");
            $("#calc1_bj_z").css("display", "none");
            self_z.bx_gongshi_z(huankuantype_z, type_z, jisuan_radio_z, month_gjj_z, month_sd_z);
        } else {//等额本金
            $("#calc1_de_z").css("display", "none");
            $("#calc1_bj_z").css("display", "inline");
            self_z.bx_gongshi_z(huankuantype_z, type_z, jisuan_radio_z, month_gjj_z, month_sd_z);
        }
    },
    bx_gongshi_z: function (hkfs_z, dklb_z, jsfs_z, month_gjj_z, month_sd_z) {//本息计算公式 还款方式,贷款类别,计算方式,商业贷款属于哪个档,公积金贷款属于哪个档
        var self_z = this;
        var fwzj_z = parseFloat($("#price_z").val()) * parseFloat($("#sqm_z").val());//房屋总价
        var sfk_z = fwzj_z * parseFloat(1 - $("#anjie_z").text() * 0.1).toFixed(1);//首付款
        var dkze_z = 0;//贷款总额
        if (jsfs_z == "1") {//根据面积、单价计算
            dkze_z = parseFloat(fwzj_z) - parseFloat(sfk_z);//贷款总额
        }
        else if (jsfs_z == "2") {//根据贷款总额计算
            dkze_z = parseFloat($("#daikuan_total0_z").val()) * 10000;//贷款总额
        }
        if (dklb_z == "3") {//组合贷款
            dkze_z = parseFloat($("#total_sy_z").val()) * 10000 + parseFloat($("#total_gjj_z").val()) * 10000;//贷款总额
        }
        var gjj_z = parseFloat($("#total_gjj_z").val()) * 10000;//组合贷款时填的公积金贷款总额
        var syx_z = parseFloat($("#total_sy_z").val()) * 10000;//组合贷款时填的商业性贷款总额
        var gjjdklv_z = lilv_array[$("#ContentPlaceHolder1_lilv_z").val()][1][month_gjj_z];//公积金贷款利率
        var sydklv_z = lilv_array[$("#ContentPlaceHolder1_lilv_z").val()][2][month_sd_z];//商业贷款利率
        var dkys_z = parseInt($("#years_z").val()) * 12;//贷款月数
        var yjhk_z = 0;//月均还款
        var hkze_z = 0;//还款总额
        if (hkfs_z == "bx") {//还款方式选的是等额本息
            if (dklb_z == "2") {//商业贷款
                yjhk_z = self_z.getMonthMoney(sydklv_z, dkze_z, dkys_z).toFixed(2);
            }
            else if (dklb_z == "1") {//公积金贷款
                yjhk_z = self_z.getMonthMoney(gjjdklv_z, dkze_z, dkys_z).toFixed(2);
            }
            else {//组合贷款
                yjhk_z = parseFloat(self_z.getMonthMoney(gjjdklv_z, gjj_z, dkys_z).toFixed(2)) + parseFloat(self_z.getMonthMoney(sydklv_z, syx_z, dkys_z).toFixed(2));//月均还款
            }
            hkze_z = yjhk_z * dkys_z;//还款总额
        } else if (hkfs_z == "bj") {//还款方式选的是等额本金
            if (dklb_z == "2") {//商业贷款
                for (j = 0; j < dkys_z; j++) {
                    //调用函数计算: 本金月还款额
                    huankuan_z = self_z.getMonthMoney2(sydklv_z, dkze_z, dkys_z, j);
                    hkze_z += huankuan_z;//还款总额
                    huankuan_z = Math.round(huankuan_z * 100) / 100;
                    yjhk_z += (j + 1) + "月," + huankuan_z + "(元)\n";
                }
            }
            else if (dklb_z == "1") {//公积金贷款
                for (j = 0; j < dkys_z; j++) {
                    //调用函数计算: 本金月还款额
                    huankuan_z = self_z.getMonthMoney2(gjjdklv_z, dkze_z, dkys_z, j);
                    hkze_z += huankuan_z;//还款总额
                    huankuan_z = Math.round(huankuan_z * 100) / 100;
                    yjhk_z += (j + 1) + "月," + huankuan_z + "(元)\n";
                }
            }
            else {//组合贷款
                for (j = 0; j < dkys_z; j++) {
                    //调用函数计算: 本金月还款额
                    huankuan_z = self_z.getMonthMoney2(sydklv_z, syx_z, dkys_z, j) + self_z.getMonthMoney2(gjjdklv_z, gjj_z, dkys_z, j);
                    hkze_z += huankuan_z;//还款总额
                    huankuan_z = Math.round(huankuan_z * 100) / 100;
                    yjhk_z += (j + 1) + "月," + huankuan_z + "(元)\n";
                }
            }
        }
        var zflxk_z = hkze_z - dkze_z;//支付利息款
        if (dklb_z == "2") {//商业贷款
            $("#ggj_lilv1_z").text("0");//公积金贷款利率
            $("#sy_lilv1_z").text((sydklv_z * 100).toFixed(2) + "%");//商业贷款利率
        }
        else if (dklb_z == "1") {//公积金贷款
            $("#ggj_lilv1_z").text((gjjdklv_z * 100).toFixed(2) + "%");//公积金贷款利率
            $("#sy_lilv1_z").text("0");//商业贷款利率
        }
        else {//组合贷款
            $("#ggj_lilv1_z").text((gjjdklv_z * 100).toFixed(2) + "%");//公积金贷款利率
            $("#sy_lilv1_z").text((sydklv_z * 100).toFixed(2) + "%");//商业贷款利率
        }
        $("#daikuan_total1_z").text(dkze_z.toFixed(2));//贷款总额
        $("#all_total1_z").text(hkze_z.toFixed(2));//还款总额
        $("#accrual1_z").text(zflxk_z.toFixed(2));//支付利息款
        $("#month1_z").text(dkys_z);//贷款月数
        $("#month_money1_z").text(yjhk_z);//月均还款
        $("#month_money2_z").text(yjhk_z);//月均还款

        document.getElementById("jieguo_z").style.display = 'block';
    },










    formReset: function () {
        document.getElementById("calc1_js_div1").style.display = 'block';
        document.getElementById("calc1_js_div2").style.display = 'none';

        // document.getElementById("jieguo").style.display = 'none';
        // document.getElementById("jieguo_g").style.display = 'none';
        // document.getElementById("jieguo_z").style.display = 'none';

        document.getElementById("daikuan_total0").value = "";
        document.getElementById("price").value = "";
        document.getElementById("sqm").value = "";
        document.getElementById("calc1_radio1").checked = true;
        document.getElementById("huankuantype1").checked = true;




        // document.getElementById("calc1_js_div1_g").style.display = 'block';
        // document.getElementById("calc1_js_div2_g").style.display = 'none';

        // document.getElementById("daikuan_total0_g").value = "";
        // document.getElementById("price_g").value = "";
        // document.getElementById("sqm_g").value = "";
        // document.getElementById("calc1_radio1_g").checked = true;
        // document.getElementById("huankuantype1_g").checked = true;


        // document.getElementById("total_gjj_z").value = "";
        // document.getElementById("total_sy_z").value = "";
        // document.getElementById("huankuantype1_z").checked = true;




        //document.getElementById("calc1_benjin").style.display = 'none';
    },
    getMonthMoney: function (lilv, total, month) {//等额本息核心算法
        var lilv_month = lilv / 12;//月利率
        return total * lilv_month * Math.pow(1 + lilv_month, month) / (Math.pow(1 + lilv_month, month) - 1);
    },
    getMonthMoney2: function (lilv, total, month, cur_month) {//等额本金核心算法
        var lilv_month = lilv / 12;//月利率
        var benjin_money = total / month;
        return (total - benjin_money * cur_month) * lilv_month + benjin_money;
    }
}
