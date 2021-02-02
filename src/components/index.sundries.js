import React from "react";
import ImageSlider from "./imgSlider"

import {StyledFlex} from './styledcomponents/b.styled'

export const ImgCarousel = function () {
return (
    <StyledFlex>
        <div>
            <ImageSlider></ImageSlider>
        </div>
    </StyledFlex>
)
}