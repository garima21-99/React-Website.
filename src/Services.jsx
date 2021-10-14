import react from"react";
import Service  from "./Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Services = () =>
{
    return(
<>

<div className="service-container">
    <div className="service-item">
        <h3 className="service-heading"> Solutions Visualizations</h3>
        <h2 className="service-subhead">Data Visualization</h2>
        <h2 className="service-subhead">Practices to improve</h2>
        <div className="circle" >
        <FontAwesomeIcon className="arrowright" icon ={  faArrowRight }></FontAwesomeIcon>
        </div>
    </div>
    <div className="service-item">
        <h3 className="service-heading"> Data Consulting</h3>
        <h2 className="service-subhead">Consulting on Invoice data</h2>
        <h2 className="service-subhead">capture</h2>
        <div className="circle" >
        <FontAwesomeIcon className="arrowright" icon ={  faArrowRight }></FontAwesomeIcon>
        </div>
    </div>
    <div className="service-item">
        <h3 className="service-heading"> Data case Studies</h3>
        <h2 className="service-subhead">Delievering the insights</h2>
        <h2 className="service-subhead">Data case</h2>
        <div className="circle" >
        <FontAwesomeIcon className="arrowright" icon ={  faArrowRight }></FontAwesomeIcon>
        </div>
    </div>
  </div>

  <div className="service-container2">
      
      <h1 className="servce-heading"> Why Data Science Sdot Data Science For Everyone </h1>
  </div>
  <div className="service-wrapper">
      <div className=" info">
          <h3 className="info-heading"> Data Science Sdot is one of leading platforms providing data science solution</h3>
          <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie egestas porta. Ut rhoncus eleifend quam id consequat. Nullam ut laoreet tortor, ac sodales dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie egestas porta. Ut rhoncus eleifend quam id consequat. Nullam ut laoreet tortor, ac sodales dui.</p>
          <div className="btn"> <button type="button" class="btn btn-primary">Learn More</button></div>
     </div>
     <div>
         <img className ="service-img"src="https://cdn.xxl.thumbs.canstockphoto.com/professor-or-scientist-cartoon-character-with-pointer-presenting-a-progressive-chart-4k-animation-videos_csp83148650.jpg" />

     </div>
  </div>
 <section className="section2">
     <h1 className="heading">Our offer Data Sciences  and Analytical Services </h1>
     <p className="info-text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie egestas porta. Ut rhoncus eleifend quam id consequat.</p>
        <div className="courses"></div>
           {
               Service.map((curElem)=> {
                   return(
                       <>
                       
                        <div className="course"> 
     
            <h3 className="title"> {curElem.title}</h3>
            <h2 className="Sub"> {curElem.sub}</h2>
            <FontAwesomeIcon className="arrowright" icon ={  faArrowRight }></FontAwesomeIcon>
        
            
            
            </div>
            
              
     
                       </>
                       
                   )
               })
           }
           <div className="btn1"> <button type="button" class="btn btn-primary">Learn More</button></div>
           
 
 
 </section>
</>
    );
};
export default Services;