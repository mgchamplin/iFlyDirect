import React from 'react'
import "../styles.css"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
        <section className="footnotes">
            <ul className="text-sm">
                <li id="footnote-1">1. The site is meant for display purposes only. Please do not enter in any personal or confidential information.  We are not responsible for content on external Web sites.</li>                
            </ul>
        </section>
        <section className="footer-grid">
            <div className="footer-column footer-column-1">
                  <h4 className="footer-titles">Company</h4>
                <ul>
                  <li><a href="/" className="transform-link">About</a></li>
                  <li><a href="/" className="transform-link">Jobs</a></li>
                  <li><a href="/" className="transform-link">Partnerships</a></li>
                  <li><a href="/" className="transform-link">Advertising</a></li>
                </ul>
            </div>
            <div className="footer-column footer-column-2">
                <h4 className="footer-titles">Explore</h4>
                <ul>
                    <li><a href="/" className="transform-link">Travel guide</a></li>
                    <li><a href="/" className="transform-link">Hotels</a></li>
                    <li><a href="/" className="transform-link">Vacation rentals</a></li>
                    <li><a href="/" className="transform-link">Domestic packages</a></li>                    
                </ul>
            </div>
            <div className="footer-column footer-column-3">
                <h4 className="footer-titles">Policies</h4>
                <ul>
                    <li><a href="/" className="transform-link">Privacy policy</a></li>
                    <li><a href="/" className="transform-link">Terms of use</a></li>
                    <li><a href="/" className="transform-link">Accessibility</a></li>
                    <li><a href="/" className="transform-link">Refund timelines, policies &amp; processes</a></li>
                </ul>
            </div>
            <div className="footer-column footer-column-4">
                <h4 className="footer-titles">Help</h4>
                <ul>
                    <li><a href="/" className="transform-link">Support</a></li>
                    <li><a href="/" className="transform-link">Cancel your flight</a></li>
                    <li><a href="/" className="transform-link">Today at iFlyDirect</a></li>
                    <li><a href="/" className="transform-link">International travel documents</a></li>                    
                </ul>
            </div>                
        </section>

        <section className="text-sm shop-or-call">More ways to shop: Find an <a href="/" className="text-sm transform-link">agent for iFlyDirect</a> or <a href="/" className="text-sm transform-link">other agency.</a></section>

        <section className="text-sm disclaimer copyright">
            <ul id="copyright">
                <div className="copyright">
                    <li>Copyright © 2022 iFlyDirect Inc. All rights reserved.</li>
                </div>
                <div className="policy">
                <li>
                    <a href="/" id="privacy-policy">Privacy Policy </a>
                    <a href="/">Terms of Use </a>
                    <a href="/">Sales and Refunds </a>
                    <a href="/">Legal </a>
                    <a href="/">Site Map</a>
                </li>
                </div>
                <div className="language" id="language">
                    <li><a href="/" >United States</a></li>
                </div>
            </ul>
        </section>
    </footer>
  )
}

export default Footer