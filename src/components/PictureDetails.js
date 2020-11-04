import React, { useEffect, useState } from "react"

export default function PictureDetails(props){
    const{ title }= props;
    const{ date }= props;
    const{ desc }= props
    return(
        <div className="picture-cta-section">
            <h1>{ title }</h1>
            <p>{ date }</p>
            <p>{ desc }</p>
        </div>
    )
}