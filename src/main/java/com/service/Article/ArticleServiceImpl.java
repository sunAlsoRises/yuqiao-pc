package com.service.Article;

import com.mapper.Article.ArticleMapper;
import com.model.FK_House;
import com.model.Sys_Article;
import com.util.Page;
import com.util.QueryVo;
import com.util.article.QueryArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService{
    @Autowired
    ArticleMapper article;
    //分页获取文章
    @Override
    public Page<Sys_Article> findArticleByPage(QueryArticle queryVo) {
        queryVo.setStart((queryVo.getCurrentPage()-1)*queryVo.getPageSize());

        List<Sys_Article> list = this.article.findArticleByPage(queryVo);

        //查询数据总条数
        Integer zongtiaoshu = this.article.queryCountByPage(queryVo);
//        System.out.println("service总条数="+zongtiaoshu);
//        将结果封装
        Page<Sys_Article> page = new Page<>(zongtiaoshu, queryVo.getCurrentPage(),queryVo.getPageSize(),list);

        return page;
    }
//    通过id获取文章
    @Override
    public Sys_Article findArticleById(String id) {
        Sys_Article articleById = this.article.findArticleById(id);
        return articleById;
    }
}
