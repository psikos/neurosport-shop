import React, { useState } from "react"
import { useForm } from "react-hook-form"

import { BiCommentAdd } from "react-icons/bi"

import "./commentAdd.css"

import { ErrorMessage } from "@hookform/error-message"

export default function CommentAdd({ handleCommentAdd, slug, slug_raw }) {
  const [isCommentAdded, setIsCommentAdded] = useState(false)

  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = data => {
    const data_obj = {
      slug_raw: slug_raw,
      comments: [
        {
          name: data.name,
          email: data.email,
          comment: data.comment,
          createdAt: new Date(),
        },
      ],
    }

    handleCommentAdd(data_obj)

    setIsCommentAdded(true)
  }

  return (
    <div className="comment-add">
      <form onSubmit={handleSubmit(onSubmit)} className="comment-add-form">
        <div className="comment-add-form-user-info">
          <div className="comment-add-form-user-info-item">
            <input
              className="contact-input"
              placeholder="Nazywam się"
              disabled={isCommentAdded}
              {...register("name", {
                required: "To pole jest wymagane",
                maxLength: 20,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <span>{message}</span>}
            />
          </div>
          <div className="comment-add-form-user-info-item">
            <input
              className="contact-input"
              placeholder="Mój email to"
              disabled={isCommentAdded}
              {...register("email", {
                required: "To pole jest wymagane",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Adres email niepoprawny",
                },
              })}
            />

            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <span>{message}</span>}
            />
          </div>
        </div>
        <div className="comment-textarea-wrapper">
          <textarea
            className="contact-input comment-textarea"
            placeholder="Moja opinia"
            disabled={isCommentAdded}
            {...register("comment", {
              required: "Jeszcze kilka słów od Ciebie :)",
              max: 400,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="comment"
            render={({ message }) => <span>{message}</span>}
          />
        </div>

        <button
          type="submit"
          value="Zostaw komentarz"
          className="comment-add-button"
          disabled={isCommentAdded}
        >
          <span>
            {isCommentAdded ? (
              <p className="comment-thank-msg">
                Dziękujemy za komentarz{" "}
                <button
                  className="button-like-a"
                  onClick={e => {
                    e.preventDefault()
                    setIsCommentAdded(false)
                    resetField("comment")
                  }}
                >
                  {" "}
                  Skomentuj więcej...
                </button>
              </p>
            ) : (
              <>
                <i>
                  <BiCommentAdd />
                </i>
                Zostaw komentarz
              </>
            )}
          </span>
        </button>
      </form>
    </div>
  )
}
