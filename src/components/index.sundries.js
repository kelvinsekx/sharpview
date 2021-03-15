import React from "react";
import ImageSlider from "./imgSlider"

import {Flexed} from './styledcomponents/b.styled'

export const ImgCarousel = function () {
return (
    <Flexed>
        <div>
            <ImageSlider></ImageSlider>
        </div>
    </Flexed>
)
}

export function Lala (props){
    return (
        <div style={{width: '6.666%', maxHeight: '10%', background: `linear-gradient(to right, ${props.cu}, #7026B9)`, padding: '0.3rem 0.4rem', borderRadius: '2px', border: 'none', marginBottom: '0.5em'}}></div>
    )
}