import React from "react"
import {
  StyledBannerWrapper, StyledBannerUL,
  StyledHeadNav, StyledBannerULDiv,
  StyledBannerAnchor, ToogleBtn,
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
          <StyledBannerAnchor href="/bookings">
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
        <BrandName>Sharpview</BrandName>
        <ToogleBtn
          type="button"
          aria-expanded="false"
          aria-label="open-navigation"
        >
          <span>hidden icon</span>
        </ToogleBtn>
      </div>

      <StyledBannerULDiv>
        <StyledBannerUL>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact</li>
        </StyledBannerUL>
      </StyledBannerULDiv>

      <div style={{position: 'relative', top: '0.3rem'}}>
        <BsSearch />
      </div>
    </StyledHeadNav>
  </header>
)
