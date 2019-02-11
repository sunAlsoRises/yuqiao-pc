package com.service.Article;

import com.model.Sys_Article;
import com.util.Page;
import com.util.QueryVo;
import com.util.article.QueryArticle;

import java.util.List;

public interface ArticleService {
    Page<Sys_Article> findArticleByPage(QueryArticle vo);
//    通过id获取文章
    Sys_Article findArticleById(String id);
}
