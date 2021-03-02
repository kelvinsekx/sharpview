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

import Footer from "./footer";

export const EFooter = Footer;

export const Banner = () => (
  <aside>
    <StyledBannerWrapper>
      <div>
        <p>
          <strong>More than an Eye Clinic:</strong> Join us at Sharpview!{" "}
          <StyledBannerAnchor href="/book">
            Book a session now
          </StyledBannerAnchor>
        </p>
        <p style={{fontSize: '67%'}}>No. 64, Adjascent Chicken Replublic, Lagos Road, Elewura Bus-top, <span style={{display: 'block'}}>Challenge, Ibadan.</span></p>
      </div>
    </StyledBannerWrapper>
  </aside>
)

export const Header = () => (
  <header style={{minHeight: '2rem'}}>
    <StyledHeadNav>
      <div>
        <BrandName>
        <Link to="/"><div style={{width: '4rem', height: '3rem'}}><img src={Brand} alt="sharpview logo" /></div>
        </Link>
        </BrandName>
      </div>

      <StyledBannerULDiv>
        <StyledBannerUL>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
