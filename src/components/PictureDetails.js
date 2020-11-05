import React, { useEffect, useState } from "react"
import styled from "styled-components";
const StyledPD = styled.div`
    background-color: ${pr => pr.theme.ctaSection };
    color: ${pr => pr.theme.textColor }
`
export default function PictureDetails(props){
    const{ title }= props;
    const{ date }= props;
    const{ desc }= props
    return(
        <StyledPD className="picture-cta-section">
            <h1>{ title }</h1>
            <p>{ date }</p>
            <p>{ desc }</p>
        </StyledPD>
    )
}