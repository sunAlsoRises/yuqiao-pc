var HouseList = {
    fenye: function (dom, data, call) {
        dom.append();
        var divye = $('<div class="pagesizebox"/>');
        var divinfo = $('<div class="pageinfo">').append($('<p id="ContentPlaceHolder1_pageinfo2">').append(data.Title));
        var divfenye = $('<div class="pagebtn" id="Pagination2"></div>');
        divye.append(divinfo);
        divye.append(divfenye);
        dom.append(divye);
        divfenye.append(WindowPage.fenye(divfenye, data, function (redata) {
            if (redata.page == 0) {
                return;
            }
            redata["href"] = HouseList.getUrl(redata);
            call && call(redata);
        }));
    },
    getUrl: function (redata) {
        var hreflist = location.href.split('/');
        var href = "";
        $.each(hreflist, function (i, _i) {
            
            if (_i.search("pg") >= 0 || _i=="") {
                return;
            }
            if (i != 0) {
                href += "/";
            }
            if (_i == "http:" || _i == "https:" ) {
                href += _i + "/";
                return;
            }
            href += _i;
        })
        return href += '/pg' + redata.page;
    }
}