import React, { useState } from "react"
import { Link } from "gatsby"
// prefetch this css
import "./qfetch-css.css"
import Brand from "../images/favicon.jpg"
// now fetch the rest
import { Banner, Header, EFooter, MinNavLi } from "./sundries"
import { BHWrapper, ToogleBtn } from "./styledcomponents/a.styled"

function Layout(props) {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <ToogleBtn
        type="button"
        aria-expanded="false"
        aria-label="open-navigation"
        onClick={() => setToggle(!toggle)}
      >
        <span>{toggle ? "close" : "menu"}</span>
      </ToogleBtn>
      <div className={toggle ? "disco" : "dont-disco"}>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', paddingTop: "0.3rem", paddingBottom: '4em'}}>
          <Link to="/">
            <div style={{ width: "6rem", height: "5.3rem" }}>
              <img src={Brand} alt="sharpview logo" />
            </div>
          </Link>
        </div>
        <div>
          {["About Us", "Contact"].map(each => (
            <MinNavLi key={each}>{each}</MinNavLi>
          ))}
          <div style={{ marginBottom: "1.2rem", textAlign: 'center'}}><a href="https://forms.gle/ssGd28KgtSPZbi9s6" style={{borderBottom: "4px solid black"}}>Book an appointment</a></div>
        </div>
        <footer
          style={{ color: "grey", marginTop: "2rem", padding: "0.3em 0.2em" }}
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
      {toggle ? null : (
        <div>
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
          <main>{props.children}</main>
          <EFooter />
        </div>
      )}
    </div>
  )
}

export default Layout
