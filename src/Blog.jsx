import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faQuoteRight } from "@fortawesome/free-solid-svg-icons";
const Blog = () =>
{
    return (
        <>
        <section className="blog-section">
      <h1 className="blogsheading"> What say our clients about our awesome service</h1>
      <p className="blogtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. NLorem ipsum dolor sit amet, consectetur adipiscing elit. N</p>
      <div className="blog-container">
          <div className="blogs">
          <img  className="blogimage" src="https://149346886.v2.pressablecdn.com/wp-content/uploads/2016/12/ezra-headshot-1.jpg"/>
          <h3 className="bloghead">Mahadi Shopnil</h3>
          <h4>CEO Data Strategies</h4>
          <p className="blogtxt1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. NLorem ipsum dolor sit amet, consectetur adipiscing elit. N</p>
          <FontAwesomeIcon className="Quoteright" icon ={  faQuoteRight }></FontAwesomeIcon>
      </div>
      <div className="blogs">
       <img  className="blogimage" src="https://d24fkeqntp1r7r.cloudfront.net/wp-content/uploads/2018/05/28052407/Sam_Harris_2016-e1527485057318.jpg"/>   
          <h3 className="bloghead">Mahfuz Riad</h3>
          <h4>Data Science Strategies</h4>
          <p className="blogtxt1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. NLorem ipsum dolor sit amet, consectetur adipiscing elit. N</p>
          <FontAwesomeIcon className="Quoteright" icon ={  faQuoteRight }></FontAwesomeIcon>
      </div>
      
      
      
      </div>

</section>
<section>
    <div className="blog-container3">
        <div className="blogchart"> 
        <img  className="blogimg" src ="https://image.shutterstock.com/image-illustration/improving-business-grow-your-concept-260nw-1690174015.jpg"/>
        </div>
        <div className="blogpara">
   <h4 className="section2blog-heading"> 10+ Recent Case</h4>
   <h1 className="section2blog-mainheading"> #1 Data Analytics Strategy Projects</h1>
   <p className="blogtxt2">Data Analytic project that can boost your portfolio & help you land a data science job .The best way to get a job in data science is to showcase your skills with a portfolio of data analytics projects.</p>
   <button type="button" id ="buttonnn"className="btn btn-outline-dark">View Projects</button>
        </div>

    </div>
</section>
        </>
    )
}
export default Blog;