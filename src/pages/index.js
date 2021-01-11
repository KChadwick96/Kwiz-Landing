import React from "react"
import { Link, Title, Meta } from "react-head"

import "./index.css"

const PhonePreview = () => (
  <div className="device">
    <img src="/img/game.jpg" alt="Game preview" />
  </div>
)

const Navbar = () => (
  <nav className="landing-header">
    <div className="landing-header__wrapper">
      <img src="/img/logo.png" alt="Kwiz" style={{ maxWidth: "100px" }} />
      <div>
        <a className="button" href="https://app.kwizgame.com/register">
          Sign up
        </a>
      </div>
    </div>
  </nav>
)

const Landing = () => {
  return (
    <div className="landing">
      <Link rel="icon" href="/img/icons/favicon.ico" />
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/icons/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/icons/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/icons/favicon-16x16.png"
      />
      <Title>Kwiz</Title>
      <Meta name="description" content="Kwiz - By Ninja Labs" />

      <Navbar />

      <section className="landing__section--main">
        <div className="container landing__section--main">
          <div
            style={{
              flex: "1 0 50%",
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <h1>Build and host your own quizzes!</h1>
              <p className="--margin-bottom-large">
                Create your quizzes, start a game and invite your friends.
              </p>
              <a className="button" href="https://app.kwizgame.com/register">
                Get started
              </a>
            </div>
          </div>
          <div className="landing__main-device">
            <PhonePreview />
          </div>
        </div>
      </section>

      <section className="landing__section landing__section--secondary">
        <div className="container">
          <div
            className="landing__secondary-content"
            style={{ maxWidth: "450px" }}
          >
            <h2>Features</h2>

            <h3 variant="display-three">Question Images!</h3>
            <p className="--margin-bottom-largest">
              You can now add images to your questions! Want to do a "Guess that
              flag" round? Simply enter the image adress for your questions for
              your players to see
            </p>

            <h3>Better Results</h3>
            <p>
              Once the last player has submitted their answer, the game will
              display the results for that question. The players are kept up to
              date with who's getting questions right and whos struggling
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
