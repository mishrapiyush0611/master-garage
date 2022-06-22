import React, { useState } from 'react'
//import Navbar from '../features/home/Navabr';
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
import ValueAdded from './Valueadded';
import WhyChoose from './WhyChoose'
import AboutUs from './aboutUs'
import Question from './Question';
import Footer from './Footer'
import './style.css'
import Category from './category';
import MediaHighLights from './MediaHighlights';
import AutoInsights from './AutoInsights';
import JoinUs from './JoinUs';
const Home = () => {
    

    
    return (
        <>
            <div>
                <Container fluid>
                    <Row className="head_container">
                        <Col lg={6} className="left_container">
                            <div className="left_items">
                                <h1>FREEDOM OF CHOICE</h1>
                                <h2 className="boldfent">One key to unlock
                                    all your car needs!</h2>
                                <p>Master Garage is your car buddy that assists you to make an informed
                                    and helps you to enjoy your freedom to choose !</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <img src={background} alt="error" className="backgroundhome" />

                        </Col>
                    </Row>
                   
                    
                </Container>
                
                <Category></Category>
                <ValueAdded></ValueAdded>
                
                <WhyChoose></WhyChoose>
                <Container fluid className="about">
                    <AboutUs></AboutUs>
                </Container>

                <MediaHighLights ></MediaHighLights>
                <JoinUs></JoinUs>

                <div>
                    <div className="social_cont">
                        <div className="carcont">
                            <p>THE</p>
                            <h1>CAR</h1>
                            <h3>Owner's App</h3>
                            <h4>One key to unlock all your car needs!</h4>
                            <div className="social">
                                <img src={appstore} alt="error" />
                                <img src={googlepay} alt="error" />
                            </div>
                        </div>
                        <div className="phoneapp">
                            <img src={Rectangle} alt="error" className='phone_rec' />
                            <img className="phone1" src={phoneapp} alt="error" />

                        </div>
                    </div>
                </div>
                <div className="choosegarages">
                    <img src={tesimani} alt="error" className='tesimani' />
                    <div className="p3 selectcart">
                        <h3>Testimonials</h3>
                        <p>See what people are saying </p>
                    </div>
                    <div className="user_cont1">
                        <div>
                            <div className="user_cont">
                                <img src={user1} alt="error" />
                                <div className="user_info">
                                    <h5>Natasha Singh</h5>
                                    <p>Mumbai</p>
                                </div>
                            </div>
                            <div className="user_cont">
                                <img src={user2} alt="error" />
                                <div className="user_info">
                                    <h5>Alex Morgan</h5>
                                    <p>Mumbai</p>
                                </div>
                            </div>
                            <div className="user_cont">
                                <img src={user3} alt="error" />
                                <div className="user_info">
                                    <h5>Arthur Hansen</h5>
                                    <p>Mumbai</p>
                                </div>

                            </div>

                        </div>
                        <div className="sub_user">
                            <h5>Excellent Work by Master Garage and Team</h5>
                            <p>  <img src={stargive} alt="error" /></p>
                            <p className="paraexplain">" Great Service and Support by Vendor, as well as  Master Garage Team,
                                I loved the  Idea of comparing  garages  on various parameters and
                                choosing  the  best  out of the rest, keep on  doing  great!  Wish  you
                                the  Best  of Luck Master Garage. "
                            </p>
                        </div>


                    </div>
                </div>


                <div className="refer_count">
                    <div><img src={referearn} alt="error" /></div>
                    <div className="refer_sub_count">
                        <h3>Refer & Earn 5000 MG Coins</h3>
                        <p>Redeem at service bookings, buy accessories on MG world and do more,
                            Also earn exciting rewards when your friend completes his first service</p>
                        <a to="/refer"><button>REFER NOW</button></a>
                    </div>
                    <div className="coin_count">
                        <img src={Rectangle} alt="error" className="rec_cont" />
                        <img className="coin1" src={coin} alt="error" />

                    </div>
                </div>
                <AutoInsights></AutoInsights>
               
                
                
            <Question></Question>

               <Footer></Footer>
            </div>
        </>
    )
}

export default Home
