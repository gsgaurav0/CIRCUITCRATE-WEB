import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container contact-wrapper">
                {/* Left Side: Typography */}
                <div className="contact-text">
                    <h2 className="contact-title">
                        LET'S<br />
                        GET IN<br />
                        TOUCH
                    </h2>
                    <p className="contact-description">
                        We'd love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out to us.
                    </p>
                </div>

                {/* Right Side: Form */}
                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group half-width">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" />
                            </div>
                            <div className="form-group half-width">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5"></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
