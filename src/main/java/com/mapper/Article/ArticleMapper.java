package com.mapper.Article;

import com.model.Sys_Article;
import com.util.QueryVo;
import com.util.article.QueryArticle;

import java.util.List;

public interface ArticleMapper {
    List<Sys_Article> findArticleByPage(QueryArticle vo);
    Integer queryCountByPage(QueryArticle vo);
    Sys_Article findArticleById(String id);
}
