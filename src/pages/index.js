import React from "react"
import Layout from "../components/layout"

import {ImgCarousel} from "../components/index.sundries"
import {StyledIndexThreeFlex,Num, StyledStrong, StyledL3,StyledTwoFlex,
  StyledInH4, StyledDetails, StyledEqualHalf, StyledL4} from "../components/styledcomponents/b.styled";
import "../components/indexCss.css"

import {BsArrowRight} from "@react-icons/all-files/bs/BsArrowRight";
import {FaPhone} from "@react-icons/all-files/fa/FaPhone";

  import LetterEyesExam from "../components/LetterEyesExam.js"

  import {DTT} from "../utils/openingDays"

function Home() {
  return (
    <Layout>
      <ImgCarousel />
      <div>
        <StyledIndexThreeFlex dir="column">
          <div style={{fontSize: '3.4rem', fontWeight: '1800', textAlign:'center', letterSpacing: '-0.015em', lineHeight: '1.1'}}><div style={{color:'#7026B9'}}>One Optometric Clinic to </div><span style={{display: 'block'}}>Rule them all</span></div>
          <StyledIndexThreeFlex dir="column">
            <p style={{textAlign: 'center'}}>Our optometric clinic in Ibadan offers a full range of eye health services to clients of all ages, from children to older adults. With a complete range of expert eye care services, <span style={{color: 'black', fontWeight: '800'}}>Dr. Gbolade Osinuga and our team,</span> are dedicated to helping you enjoy healthy eyes and sharp vision.</p>
          </StyledIndexThreeFlex>
        </StyledIndexThreeFlex>

        <StyledIndexThreeFlex dir="column" style={{color: 'grey'}}><span style={{color: 'black', fontWeight: '800'}}>#</span>Whether you need a new pair of eyeglasses or treatment for an eye disease.</StyledIndexThreeFlex>

        <StyledIndexThreeFlex as="article" dir="column">
          <Num>1</Num>
          <StyledL4>top notch services</StyledL4>
          <StyledL3>Services rendered <span style={{display: 'block', color: '#119905',
        paddingLeft: '1.9rem'}}>by Sharpview</span></StyledL3>
          <StyledIndexThreeFlex width="80%">
          <StyledTwoFlex>
          {[{cl: '#663399'},{cl: '#0d96f2'},{cl: '#bc027f'}].map(each=><StyledIndexThreeFlex dir="column">
              <StyledInH4>Low Vision</StyledInH4>
              <div style={{fontSie: '1rem'}}>
                <StyledDetails colr={each.cl}>A condition characterized by a level of vision that is 20/70.</StyledDetails>
              </div>
            </StyledIndexThreeFlex>)}
            </StyledTwoFlex>
          </StyledIndexThreeFlex>
          <div style={{ border: '1px solid #7026B9', color: '#7026B9',padding: '1em 2em', margin: '3em 0px', display: 'flex', alignItems: 'center'}}>
            <div>Explore what more we offer</div> <div style={{position: 'relative', top:'5px'}}><BsArrowRight /></div></div>
        </StyledIndexThreeFlex>

        <StyledIndexThreeFlex as="article" dir="column">
          <Num>2</Num>
          <StyledL4>fast delivery</StyledL4>
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
                  DTT.map(each=><StyledIndexThreeFlex style={{fontSize: '132%', color: `${each.col}`}}><div><StyledStrong col='black'>{each.day}</StyledStrong> <span>{each.tm}</span></div></StyledIndexThreeFlex>)
                }
              </div>
            </StyledEqualHalf>
            </StyledTwoFlex>
            </StyledIndexThreeFlex>
        </StyledIndexThreeFlex>

        <StyledIndexThreeFlex as="article" dir="column" className="num-iii">
          <Num>3</Num>
          <h2 style={{fontSize: '250%', fontWeight: '890'}}>Curious Yet?</h2>
          <p style={{marginBottom: '1rem'}}>It only takes a few minutes to reach us</p>
          <StyledIndexThreeFlex>
            <StyledIndexThreeFlex width="75%">
            <div>Adjascent Chicken republic, Elewura bus stop, Challenge, Ibadan, Oyo state.</div> <div style={{backgroundColor: '#663399', padding: '1em 1.5em', borderTopRightRadius: '10px',borderBottomRightRadius: '10px', color: 'whitesmoke', fontWeight: '700', display: 'flex' }}><div>+234 8055 3009 95</div><div style={{position: 'relative', marginLeft: '1em', top: '4px'}}><FaPhone /></div></div>
            </StyledIndexThreeFlex>
          </StyledIndexThreeFlex>
        </StyledIndexThreeFlex>
      </div>
    </Layout>
  )
}

export default Home
