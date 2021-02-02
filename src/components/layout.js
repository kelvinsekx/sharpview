import React from "react"
// prefetch this css
import "./qfetch-css.css"

// now fetch the rest
import {Banner, Header, EFooter} from "./sundries"
import {BHWrapper} from "./styledcomponents/a.styled";


function Layout({ children }) {
  return (
    <div>
        <BHWrapper>
            <Banner />
            <Header />
        </BHWrapper>
        <main>
            {children}
        </main>
        <EFooter />
    </div>
  )
}

export default Layout;