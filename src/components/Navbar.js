import React from "react";

const Navbar = ({filterItem, menuList }) => {
    return(
        <nav className="navbar">
             <div className="btn-group">

           {menuList.map ((curElim) => {
               return(
                <button className="btn-group__item" onClick={()=> filterItem(curElim)}>{curElim} </button>
               )

           }
           )}

             </div>

           </nav>

    );
};

export default Navbar;