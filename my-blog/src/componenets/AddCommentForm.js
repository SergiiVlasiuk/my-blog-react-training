import React, { useState } from 'react'

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('')
  const [commentText, setCommentText] = useState('')
  console.log(`INIT. username: ${username}, commentText: ${commentText}`)
  console.log(
    `INIT. articleName: ${articleName}, setArticleInfo: `,
    setArticleInfo
  )

  const addComment = async () => {
    // console.log(`username: ${username}, commentText: ${commentText}`)
    const result = await fetch(`/api/articles/${articleName}/comment`, {
      method: 'post',
      body: JSON.stringify({ username, text: commentText }),
      // body: { username, text: commentText },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const body = await result.json()
    setArticleInfo(body)
    setUsername('')
    setCommentText('')
  }

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          cols="30"
          rows="4"
          value={commentText}
          onChange={event => setCommentText(event.target.value)}
        />
      </label>
      {/* <button onClick={() => addComment()}>Add Comment</button> */}
      <button onClick={addComment}>Add Comment</button>
    </div>
  )
}

export default AddCommentForm
