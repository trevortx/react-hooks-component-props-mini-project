import React from "react";
import Article from "./Article.js"

function ArticleList( {posts} ) {
  const postList = posts.map(post => {
    return <Article key={post.id} posts={post} />
  })

  return (
    <main>
      {postList}
    </main>
  )
}

export default ArticleList