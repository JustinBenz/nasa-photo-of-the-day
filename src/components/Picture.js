import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL, API_KEY } from '../constants'
export default function Picture(props) {
    const { url }= props
    return(
        <div className="picture-section">
            <div className="picture-container" style={{ backgroundImage: `url(${url})` }} >
            </div>
        </div>
    )
}