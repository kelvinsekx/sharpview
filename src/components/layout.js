import React from "react"
// prefetch this css
import "./qfetch-css.css"

// now fetch the rest
import {Banner, Header, EFooter} from "./sundries"
import {BHWrapper, ToogleBtn} from "./styledcomponents/a.styled";


function Layout({ children }) {
  return (
    <div>
      <ToogleBtn
          type="button"
          aria-expanded="false"
          aria-label="open-navigation"
        >
          <span>menu</span>
        </ToogleBtn>
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