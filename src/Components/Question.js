import react from "react"
import contact from '../Images/drawable-xxxhdpi/contact.png';
import logo2 from '../Images/drawable-xxxhdpi/logo2.png';

import './style.css'

const Question=()=>{
    return(
    <div className='cont_cont'>

    <img className="cont_back" src={contact} alt="error" />
    <div className='contact_cont'>
        <div className="get_reg">
            <h1>Got a question?</h1>
            <p>Just leave your email with us! and we'll get back to you!</p>
        </div>
        <div>
            <div className="input_text">
                <input placeholder='your full name' />
                <input placeholder='how can we help?' />
            </div>
            <div className="input_text">
                <input placeholder='Your email address' />
                <input placeholder='Your mobile number' />
            </div>
            <div>
                <textarea className="text_area" />
            </div>
            <div className="send_btn">
                <button >Send
                    
                </button>
            </div>
        </div>
    </div>
</div>
    )
}
export default Question