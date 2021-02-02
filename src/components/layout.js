import React from "react"
// prefetch this css
import "./qfetch-css.css"

// now fetch the rest
import {Banner, Header, EFooter} from "./sundries"
import {BHWrapper} from "./styledcomponents/a.styled";


function Layout({ children }) {
  return (
    <div>
      <div style={{background: `rgba(1, 2, 122, 0.2)`, position: 'sticky', top: '0px'}}>
          <BHWrapper>
              <Banner />
              <Header />
          </BHWrapper>
        </div>
        <main>
            {children}
        </main>
        <EFooter />
    </div>
  )
}

export default Layout;