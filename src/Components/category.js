import react from "react"
import { CardBody, Card, CardTitle, CardText, CardImg, Input, Label, ButtonGroup, Button, Row, Col, Container, CardSubtitle } from 'reactstrap';
import { a } from 'react-router-dom';

import booking from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/home.png';
import background from '../Images/drawable-xxhdpi/Group 37748@2x.png';
import setting from '../Images/drawable-xxhdpi/setting.png';
import Carwash from '../Images/drawable-xxhdpi/wash.png';
import serviceRepair from '../Images/drawable-xxhdpi/Group 37743.png'
import carCare from '../Images/drawable-xxhdpi/Group 37745.png'
import usedNew from '../Images/drawable-xxhdpi/Group 37746.png'
import washDenting from '../Images/drawable-xxhdpi/Group 37744.png'
import fastag from '../Images/drawable-xxxhdpi/Group 35745.png';
import challan from '../Images/drawable-xxhdpi/paychallan.png';
import chauffers from '../Images/drawable-xxhdpi/chuffer.png';
import parking from '../Images/drawable-xxhdpi/parking.png';
import insurance from '../Images/drawable-xxhdpi/insurance.png';
import usecar from '../Images/drawable-xxhdpi/onestep.png';
import appstore from '../Images/drawable-xxhdpi/appstore.png';
import googlepay from '../Images/drawable-xxhdpi/googleplay.png';
import phoneapp from '../Images/drawable-xxhdpi/phoneapp.png';
import Rectangle from '../Images/drawable-xxhdpi/Rectangle.png';
import referearn from '../Images/drawable-xxxhdpi/referearn.png';
import dotline from '../Images/drawable-xxxhdpi/dotline.png';
import user1 from '../Images/drawable-xxxhdpi/user1.png';
import coin from '../Images/drawable-xxxhdpi/coin.png';
import hindustan from '../Images/drawable-xxxhdpi/hindustan.png';
import quots from '../Images/drawable-xxxhdpi/quots.png';
import bstandard from '../Images/drawable-xxxhdpi/bstandard.png';
import economic from '../Images/drawable-xxxhdpi/economic.png';
import mint from '../Images/drawable-xxxhdpi/mint.png';
import set_mob from '../Images/drawable-xxxhdpi/Path 32368.png';
import fastage_mob from '../Images/drawable-xxxhdpi/netc-fastag-logo-vector.png';
import paychallan_mob from '../Images/drawable-xxxhdpi/Path 32483.png';
import sound_mob from '../Images/drawable-xxxhdpi/Path 32483.png'

import contact from '../Images/drawable-xxxhdpi/contact.png';
import logo2 from '../Images/drawable-xxxhdpi/logo2.png';
import facebook from '../Images/drawable-xxxhdpi/facebook.png';
import twitter from '../Images/drawable-xxxhdpi/twitter.png';

import instagram from '../Images/drawable-xxxhdpi/instagram.png';
import homeimg1 from '../Images/ImagesAll/drawable-xxxhdpi/homeimg1.png';
import user2 from '../Images/drawable-xxxhdpi/user2.png';
import user3 from '../Images/drawable-xxxhdpi/user3.png';
import tesimani from '../Images/drawable-xxxhdpi/tesimani.png';
import send from '../Images/drawable-xxxhdpi/send.png';
import SettingSeaGreen from '../Images/ImagesAll/drawable-xxxhdpi/SettingSeaGreen.png';
import SmilePurpule from '../Images/ImagesAll/drawable-xxxhdpi/SmilePurpule.png';
import PeoplesRed from '../Images/ImagesAll/drawable-xxxhdpi/PeoplesRed.png';
import HeartBlue from '../Images/ImagesAll/drawable-xxxhdpi/HeartBlue.png';
import newev from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/newsev.png';
import activatepng from '../Images/drawable-xxxhdpi/drawable-xxxhdpi/ActivateBG.png';
import locationleft from '../Images/drawable-xxxhdpi/locationleft.png';
import stargive from '../Images/drawable-xxxhdpi/Group 28794.png';
import BatteryCare from '../Images/ImagesAll/drawable-xxxhdpi/BatteryCare.png';
import ACService from '../Images/ImagesAll/drawable-xxxhdpi/ACService.png';
import AutoDetailing from '../Images/ImagesAll/drawable-xxxhdpi/AutoDetailing.png';
import DentingPainting from '../Images/ImagesAll/drawable-xxxhdpi/DentingPainting.png';
import GeneralService from '../Images/ImagesAll/drawable-xxxhdpi/GeneralService.png';
import WheelCare from '../Images/ImagesAll/drawable-xxxhdpi/WheelCare.png';
import AboutLogo from '../Images/aboutlogo.PNG'
import logo from "../Images/drawable-xxhdpi/Group 37749.png"
import './style.css'
const Category=()=>{
    return(
    <div className="p-3 selectcart">
    <h3>Select a Category </h3>
    <div className="cardItem">
        <a to="/services" style={{ textDecoration: 'none' }}>
            <div className='item' style={{ backgroundColor: "aliceblue" }}>
                <img src={serviceRepair} alt="error" />
                <p style={{ marginLeft: "5px" }}><b>SERVICE AND REPAIRE</b></p>
                <hr style={{ height: "2px", width: "90%", borderWidth: "5px", color: "gray", backgroundColor: "gray" }}></hr>
                <p style={{ marginLeft: "5px" }}>Compare and choose garage</p>
            </div>
        </a>
        <a to="/washing" style={{ textDecoration: 'none' }}>
            <div className='item' style={{ backgroundColor: "aliceblue" }}>
                <img src={washDenting} alt="error" />
                <p style={{ marginLeft: "5px" }}><b>Wash & Detailing</b></p>
                <hr style={{ height: "2px", width: "90%", borderWidth: "5px", color: "gray", backgroundColor: "gray" }}></hr>
                <p style={{ marginLeft: "5px" }}>The Carspa & more</p>
            </div>
        </a>
        <a to="/CarCare" style={{ textDecoration: 'none' }}>
            <div className='item' style={{ backgroundColor: "aliceblue" }}>
                <img src={carCare} alt="error" />
                <p style={{ marginLeft: "5px" }}><b>Car care & accessory</b></p>
                <hr style={{ height: "2px", width: "90%", borderWidth: "5px", color: "gray", backgroundColor: "gray" }}></hr>
                <p style={{ marginLeft: "5px" }}>Buy with MG coins</p>
            </div>
        </a>
        <a to="/services" style={{ textDecoration: 'none' }}>
            <div className='item' style={{ backgroundColor: "aliceblue" }}>
                <img src={usedNew} alt="error" />
                <p style={{ marginLeft: "5px" }}><b>New & Useded Cars</b></p>
                <hr style={{ height: "2px", width: "90%", borderWidth: "5px", color: "gray", backgroundColor: "gray" }}></hr>
                <p style={{ marginLeft: "5px" }}>The Car Trade Marketplace</p>
            </div>
        </a>
    </div>
</div>
    )
}
export default Category