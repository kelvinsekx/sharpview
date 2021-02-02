import Styled from "styled-components"

export const StyledCaptor = Styled.div`
font-size: 2rem;
font-weight: 800; 
text-align: center; 
letter-spacing: -0.015em;
line-height: 1.1;
@media (min-width: 588px){
    font-size: 4.9rem;
    letter-spacing: -0.115em;
}
`

export const StyledCaptorP = Styled.div`
text-align: center; 
font-size: 70%;
margin-top: 1em;
margin-bottom: 4em;
padding: 1.3em;
@media (min-width: 588px){
    font-size: 90%;
}
`

export const StyledCaptorPaa = Styled.div`
text-align: center; 
font-size: 70%;
margin-top: 1em;
margin-bottom: 4em;
padding: 0.3em 0.5em;
@media (min-width: 588px){
    font-size: 90%;
}
`

export const StyledExploreBtn = Styled.div`
border: 1px solid #7026B9;
color: #7026B9;
padding: 1em 2em;
margin: 3em 0px;
display: flex;
align-items: center;
font-size: 65%;
border-radius: 12%;
`

export const StyledArr = Styled.div`
position: relative;
@media (min-width: 588px){
top:0.3em;
}
top: 12%;
`

export const StyledFlex = Styled.div`
display: flex;
@media (min-width: 589px){
    flex-direction: row;
}
flex-direction: column;
`

export const StyledCall = Styled.div`
background-color: #663399;
padding: 0.5em 0.025em; 
color: whitesmoke;
font-weight: 700; 
display: flex;
justify-content: center;
align-items: center;
width: 80%;
@media (max-width: 500px){
    border-radius: 10px;
}
@media (min-width: 588px){
    padding: 1em 1.2em;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    max-height: 2rem;
    position: relative;
    bottom: 1rem;
}
`