import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="/facebook" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="/instagram" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="/linkedin" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; 2020 Drain Surveys Terenure</li><li>Design: <a href="https://dcdraincleaning.com"  target="_blank">DC Drain Cleaning</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
