import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
import React from "react"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "af5afb2f-533a-47f3-8f4d-9b7dc6dc05f6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Thank you for messaging us...");
        event.target.reset();
       setTimeout(() => {
        setResult("")
       }, 5000);
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send Us A Message <img src={msg_icon} alt="" /></h3>
                <p>
                   Feel free to reach out through contact from or find our contact information below.Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our university community 
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" />contact@educare.edu</li>
                    <li><img src={phone_icon} alt="" />(+880) 1234-24567</li>
                    <li><img src={location_icon} alt="" />Karnaphuli,Chattogram, Bangladesh <br />
                        
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter your Name" required/>
                    <label>Telephone</label>
                    <input type="tel" name="phone" placeholder="Enter your contact number" required/>
                    <label>Message</label>
                    <textarea name="message"  rows="6" placeholder="Write your text here..." required></textarea>
                    <button type="submit" className="btn dark-btn">Send <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact