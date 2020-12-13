import React, { useEffect, useState } from 'react'
import ArticlesList from '../componenets/ArticlesList'
import CommentsList from '../componenets/CommentsList'
import UpvotesSection from '../componenets/UpvotesSection'
import articleContent from './article-content'
import NotFoundPage from './NotFoundPage'
import AddCommentForm from '../componenets/AddCommentForm'

const ArticlePage = ({ match }) => {
  const name = match.params.name
  const article = articleContent.find(article => article.name === name)

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })
  useEffect(() => {
    const fetchData = async () => {
      // const result = await fetch(`http://localhost:8000/api/articles/${name}`)
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json()
      console.log('body: ', body)
      setArticleInfo(body)
    }
    fetchData()
    // setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) })
  }, [name])

  if (!article) return <NotFoundPage />
  const otherArticles = articleContent.filter(article => article.name !== name)
  console.log('articleInfo: ', articleInfo)

  return (
    <>
      {/* <h1>This is the { name } article</h1> */}
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  )
}

export default ArticlePage

// const ArticleList = () => (
//   <>
//     <h1>Articles</h1>
//     {articleContent.map((article, key) => (
//       <Link
//         className="article-list-item"
//         key={key}
//         to={`/article/${article.name}`}
//       >
//         <h3>{article.title}</h3>
//       </Link>
//     ))}
//   </>
// );
