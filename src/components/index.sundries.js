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
        <div style={{width: '5%', maxHeight: '10%', backgroundColor: props.cu, padding: '0.3rem 0.4rem'}}></div>
    )
}