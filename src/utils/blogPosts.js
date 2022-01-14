import {
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore/lite"
import { db } from "./firebase"

const getBlogPostComments = async (slug_raw, callback) => {
  const blogPostComments = doc(db, "blogPost", slug_raw)
  const blogPostSnapshot = await getDoc(blogPostComments)
  const commentsArr = []
  if (blogPostSnapshot.exists()) {
    blogPostSnapshot.data().comments.forEach(comment => {
      commentsArr.push(comment)
    })
  }

  const sortedCommentsArr = commentsArr.sort(
    (a, b) => b.createdAt.seconds - a.createdAt.seconds
  )
  callback(sortedCommentsArr)
}

const addFirstComment = async comment => {
  await setDoc(doc(db, "blogPost", comment.slug_raw), comment, {
    merge: true,
  })
}

const addBlogPostComment = async comment => {
  await updateDoc(doc(db, "blogPost", comment.slug_raw), {
    comments: arrayUnion(comment.comments[0]),
  })
}

export { getBlogPostComments, addBlogPostComment, addFirstComment }
