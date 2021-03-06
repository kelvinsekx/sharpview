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
font-size: 65%;

// guarantee me it wont elapse the top
position : relative;
top: 0px;
text-align: center;
padding-top: 0.45em;
padding-bottom: 0.45em;
@media (min-width: 888px){
  width: 70%;
  font-size: 80%;
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
font-weight: 608;
a{
  color: #f4f4f4;
}
`
export const StyledHeadNav = Styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
//border: 2px solid red;
position: relative;
top: 0.24em;
@media (max-width: 888px){
  margin-top: 0.5em;
}
`
export const StyledBannerULDiv = Styled.div`
@media (max-width: 888px){
  display: none;
}
display: flex;
justify-content: flex-start;
position: relative;
top: 1.29rem;
bottom: auto;
left: 2rem;
//border: 2px solid red;
`
export const StyledBannerUL = Styled.ul`
//border: 2px solid red;
list-style : none;
display : flex;
align-items: center;
justify-content: space-between;
width : 16rem;

li {
    font-size: 91%;
    font-weight: 500;

  a{
    color: #fff;
    font-weight: 700;
  }
}
`

export const BHWrapper = Styled.div`
max-width: 95rem;
position: relative;
padding-left: 1rem;
padding-right: 1rem;
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
color: white;
font-weight: 780;
@media (min-width: 888px) {
    width: 70%;
    padding-left: 2rem;
padding-right: 2rem;
  }
`

export const ToogleBtn = Styled.button`
display: block;
position: fixed;
top: 40rem;
right: 0px;
padding: 0.7em 0.2em 0.7em 0.4em;
border: 2px solid purple;
color: purple;
background: #fff;
border-top-left-radius: 50%;
border-bottom-left-radius: 50%;
z-index: 500;

  top: 23rem;
right: 0px;

@media (min-width: 888px){
  display: none;
}
`
