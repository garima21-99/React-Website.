import react from "react";
import Pageapi from "./Pageapi";
const Page =() =>
{
return(

    <>
    <div className="page-container-wrapper">
        <div className="page-container1">
            <h1 className="page-main-heading">Get Ready to Started It's Free & Very Easy</h1>
<p className="case-text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie egestas porta. Ut rhoncus eleifend quam id consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie egestas porta. Ut rhoncus eleifend quam id consequat.</p>
        </div>
        <div className="page-container2">
            <form className="form1">
                <h1 className="form-Heading"> Subscribe for Quota </h1>
               <label className="form-field">Name </label> <br/>
                   <input type="text" className="form-input" placeholder="Enter Your Name" /> <br/>
                  <label className="form-field"> Password </label><br/>
                   <input type="password" className="form-input" placeholder="Enter Your Password" /><br/>
                   <button type="button" id="longbtn"className="btn btn-primary btn-lg btn-block">Get a Quote</button>
                    <h3 className="form-signup">Let's do Great Things Together Free <span>Signup</span></h3>
               
                </form> </div>
    </div>
    <section className="page-section2">
        <h1 className="Page-blog"> Latest Data Science and Our Company News</h1>
        <p className="page-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie egestas porta. Ut rhoncus eleifend quam id consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie egestas porta. Ut rhoncus eleifend quam id consequat.</p>
    <div className="page-img-container">
        {
            Pageapi.map((curElem)=> {
                return(
                    <>
                     <div className="map-page">
            <img  className="Pageimg" src = {curElem.img}/>             
            <h4 className="img-title">{curElem.title}</h4>
            <h2 className="page-job">{curElem.text}</h2>
            <p className="Date">{curElem.date}</p>
            </div>
                    </>
                )
            })
        }
       
    </div>

    </section>
    </>
)}
export default Page;