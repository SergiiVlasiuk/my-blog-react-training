import React from "react";
import ArticlesList from "../componenets/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => (
  <>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent}></ArticlesList>
  </>
);

export default ArticlesListPage;
