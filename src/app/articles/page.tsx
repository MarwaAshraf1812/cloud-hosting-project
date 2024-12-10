import ArticleItem from "../components/articles/ArticleItem"
import { Article } from "../../utils/types"
const ArticlePage = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const articles: Article[] = await response.json()

  if (!response.ok) {
    throw new Error('Failed to fetch articles')
  }

  return (
    <section className="container mx-auto px-5 mt-5 fixed_height">
      <div className="flex flex-wrap">
      {articles.map(article => (
        <ArticleItem key={article.id} article={article} />  
      ))}
      </div>
    </section>
  )
}

export default ArticlePage