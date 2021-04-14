import React from "react"
import {Link} from "gatsby"
import Brand from "../images/favicon.jpg";
import {
  StyledBannerWrapper, StyledBannerUL,
  StyledHeadNav, StyledBannerULDiv,
  StyledBannerAnchor,
  BrandName,
} from "./styledcomponents/a.styled";

import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

// icon
import {AiOutlineDeploymentUnit} from "@react-icons/all-files/ai/AiOutlineDeploymentUnit"
import {AiOutlineNodeExpand} from "@react-icons/all-files/ai/AiOutlineNodeExpand"

import Footer from "./footer";

export const EFooter = Footer;

export const Banner = () => (
  <aside>
    <StyledBannerWrapper>
      <div>
        <p style={{fontSize: '80%'}}>
          <strong>More to clinic:</strong> Join us at Sharpview!{" "}
          <StyledBannerAnchor href="https://forms.gle/ssGd28KgtSPZbi9s6">
            Book a session now
          </StyledBannerAnchor>
        </p>
        <p style={{fontSize: '77%'}}>No. 64, Adjascent Chicken Replublic, Lagos Road, Elewura Bus-top, <span style={{display: 'block'}}>Challenge, Ibadan.</span></p>
      </div>
    </StyledBannerWrapper>
  </aside>
)

export const Header = () => (
  <header style={{minHeight: '2rem'}}>
    <StyledHeadNav>
      <div>
        <BrandName>
        <Link to="/"><div style={{width: '3rem', height: '2rem'}}><img src={Brand} alt="sharpview logo" /></div>
        </Link>
        </BrandName>
      </div>

      <StyledBannerULDiv>
        <StyledBannerUL>
          <li>
            <Link to="/about" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{display:"inline-block",fontSize: '1.4rem'}}><AiOutlineDeploymentUnit /></span>
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <span style={{display:"inline-block",fontSize: '1.4rem'}}><AiOutlineNodeExpand /></span>
              <span>Contact</span>
            </Link>
          </li>
        </StyledBannerUL>
      </StyledBannerULDiv>

      <div style={{position: 'relative', top: '0.3rem'}}>
        <BsSearch />
      </div>
    </StyledHeadNav>
  </header>
)

export function MinNavLi ({children}){
  const getLink = `/${children.toLowerCase().split(' ')[0]}`
  return (
    <div
          style={{ marginBottom: "1.2rem", textAlign: 'center'  }}
        >
          <Link style={{borderBottom: "4px solid black"}} to = {getLink}>{children}</ Link>
        </div>
  )
}
