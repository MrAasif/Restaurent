import React from "react";
import './card.css'

const MenuCard = ({menuData}) => {
    
    return(
        <>
        <section className="main-card--cointainer">

{menuData.map ((curlElem) =>{

    const {id, name, category, image, description } = curlElem;

    return(
        <>
        <div className="Card-container">
            <div className="card">
                <div className="card-body">

                <span className="card-number card-circle subtle"> {id} </span>
                <span className="card-author subtle"> {category} </span>
                <h2 className="card-title"> {name} </h2>
                <span className="card-description subtle"> {description} </span>
                <div className="card-read"> Read </div>
                <div>
                    <img src={image} alt="image" className="card-media" />

                    <span className="card-tag subtle">Order now</span>
                </div>


                </div>
            </div>
              
            </div>
        </>
    )
})}

          
            </section>
        </>
    )
};

export default MenuCard;