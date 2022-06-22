import { CardBody, Card, CardTitle, CardText, CardImg, Input, Label, ButtonGroup, Button, Row, Col, Container, CardSubtitle } from 'reactstrap'

import fastag from '../Images/drawable-xxxhdpi/Group 35745.png';
import challan from '../Images/drawable-xxhdpi/paychallan.png';
import chauffers from '../Images/drawable-xxhdpi/chuffer.png';
import parking from '../Images/drawable-xxhdpi/parking.png';
import insurance from '../Images/drawable-xxhdpi/insurance.png';


const ValueAdded=()=>{
    return (
        <div className="p-3 selectcart" style={{marginTop:"50px"}}>
                      
                            <h3>Value added Service</h3>
                        
                        <div className="cardItem">
                            <div className='valueitem'>
                                <a to="/HomeFastag" style={{ textDecoration: 'none' }}>
                                    <img src={fastag} alt="error" />
                                    <p>Fastag Recharge</p>
                                </a>
                            </div>
                            <div className="valueitem">
                                <a to="/HomeChallan" style={{ textDecoration: 'none' }}>
                                    <img src={challan} alt="error" />
                                    <p>Pay Challans</p>
                                </a>
                            </div>
                            <div className="valueitem">
                                <a to="/ChaufferHome" style={{ textDecoration: 'none' }}>
                                    <img src={chauffers} alt="error" />
                                    <p>Chauffer Service</p></a>
                            </div>
                            <div className="valueitem">
                                <img src={parking} alt="error" />
                                <p>Parking's Nearby</p>
                            </div>
                            <div className="valueitem">
                                <img src={insurance} alt="error" />
                                <p>Insurance Renewal</p>
                            </div>
                        </div>
                    </div>
    )
}
export default ValueAdded