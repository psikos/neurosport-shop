import React from "react"

import Comment from "../comment/Comment"
import CommentAdd from "../commentAdd/CommentAdd"

import { FaRegCommentAlt } from "react-icons/fa"

import "./commentsModule.css"

export default function CommentsModule({
  comments,
  handleCommentAdd,
  slug,
  slug_raw,
}) {
  return (
    <div className="comments-module">
      <h3 className="comments-module-title">
        <span>
          <i>
            <FaRegCommentAlt />
          </i>
          Komentarze ({comments.length})
        </span>
      </h3>
      <CommentAdd
        handleCommentAdd={handleCommentAdd}
        slug={slug}
        slug_raw={slug_raw}
      />
      <ul className="comments-module-list" id="comment-module-list">
        {comments &&
          comments.map((comment, index) => (
            <li key={comment.email + index}>
              <Comment comment={comment} />
            </li>
          ))}
      </ul>
    </div>
  )
}
