import react from "react";
import Caseapi from "./Caseapi";


const Cases = () => {
    return(
        <>
        <div className="case-wrapper">
            <div className="case-container1">
    <h1 className="case-heading"> How it Works delievering the Insights</h1>
    <p className="case-text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie egestas porta. Ut rhoncus eleifend quam id consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie egestas porta. Ut rhoncus eleifend quam id consequat.</p>
        <img className="case-img" src="https://previews.123rf.com/images/emojiimage/emojiimage1801/emojiimage180101043/94219150-businessman-making-presentation-and-explaining-chart-on-a-whiteboard-business-character-working-in-o.jpg"/>

        </div>
        <div className="case-container2">
        {
            Caseapi.map((curElem) => {
                return (
                    <>
                    
            <div className="api">
               
                <h3 className="case-title">{curElem.title}</h3>
                <p className="case-text">{curElem.text}</p>
            </div>
                    </>

                );
            })
        }
        </div>
        </div>
        <div className="cases">
            <div className="cases-info">
             <h2 className="case-head1">   +15k </h2>
             <h3>   Succesful work </h3>
            </div>
            <div className="cases-info">
            <h2 className="case-head2">  07% </h2>
             <h3>   Increase in Upgrade conversion</h3>
            </div>
            <div className="cases-info">
            <h2 className="case-head3">   +40k </h2>
             <h3>   Data Management</h3>
            </div>
        </div>
        </>

    );
};


export default Cases;