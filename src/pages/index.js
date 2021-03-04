import React from "react"
import Layout from "../components/layout"
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

// import "../utils/tinySticky"

import {ImgCarousel} from "../components/index.sundries"
import {StyledIndexThreeFlex,Num, StyledStrong, 
  StyledL3,StyledTwoFlex,StyledIndexFlex,
  StyledInH4, StyledDetails, StyledEqualHalf, 
  StyledL4} from "../components/styledcomponents/b.styled";

import {StyledCaptor, StyledCaptorP, StyledExploreBtn,
  StyledArr, StyledFlex, StyledCall, StyledCaptorPaa, StyledUrgent} from "../components/styledcomponents/c.styled"
import "../components/indexCss.css"

import {BsArrowRight} from "@react-icons/all-files/bs/BsArrowRight";
import {FaPhone} from "@react-icons/all-files/fa/FaPhone";
  import LetterEyesExam from "../components/LetterEyesExam.js"

  import {DTT, WWD} from "../utils/openingDays"

function Home() {
  return (
    <Layout>
      <ImgCarousel />
      <div>
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
          <Num>1</Num>
          <Zoom><StyledL4>top notch services</StyledL4></Zoom>
          <StyledL3><div>Services rendered</div> <div style={{ color: '#119905', fontSize: '85%'}}>by Sharpview</div></StyledL3>
          <StyledIndexThreeFlex width="80%">
            <StyledTwoFlex>
              {WWD.map(each=><StyledIndexFlex dir="column" key={each.part}>
                  <StyledInH4><span style={{color: "purple"}}>{each.part}</span>{each.main}</StyledInH4>
                    <StyledDetails colr={each.cl} dangerouslySetInnerHTML={{ __html: `${each.body}.` }}>
                    </StyledDetails>
                </StyledIndexFlex>)
              }
            </StyledTwoFlex>
          </StyledIndexThreeFlex>
          <StyledExploreBtn>
            <div>Explore what more we offer</div> <StyledArr ><BsArrowRight /></StyledArr></StyledExploreBtn>
        </StyledIndexThreeFlex>
        <StyledUrgent>
          <a href="tel:+234 229 18611">urgent? call now</a>
        </StyledUrgent>

        <StyledIndexThreeFlex as="article" dir="column">
          <Num>2</Num>
          <Zoom><StyledL4>fast delivery</StyledL4></Zoom>
          <StyledL3>Start from here</StyledL3>
          {/* <LetterEyesExam /> */}
          <StyledIndexThreeFlex>
          <StyledTwoFlex>
            <StyledEqualHalf eq='70%' style={{textAlign: 'center'}}>
            <LetterEyesExam />
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
