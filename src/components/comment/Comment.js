import React from "react"
import Moment from "react-moment"
import "./comment.css"

function toDateTime(secs) {
  var t = new Date(1970, 0, 1) // Epoch
  t.setSeconds(secs+3600)
  return t
}

export default function Comment({ comment }) {
  const date = comment.createdAt.seconds
    ? toDateTime(comment.createdAt.seconds)
    : comment.createdAt
  
  return (
    <div className="comment">
      <span>{comment.name.slice(0, 2)}</span>
      <div className="comment-header">
        <h5 className="comment-owner">{comment.name}</h5>
        <div className="comment-created-at">
          <Moment date={date} format="DD.MM.YYYY HH:mm" />
        </div>
      </div>
      <div className="comment-comment">{comment.comment}</div>

      {/* {comment.slug} */}
    </div>
  )
}
