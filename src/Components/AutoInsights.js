import react from "react"
import AutoDetailing from '../Images/ImagesAll/drawable-xxxhdpi/AutoDetailing.png';
import DentingPainting from '../Images/ImagesAll/drawable-xxxhdpi/DentingPainting.png';
import GeneralService from '../Images/ImagesAll/drawable-xxxhdpi/GeneralService.png';
const AutoInsights=()=>{
    return(<>
        <div className="p3 selectcart">
        <h3>Auto Insights</h3>
        </div><div className="auto">
     
    <div className="autoin">
        <img src={AutoDetailing}></img>
        <h3>Post Title</h3>
        <span>Written by Aryan Kapoor on Aug 15 2020</span>
<p>
Master Garage Automated Quote Service generates competitive estimates on behalf of service providers for the customers, further the customer can choose and book the best.
</p>
    </div>
    
    <div className="autoin">
        <img src={GeneralService}></img>
        <h3>Post Title</h3>
        <span>Written by Aryan Kapoor on Aug 15 2020</span>
<p>
Master Garage Automated Quote Service generates competitive estimates on behalf of service providers for the customers, further the customer can choose and book the best.
</p>
    </div>
   
    <div className="autoin">
        <img src={DentingPainting}></img>
        <h3>Post Title</h3>
        <span>Written by Aryan Kapoor on Aug 15 2020</span>
<p>
Master Garage Automated Quote Service generates competitive estimates on behalf of service providers for the customers, further the customer can choose and book the best.
</p>
    </div>
    </div>
    </>)
}
export default AutoInsights;