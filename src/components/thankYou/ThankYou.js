import React from 'react'
import { Link } from "gatsby"

import { GiHeartInside } from "react-icons/gi";

import './thankYou.css'

export default function ThankYou() {
    return (
        <div className="thank-you">
            <h1 className="thank-you-h1"><span><i><GiHeartInside /></i>Dziękujemy!</span></h1>
            <p className="thank-you-p">Za zakupy w naszym sklepie. Szczegóły zamówienia zostały wysłane na podany adres email.</p>

            <div className="thank-you-buttons">
                <Link to="/">Powrót do strony głównej</Link>
                <Link to="/shop">Powrót do sklepu</Link>
            </div>
        </div>
    )
}
