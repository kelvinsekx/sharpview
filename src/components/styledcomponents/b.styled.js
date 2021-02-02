import Styled from "styled-components"

export const StyledFooter = Styled.footer`
@media (min-width: 750px) {
    border-top: 1px solid var(--theme-ui-colors-grey-20,#f0f0f2);
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-top: 2rem;
}
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
color: var(--theme-ui-colors-grey-50,#78757a);
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
font-size: 0.725rem;
margin-bottom: 3rem;
margin-top: 1.5rem;
-webkit-order: 3;
-ms-flex-order: 3;
order: 3;
`

export const FDiv1 = Styled.div`
@media (min-width: 750px){
    margin-top: 0;
-webkit-order: 0;
-ms-flex-order: 0;
order: 0;
}
font-size: 0.75rem;
margin-top: 0.75rem;
-webkit-order: 2;
-ms-flex-order: 2;
order: 2;
`

export const StyledFlex = Styled.div`
display: flex;
width: 80%;
height: 22rem;
//border: 2px solid red; 
position: relative;
left:8rem;
right: 8rem;
@media (max-width: 588px){
    left: 0px;
    right: 0px;
    width: 100%;
    height: 12rem;
}
`

export const StyledIndexThreeFlex = Styled.div`
display: flex;
flex-direction: ${({dir})=>dir};
width: ${({width})=>width ? width : '100%'};
align-items: center;
justify-content: center;
//border: 2px solid red;
margin: 0.3rem 0;
`

export const StyledTwoFlex = Styled.div`
display: flex;
flex-direction: column;
position: relative;
@media (min-width: 588px){
    flex-direction: row;
}
`

export const StyledEye = Styled.span`
font-size: ${({size})=> {let sz = Number(size) * 0.7;  return sz +'em'}};
font-weight: ${({size})=> Number(size)/2 + 'rem'}
min-height: 5rem;
@media (min-width: 588px){
    font-size: ${({size})=> {let sz = size;  return sz +'em'}};
}
`
export const StyledDetails = Styled.p`
color: ${({colr})=>colr};
`

export const StyledEqualHalf = Styled.div`
@media (min-width: 599px){
width: ${({eq})=>eq+'%'};
padding: 0px 1rem;
}
`

export const StyledStrong = Styled.strong`
min-width: 7rem;
display: inline-block;
color: ${({col})=>col};
`

export const StyledL4 = Styled.h4`
text-transform: uppercase;
font-size: 70%;
margin: 0;
font-weight: 100;
color: rgba(109, 96, 96, 0.9);
-webkit-letter-spacing: 0.075em;
-moz-letter-spacing: 0.075em;
-ms-letter-spacing: 0.075em;
letter-spacing: 0.075em;
line-height: 1;
margin-top: 1.2rem;
`

export const StyledL3 = Styled.h3`
font-weight: 880;
margin-bottom: 1.4rem;
letter-spacing: -0.015em;
font-size: 2.25rem;
line-height: 1.1;
margin: 2rem 0px;
`

export const Num = Styled.h5`
border-radius: 50%;
background-color: rgba(12,45, 122, 0.1);
padding: 0.15em 0.5em;
color:rgba(12,45, 122, 1)
`

export const StyledInH4 = Styled.h4`
@media (min-width: 720px){
    font-size: 1.5rem;
}
margin: 0;
line-height: 1.25;
color: #232129;
font-weight: 700;
font-family: Futura PT,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
-webkit-letter-spacing: -0.015em;
-moz-letter-spacing: -0.015em;
-ms-letter-spacing: -0.015em;
letter-spacing: -0.015em;
font-size: 1.25rem;
`



