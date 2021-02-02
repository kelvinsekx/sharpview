import React from "react"
// prefetch this css
import "./qfetch-css.css"

// now fetch the rest
import { Banner, Header, EFooter } from "./sundries"
import { BHWrapper, ToogleBtn } from "./styledcomponents/a.styled"

import { useState } from "react"

function Layout({ children }) {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <ToogleBtn
        type="button"
        aria-expanded="false"
        aria-label="open-navigation"
        onClick={() => setToggle(!toggle)}
      >
        <span>menu</span>
      </ToogleBtn>
      <div className={toggle ? "disco" : "dont-disco"}>
        <div
          style={{ borderBottom: "1px solid black", marginBottom: "1.2rem" }}
        >
          Products
        </div>
        <div
          style={{ borderBottom: "1px solid black", marginBottom: "1.2rem" }}
        >
          About Us
        </div>
        <div
          style={{ borderBottom: "1px solid black", marginBottom: "1.2rem" }}
        >
          Contact
        </div>
        <div
          style={{ borderBottom: "1px solid black", marginBottom: "1.2rem" }}
        >
          Book a Session
        </div>
        <footer
          style={{ color: "grey", marginTop: "1.5rem", padding: "0.3em 0.2em" }}
        >
          <div style={{ fontSize: "70%", marginBottom: "1rem" }}>
            During the use of this app, if you find a glitch or accessibility
            problems, please report an issue to{" "}
            <a href="https://github.com/kelvinsekx">kelvinsekx</a>
          </div>
          <div style={{ fontSize: "70%", marginBottom: "1rem" }}>
            &copy; 2021 Sharpview Optometric Clinic. Adjascent Chicken republic,
            Challenge area, Ibadan.
          </div>
          <div style={{ fontSize: "70%", marginBottom: "1rem" }}>
            This beautiful app is maintained by kelvinsekx.codes
          </div>
        </footer>
      </div>
      {toggle ? null : <div>
        <div
          style={{
            background: `rgba(1, 2, 122, 0.2)`,
            position: "sticky",
            top: "0px",
          }}
        >
          <BHWrapper>
            <Banner />
            <Header />
          </BHWrapper>
        </div>
        <main>{children}</main>
        <EFooter />
      </div>}
    </div>
  )
}

export default Layout
