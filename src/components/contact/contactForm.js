import React from 'react'
import styled from 'styled-components'

import {Button} from '../styledElements'

const ContactForm = () => (
    <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="input">
            <label htmlFor="contact-name">Name</label>
            <input type="text" id="contact-name" name="name" placeholder="Name" required/>
        </div>
        <div className="input">
            <label htmlFor="contact-email">Email</label>
            <input type="email" id="contact-email" name="email" placeholder="Email Address" required/>
        </div>
        <div className="input">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" placeholder="Message" required/>
        </div>
        <Button type="submit" color="white"><span>SEND MESSAGE</span></Button>
    </Form>
)

export default ContactForm

const Form = styled.form`
    width: 95%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .input {
        position: relative;
        label {
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 1px;
            overflow: hidden;
        }
        input {
            width: 100%;
        }
        textarea {
            width: 100%;
            height: 300px;
        }
        input, textarea {
            padding: 1rem .5rem;
            font-size: 1rem;
            font-family: 'Raleway', sans-serif;
            font-weight: 500;
            line-height: 1.5;
            border-radius: 5px;
            border: none;
            margin-bottom: .5rem;
        }
    }
`