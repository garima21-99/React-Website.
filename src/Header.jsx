import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
        <section className="section1">
        <div className="header">
            <div className="container1">
    <h1 className="Heading"> Data Analytics Solution For Startup Agency</h1>
    <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie egestas porta. Ut rhoncus eleifend quam id consequat. .</p>
        <br></br>
        <div> <FontAwesomeIcon className="check" icon ={  faCheckCircle }></FontAwesomeIcon> </div><p className="para1"> Learn with our comprehensive curriculum and experienced.</p>
        <div> <FontAwesomeIcon className="check" icon ={  faCheckCircle }></FontAwesomeIcon> </div><p className="para1">Step into the world of practical Data Science.</p>
        <div className="Button">
       <div className="btn"> <button type="button" className="btn btn-primary">Learn More</button></div>
        <div>
        
            <p  className="para1">Learn About <br/>
    our latest work intro</p>
            
            </div>
        </div>
        </div>
        
        <div className="container2">
            <img className="header-img" src="https://st4.depositphotos.com/24223224/26452/v/1600/depositphotos_264522418-stock-illustration-happy-man-character-working-with.jpg"/>
        </div>
        </div>
      </section>
      <footer>
          <div className="footer-container">
              <div className="footer1">
           <h4 className="footer-heading">   <span className="span1">S</span>dot </h4>
                  <p className="footer-para">821  11th street Office 372<br/>
                  De 1524 GA</p>
                   </div>
              <div className="footer2">
                  <h4 className="footer-heading">Links</h4>
                <ul>
                    <li>About us</li>
                    <li>Our News</li>
                    <li>Our Portfolio</li>
                    <li>Solutions</li>
                    <li>Contact</li>
                    <li>Our Career</li> 
                    
                </ul>
                   </div>
              <div className="footer3"> 
              <h4 className="footer-heading">Services</h4>
                <ul>
                    <li>Technology</li>
                    <li>Healthcare</li>
                    <li>Data Science</li>
                    <li>Applied Maths</li>
                    <li>Data Analysis</li>
                   </ul>
              </div>
              <div className="footer4">
                  <h4 className="footer-heading2">Get In Touch </h4> 
                  <p className="footer-info">fradsdagt@gmail.com</p> 
                  
                  <h4 className="footer-text">Sign up for News Letter</h4>
                  <input type="text"  className="header-input"placeholder ="Email address"/>
                  <button className="btn-header">Subscribe</button>
                   </div>
          </div>
          </footer>

        </>
    );
};
export default Header;