import react from "react"
import appstore from '../Images/drawable-xxhdpi/appstore.png';
import googlepay from '../Images/drawable-xxhdpi/googleplay.png';
import facebook from '../Images/drawable-xxxhdpi/facebook.png';
import twitter from '../Images/drawable-xxxhdpi/twitter.png';
import instagram from '../Images/drawable-xxxhdpi/instagram.png';
import logo from "../Images/drawable-xxhdpi/Group 37749.png"
import './style.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_garage">
                <div>
                    <h5>COMPANY</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Team</li>
                        <li>Careers</li>
                        <li>Blogs</li>
                        <li>Partner with us</li>
                    </ul>
                </div>
                <div>
                    <h5>SERVICES</h5>
                    <ul>
                        <li>Service & Repairs</li>
                        <li>Wash & Detailing</li>
                        <li>Fastag Service</li>
                        <li>Challan Service</li>
                    </ul>
                </div>
                <div>
                    <h5>OTHERS</h5>
                    <ul>
                        <li>Parking Nearby</li>
                        <li>Chauffer Services</li>
                        <li>Insurance Service</li>
                        <li>New & Used Cars</li>
                    </ul>
                </div>
                <div>
                    <h5>HELP & LEGAL</h5>
                    <ul>
                        <li>Help & Support</li>
                        <li>Terms & Conditions</li>
                        <li>Refund & Cancellation</li>
                        <li>Privacy Policy</li>
                        <li>Cookies Policy</li>
                    </ul>
                </div>
                <div style={{marginTop:"40px"}}>
                    <div><img src={googlepay} alt="error" className="social" /></div>
                    <div><img src={appstore} alt="error" className="social" /></div>
                </div>
            </div>

           
        </div>

    )
}
export default Footer;