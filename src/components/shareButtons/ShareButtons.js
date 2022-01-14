import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    // FacebookMessengerIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
  } from "react-share"
import "./shareButtons.css"

export default function ShareButtons({url}) {

    const style = {
        fill: "#988e91",
      }

    return (
        <div className="blog-post-footer-share-icons">
        <FacebookShareButton url={url}>
          <FacebookIcon size={30} round={true} bgStyle={style} />
        </FacebookShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={30} round={true} bgStyle={style} />
        </LinkedinShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon size={30} round={true} bgStyle={style} />
        </TwitterShareButton>
      </div>
    )
}
