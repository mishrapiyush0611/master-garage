import react from "react"
import { CardBody, Card, CardTitle, CardText, CardImg, Input, Label, ButtonGroup, Button, Row, Col, Container, CardSubtitle } from 'reactstrap';

import SettingSeaGreen from '../Images/ImagesAll/drawable-xxxhdpi/SettingSeaGreen.png';
import SmilePurpule from '../Images/ImagesAll/drawable-xxxhdpi/SmilePurpule.png';
import PeoplesRed from '../Images/ImagesAll/drawable-xxxhdpi/PeoplesRed.png';
import HeartBlue from '../Images/ImagesAll/drawable-xxxhdpi/HeartBlue.png';

const WhyChoose=()=>{
    return(
        <>
       
        <div className="choosegarage">
            <div className="p3 selectcart">
            <h3>Why Choose Us?</h3>
            </div>
                    <Row className='iconrow'>
                        <Col sm={3}>
                            <div className='rowbox '>
                                <a to="/services" style={{ textDecoration: 'none' }}>
                                    <div className='firsth1'>
                                        <img src={SettingSeaGreen} style={{ width: '100px', height: '100px' }} alt="error" /><br></br>
                                        <span className='head1'>One Stop Solution</span>
                                        <p className='shortpara'>Compare, Choose & Book what fits your needs</p>

                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='rowbox '>
                                <div className='firsth1'>
                                    <img src={SmilePurpule} style={{ width: '100px', height: '100px' }} alt="error" /><br></br>
                                    <span className='head1'>Peace of Mind</span>
                                    <p className='shortpara' >Quality Service, Secure Payment and rooust customer support</p>
                                </div>
                            </div></Col>
                        <Col sm={3}>
                            <div className='rowbox '>
                                <div className='firsth1'>
                                    <img src={HeartBlue} style={{ width: '100px', height: '100px' }} alt="error" /><br></br>
                                    <span className='head1'>Freedom of Choice</span>
                                    <p className='shortpara'>Compare, Choose & Book what fits your needs</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='rowbox '>
                                <div className='firsth1'>
                                    <img src={PeoplesRed} style={{ width: '100px', height: '100px' }} alt="error" /><br></br>
                                    <span className='head1'>Trusted Partners</span>
                                    <p className='shortpara'>100% genuine and trusted service providers nearby</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                </>
    )
}
export default WhyChoose