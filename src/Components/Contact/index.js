import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const form = useRef();

    const checkInfo = e => {
        e.preventDefault();

        let userName = document.getElementById('name-input').value;
        let userEmail = document.getElementById('email-input').value;
        let userMessage = document.getElementById('message-input').value;

        if (!userName) {
        Swal.fire({
            icon: 'warning',
            title: 'Must have a Name!',
        });
        console.log('Must have a Name!');
        } else if (!validateEmail(userEmail)) {
        Swal.fire({
            icon: 'warning',
            title: 'Must have a valid Email!',
        });
        console.log('Must have an Email!');
        } else if (!userMessage) {
        Swal.fire({
            icon: 'warning',
            title: 'Must include a Message!',
        });
        console.log('Must have a message!');
        } else {
          emailjs
            .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
            )
            .then(
            result => {
                console.log(result.text);
                Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully',
                });
            },
            error => {
                console.log(error.text);
                Swal.fire({
                icon: 'error',
                title: 'Something went wrong 😓',
                text: error.text,
                });
            }
            );
        }
    };

    return (
        <section id="Contact">
            <div className="section-header-div flex flex-col items-center my-5">
                <h1 className="text-center section-header">CONTACT</h1>
                <div className="section-header-line my-2" />

                <div className="my-4 text-center">
                    <h1 className="contact-intro">If you have any questions or potential opportunities related to web development, don't hesitate to get in contact through the form below. Whether you are a company looking to hire or a solo developer interested in collaborating, I'd love to hear from you!</h1>
                </div>
            </div>

            <div className="form-container">
                <form className="contact-form" ref={form} onSubmit={checkInfo}>
                    <div className="name-input-container flex flex-col">
                        <label className="name-label">Name</label>
                        <input placeholder="Enter Your Name" id="name-input" className="name-input" name="name-input" />
                    </div>

                    <div className="email-input-container flex flex-col">
                        <label className="email-label">Email</label>
                        <input placeholder="Enter Your Email" id="email-input" className="email-input" name="email-input" />
                    </div>

                    <div className="message-input-container flex flex-col">
                        <label className="message-label">Message</label>
                        <textarea placeholder="Enter Your Message" id="message-input" className="message-input" name="message-input" />
                    </div>

                    <div className="contact-button-div flex justify-center">
                        <button className="contact-button text-center">Submit</button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Contact;