import React from "react"
import './contactcard.scss'

export default function ContactCard(props) {
    return (
        <div className='contact-card'>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}