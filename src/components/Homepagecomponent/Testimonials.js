import React from 'react'
import "./Testimonials.css"
import Image1 from "../images/Nitish.jpg"
import Image2 from "../images/kiranimage.jpg"

function Testimonials() {
    return (
        <div className="Testmonialscontainer">
            <div className="TopLine">
               Testimonials
            </div>
            <div className="Description">
                <p>What people are saying ?</p>
            </div>
            <div className="ContentWrapper">
               <div className="Columnone">
                   <div className="Testimonial">
                       <i class="fa fa-lightbulb-o"  style={{color:"blue"}}></i>
                       <h3>Nithish Verallali</h3>
                       <p>
                         "the Priority pulse connects paitent,ambulance, hospital authority,and Traffic control.  there is more potiential to thsi startup "
                        </p>
                  </div>
                  <div className="Testimonial">
                        <i class="far fa-lightbulb-o" ></i>
                        <h3>Jhade Sai Kiran</h3>
                        <p>
                       "the Priority pulse connects paitent,ambulance, hospital authority,and Traffic control.  there is more potiential to thsi startup "
                        </p>
                   </div>
               </div>
               <div className="ColumnTwo">
<img className="Images"  alt=" " src={Image1} />
<img className="Images"   alt=" " src={Image2} />
               </div>
            </div>
        </div>
    )
}

export default Testimonials
