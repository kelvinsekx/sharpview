import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

import SEO from "../components/seo"
import Stuck from "../components/stuck"
// import "../utils/tinySticky"

import {ImgCarousel} from "../components/index.sundries"
import {StyledIndexThreeFlex,Num, StyledStrong, 
  StyledL3,StyledTwoFlex,StyledIndexFlex,
  StyledInH4, StyledDetails, StyledEqualHalf, 
  StyledL4} from "../components/styledcomponents/b.styled";

import {StyledCaptor, StyledCaptorP, StyledExploreBtn,StyledArrorwDown,
  StyledArr, StyledFlex, StyledCall, StyledCaptorPaa, StyledPop} from "../components/styledcomponents/c.styled"
import "../components/indexCss.css"

import {FiCornerRightDown} from "@react-icons/all-files/fi/FiCornerRightDown";
import {FiActivity} from "@react-icons/all-files/fi/FiActivity"
import {FiPhoneCall} from "@react-icons/all-files/fi/FiPhoneCall"
import {FiFeather} from "@react-icons/all-files/fi/FiFeather"
import {FiChevronDown} from "@react-icons/all-files/fi/FiChevronDown"
import {FaPhone} from "@react-icons/all-files/fa/FaPhone";


import {DTT, WWD} from "../utils/openingDays"
import Snellen from "../images/Snellen_chart.svg.png"

function Home() {
  return (
    <Layout>
      {/** seo */}
      <SEO title="welcome to sharpview" />

      {/**other stuff */}
      <ImgCarousel />
      <StyledArrorwDown>
        <span><FiChevronDown/></span>
        <div>scroll</div>
      </StyledArrorwDown>
      <div style={{margin: "0", padding: "0"}}>
        <StyledIndexThreeFlex dir="column">
          <StyledCaptor>
            <Bounce><div style={{color:'#7026B9'}}>One Eye Care to </div></Bounce>
            <span style={{display: 'block'}}>Rule them all</span>
          </StyledCaptor>
          <StyledIndexThreeFlex dir="column">
            <StyledCaptorP> With a complete range of expert eye care services, <Rotate><span style={{color: 'black', fontWeight: '800'}}>Dr. Gbolade Osinuga and our team,</span></Rotate> are dedicated to helping you enjoy healthy eyes and sharp vision.</StyledCaptorP>
          </StyledIndexThreeFlex>
        </StyledIndexThreeFlex>

        <StyledIndexThreeFlex dir="column" style={{color: 'grey',textAlign: 'center', fontSize: '90%'}}><span style={{color: 'black', fontWeight: '800'}}>#</span>Whether you need a new pair of eyeglasses or treatment for an eye disease.</StyledIndexThreeFlex>

        <StyledIndexThreeFlex as="article" dir="column">
          <Num>0</Num>
          <Zoom><StyledL4>rather be at your comfort</StyledL4></Zoom>
          <StyledL3><div>Don't move too fast </div> <div style={{ color: '#119905', fontSize: '85%'}}>when you can</div></StyledL3>
          <StyledIndexThreeFlex width="80%">
            <StyledPop>
              <Zoom>
              <li><a href="tel:+234 229 18611">
                <div><FiPhoneCall /></div> 
                <div>Give us a call</div></a>
              </li>
              </Zoom>
              <Zoom>
              <li><a href="https://forms.gle/ssGd28KgtSPZbi9s6">
                <div><FiActivity /></div>
                <div>Make an appointment</div></a>
              </li>
              </Zoom>
              <li><Link to="/contact">
                <div><FiFeather /></div>
                <div>Lodge a complain</div></Link></li>
            </StyledPop>
          </StyledIndexThreeFlex>
        </StyledIndexThreeFlex>

        <StyledIndexThreeFlex as="article" dir="column">
          <Num>1</Num>
          <Zoom><StyledL4>top notch services</StyledL4></Zoom>
          <StyledL3><div>Services rendered</div> <div style={{ color: '#119905', fontSize: '85%'}}>by Sharpview</div></StyledL3>
          <StyledIndexThreeFlex width="80%">
            <StyledTwoFlex c={true}>
              {WWD.map(each=><StyledIndexFlex dir="column" key={each.part}>
                  <StyledInH4><span style={{color: "green"}}>{each.part}</span>{each.main}</StyledInH4>
                    <StyledDetails colr={each.cl} dangerouslySetInnerHTML={{ __html: `${each.body}.` }}>
                    </StyledDetails>
                </StyledIndexFlex>)
              }
            </StyledTwoFlex>
          </StyledIndexThreeFlex>
          <StyledExploreBtn>
            <div>Explore what more we offer</div> <StyledArr ><FiCornerRightDown /></StyledArr></StyledExploreBtn>
        </StyledIndexThreeFlex>

          <Stuck>
          <Zoom>
            <div>
                <a href="tel:+234 229 18611">urgent? call now</a>
            </div>
            </Zoom>
          </Stuck>

        <StyledIndexThreeFlex as="article" dir="column">
          <Num>2</Num>
          <Zoom><StyledL4>fast delivery</StyledL4></Zoom>
          <StyledL3>Start from here <div style={{ color: '#119905', fontSize: '85%'}}>it can be painless</div></StyledL3>
          <StyledIndexThreeFlex>
          <StyledTwoFlex>
            <StyledEqualHalf eq='70%' style={{textAlign: 'center'}}>
            <img src = {Snellen} alt="snellen diagram" className='sne-img' />
            </StyledEqualHalf>
            <StyledEqualHalf eq='30%' className="Xsdrt-open">
              <header style={{color: '#119905', padding: '1em', textAlign: 'center'}}>Our working days and time </header>
              <div>
                {
                  DTT.map(each=><StyledIndexFlex key={each.day} style={{fontSize: '102%', color: `${each.col}`}}><div><StyledStrong col='black'>{each.day}</StyledStrong> <span>{each.day === 'Sunday' ? 'closed' : '8:30am - 6:30pm'}</span></div></StyledIndexFlex>)
                }
              </div>
            </StyledEqualHalf>
            </StyledTwoFlex>
            </StyledIndexThreeFlex>
        </StyledIndexThreeFlex>
            
        <StyledIndexThreeFlex as="article" dir="column" className="num-iii">
          <Num>3</Num>
          <h2 style={{fontSize: '250%', fontWeight: '890'}}>Curious Yet?</h2>
          <Fade><p style={{marginBottom: '1rem'}}>It only takes a few minutes to reach us</p></Fade>
          <StyledIndexThreeFlex>
            <StyledFlex style={{justifyContent: 'center', alignItems: 'center'}}>
            <StyledCaptorPaa as='div'>Adjascent Chicken republic, Elewura bus stop, Challenge, Ibadan, Oyo state.</StyledCaptorPaa> <StyledCall><div>+234 229 18611</div><div style={{position: 'relative', marginLeft: '1em', top: '4px'}}><FaPhone /></div></StyledCall>
            </StyledFlex>
          </StyledIndexThreeFlex>
        </StyledIndexThreeFlex>
      </div>
    </Layout>
  )
}

export default Home
