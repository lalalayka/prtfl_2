import React from 'react'
import Link from 'gatsby-link'
import './footer.css'
import Icn_mail from './icons/mail';
import Icn_link from './icons/link';
import Icn_fb from './icons/fb';
import Icn_insta from './icons/insta';

const thisYear = new Date();

const Footer = () => (
    <div className="container__footer">
        <div className='footer'>
            <div className="footer__smm">
                <a href="mailto:lalalayka@gmail.com" className="footer__smm--item"><Icn_mail /></a>
                <a href="https://www.linkedin.com/in/sergekovalchuk" target='_blank' className="footer__smm--item"><Icn_link /></a>
                <a href="https://www.facebook.com/xyemoe" target='_blank' className="footer__smm--item"><Icn_fb /></a>
                <a href="https://www.instagram.com/xyemoe/" target='_blank' className="footer__smm--item"><Icn_insta /></a>
            </div>  
            <div className="footer__copyright">
                <span>Sergey Kovalchuk&emsp;©&emsp;2011&#8202;—&#8202;{thisYear.getFullYear()}</span>
            </div>
        </div>  
    </div>
)

export default Footer
