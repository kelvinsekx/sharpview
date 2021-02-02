import Styled from "styled-components"

export const StyledBannerWrapper = Styled.div`
// handle display flex
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;

// handle align-box to center
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;

// put the aligned-box content center
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;

background : linear-gradient(to right,#f219aa,#7026B9);
height: 100%;
width: 100%;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
color: #ffffff;
font-size: 90%;

// guarantee me it wont elapse the top
position : relative;
top: 0px;

padding-top: 0.45em;
padding-bottom: 0.45em;
@media (min-width: 566px){
  width: 60%;
  font-size: 80%;
}

@media (max-width: 566px){
  text-align: center;
}
`

export const StyledBannerAnchor = Styled.a`
--theme-ui-colors-white : #f4f4f4;
color: var(--theme-ui-colors-white,#ffffff);
font-weight: 600;
-webkit-text-decoration: underline;
text-decoration: underline;
`

export const BrandName = Styled.b`
font-weight: 888;
`
export const StyledHeadNav = Styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
//border: 2px solid red;
@media (max-width: 588px){
  margin-top: 1em;
}
`
export const StyledBannerULDiv = Styled.div`
display: flex;
justify-content: flex-start;
position: relative;
top: 1.29rem;
bottom: auto;
left: 2rem;
//border: 2px solid red;
@media (max-width: 588px){
  display: none;
}
`
export const StyledBannerUL = Styled.ul`
//border: 2px solid red;
list-style : none;
display : flex;
align-items: center;
justify-content: space-between;
width : 16rem;

li {
    font-size: 89%;
}
`

export const BHWrapper = Styled.div`
max-width: 90rem;
position: relative;
padding-left: 2rem;
padding-right: 2rem;
margin-left: auto;
margin-right: auto;
width: 100%;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
position: relative;
z-index: 100;
@media (min-width: 568px) {
    width: 80%;
  }
  @media (max-width: 568px) {
    width: 80%;
    position: none;
    padding: 0px;
  }
`

export const ToogleBtn = Styled.button`
display: none;
`
