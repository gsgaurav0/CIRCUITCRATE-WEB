import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3>CircuitCrate</h3>
                    <p>Empowering the next generation of makers.</p>
                </div>

                <div className="footer-socials">
                    <a href="#" aria-label="Instagram">IG</a>
                    <a href="#" aria-label="Twitter">TW</a>
                    <a href="#" aria-label="LinkedIn">LI</a>
                    <a href="#" aria-label="YouTube">YT</a>
                </div>

                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} CircuitCrate. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
