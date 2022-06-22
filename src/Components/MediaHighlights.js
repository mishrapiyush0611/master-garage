import react from "react"

import hindustan from '../Images/drawable-xxxhdpi/hindustan.png';
import quots from '../Images/drawable-xxxhdpi/quots.png';
import bstandard from '../Images/drawable-xxxhdpi/bstandard.png';
import economic from '../Images/drawable-xxxhdpi/economic.png';
import mint from '../Images/drawable-xxxhdpi/mint.png';

import './style.css'
const MediaHighLights = () => {
    return (
        <div>
          
            <div className="media_cont" style={{marginTop:"30px"}}>
                <div className="hindustan p-3">
                    <p><img src={hindustan} alt="error" /></p>
                    <div className="quot_img">
                        <img src={quots} alt="error" className="quots" />
                        <h3>
                            One of India's Fastest Growing
                            Automotive Tech Startup
                        </h3>
                    </div>
                    <p>Great Service and Support by Vendor, as well as  Master Garage Team,
                        I l  oved the  Idea of comparing  garages  on various
                        parameters and  choosing  the  best  out of the rest,
                        keep on  doing  great!
                        Wish  you  the  Best  of Luck Master Garage...….</p>
                    <p className="readmore">Read More</p>
                    <p className="moreinfoget">Written by Aryan Kapoor on Aug 15 2020</p>
                </div>
                <div>
                    <div className="media_cont1">
                        <div className="b_standard p-3">
                            <p><img src={bstandard} alt="error" /></p>
                            <div className="quot_img">
                                <img src={quots} alt="error" className="quots" />
                                <h3>One of India's Fastest Growing
                                    Automotive Tech Startup</h3>
                            </div>

                            <p>Great Service and Support by Vendor, as
                                well as  Master Garage Team, I loved the
                                Idea of comparing  garages  on var...…..
                            </p>
                            <p className="readmore">Read More</p>
                            <p className="moreinfoget">Written by Aryan Kapoor on Aug 15 2020</p>

                        </div>
                        <div className="economic p-3">
                            <p><img src={economic} alt="error" /></p>
                            <div className="quot_img">
                                <img src={quots} alt="error" className="quots" />
                                <h3>One of India's Fastest Growing
                                    Automotive Tech Startup</h3>
                            </div>
                            <p>Great Service and Support by Vendor, as
                                well as  Master Garage Team, I loved the
                                Idea of comparing  garages  on var...…..
                            </p>
                            <p className="readmore">Read More</p>
                            <p className="moreinfoget">Written by Aryan Kapoor on Aug 15 2020</p>
                        </div>
                    </div>
                    <div>
                        <div className="mint_cont p-3">
                            <img src={mint} alt="error" />
                            <div className="">
                                <div className="quot_img">
                                    <img src={quots} alt="error" className="quots" />
                                    <h3> One of India's Fastest Growing
                                        Automotive Tech Startup</h3>
                                </div>
                                <p>Great Service and Support by Vendor, as
                                    well as  Master Garage Team, I loved the
                                    Idea of comparing  garages  on var...…..
                                </p>
                                <p className="readmore">Read More</p>
                                <p className="moreinfoget">Written by Aryan Kapoor on Aug 15 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MediaHighLights