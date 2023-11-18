import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import dashboard from "./assets/illustration-dashboard.png";
import facebook from "./assets/facebook.svg";
import facebookClick from "./assets/facebook-click.svg";
import twitter from "./assets/twitter.svg";
import twitterClick from "./assets/twitter-click.svg";
import instagram from "./assets/instagram.svg";
import instagramClick from "./assets/instagram-click.svg";
function App() {
  const [activateFacebook, setActivateFacebook] = useState(facebook);
  const [activateInstagram, setActivateInstagram] = useState(instagram);
  const [activateTwitter, setActivateTwitter] = useState(twitter);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const handleInputChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(inputEmail));
    console.log(isValid);
    console.log(email);
  };
  return (
    <>
      <header></header>
      <main>
        <img id="logo" src={logo} alt="Ping" />
        <section id="desc">
          <h1 id="title">
            We are launching <span id="title-bold">soon!</span>
          </h1>
          <p>Subscribe and get notified</p>
        </section>
        <section className={isValidEmail ? "form" : "form error"}>
          <form
            className="formEmail"
            onSubmit={(e) => {
              e.preventDefault();
              isValid ? setIsValidEmail(true) : setIsValidEmail(false);
            }}
          >
            <label htmlFor="email">
              <input
                className={isValidEmail ? "emailI" : "errorEmailI"}
                type="text"
                placeholder="Your email andress..."
                onChange={handleInputChange}
                name="email"
                id="email"
              />
            </label>
            <button id="submit" type="submit">
              Notify Me
            </button>
          </form>
          {isValidEmail ? (
            <p></p>
          ) : (
            <p className="errorEmail">Please provide a valid email address</p>
          )}
        </section>
        <img id="dashboard" src={dashboard} alt="dashboard" />
        <section className="boxes">
          <div
            className={activateFacebook != facebook ? "box activate" : "box"}
            onClick={() =>
              setActivateFacebook(
                activateFacebook != facebook ? facebook : facebookClick
              )
            }
          >
            <img className="svg" src={activateFacebook} alt="facebook" />
          </div>
          <div
            className={activateTwitter != twitter ? "box activate" : "box"}
            onClick={() =>
              setActivateTwitter(
                activateTwitter != twitter ? twitter : twitterClick
              )
            }
          >
            <img src={activateTwitter} alt="twitter" />
          </div>
          <div
            className={activateInstagram != instagram ? "box activate" : "box"}
            onClick={() =>
              setActivateInstagram(
                activateInstagram != instagram ? instagram : instagramClick
              )
            }
          >
            <img src={activateInstagram} alt="instagram" />
          </div>
        </section>
        <section className="copy">
          <p>&copy; Copyright Ping. All rights reserved.</p>
        </section>
      </main>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">AllanHanauer</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
