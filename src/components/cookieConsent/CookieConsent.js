import * as React from "react"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

import { BiCookie } from "react-icons/bi"

import "./cookieConsent.css"
import { Link } from "gatsby"
import Container from "../Container"

function isBrowser() {
  return typeof window !== "undefined"
}

function getValue(key, defaultValue) {
  return isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : defaultValue
}

function setValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

function useStickyState(defaultValue, key) {
  const [value, setter] = React.useState(() => {
    return getValue(key, defaultValue)
  })

  React.useEffect(() => {
    setValue(key, value)
  }, [key, value])

  return [value, setter]
}

const CookieConsent = () => {
  const location = useLocation()
  if (isBrowser()) {
    initializeAndTrack(location)
  }

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    "consentCookieHidden"
  )

  const EnableAnalytics = () => {
    document.cookie = "gatsby-gdpr-google-analytics=true"
    setBannerHidden(true)
  }

  return (
    <>
      {!bannerHidden && (
        <div className="cookies">
          <Container>
              <div className="cookies-wrapper">
            <div className="cookies-message-wrapper">
              <i>
                <BiCookie />
              </i>
              <span>
                Używamy plików typu 'cookies' w celu ciągłego doskonalenia
                naszych usług. Więcej w{" "}
                <Link className="cookies-link" to="/private-policy">
                  polityce prywatności
                </Link>
                .
              </span>
            </div>
            <div>
              <button className="cookies-button" onClick={EnableAnalytics}>
                OK
              </button>
            </div>
            </div>
          </Container>
        </div>
      )}
    </>
  )
}

export default CookieConsent
