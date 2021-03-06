import React from "react";
import Layout from "../components/layout";
import {Lala} from "../components/index.sundries";

import "../components/indexCss.css";
import Fade from 'react-reveal/Fade';
import {StyledIndexThreeFlex,StyledTwoFlex,StyledIndexFlex} from "../components/styledcomponents/b.styled";

export default function About (){
     return (
     <Layout>
          <StyledIndexThreeFlex rem={true} className="ap">
               <StyledTwoFlex>
               <StyledIndexFlex dir="column">
                    <Lala cu="pink"/>
                    <h2 style={{padding: 0, margin: 0}}>who we are</h2>
                    <Fade>
                         <p>We are a firm of Eye care and optometric care registered with NHIS {"Ref: NHIS/HCP/OY/0225/S"} located at the heart of Ibadan</p>
                    <p>No doubt, ours is an Eye care centre noted for excellence in our field as evidenced by large number of clients corporate and individual throught Nigeria.</p>
                    </Fade>
                    <p>We are alos backed by high quality staff to ensure prompt services and care to all clients in good time.</p>
                    <p>We provide varying eyes exams and solutions. Don't judge the severity rather visit sharpview optometric clinic today.</p>
               </StyledIndexFlex>

               <StyledIndexFlex dir="column">
                    <Lala cu='red' />
                    <h2 style={{padding: 0, margin: 0}}>how we do</h2>
                    <Fade>
                    <p>We achieve our goals using state of the earth facilities and equipments. A step into the doors of sharpview say it all.</p>
                    </Fade>
                    <p>Also, our team are highly trained and certifies practitionals.</p>
               </StyledIndexFlex>

               <StyledIndexFlex dir="column">
                    <Lala cu="purple" />
                    <h2 style={{padding: 0, margin: 0}}>why you should pay us a visit</h2>
                    <Fade>
                    <p>Well, we aim at providing a family like experience for all our clients. Also, we love people and fear God. Now that is a bit to make you want to pay us a visit. </p>
                    </Fade>
               </StyledIndexFlex>
               </ StyledTwoFlex>
          </StyledIndexThreeFlex>
     </Layout>
     )
}