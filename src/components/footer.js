import React from "react"
import {StyledFooter, FDiv1 } from "./styledcomponents/b.styled"

function Footer() {
  return (
    <StyledFooter>
      <FDiv1>&copy; copy 2021 Sharpview Optometric Clinic</FDiv1>
      <div>
        This beautiful app was created and is maintained by{" "}
        <a href="https://www.kelvinsexk.codes">kelvinsekx</a>
      </div>

      <div>Accessibility and Vision Considerations</div>
    </StyledFooter>
  )
}

export default Footer;
