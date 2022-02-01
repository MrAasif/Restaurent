import React, {useState} from "react";
import './card.css';
import MenuCard from "./MenuCard";
import Menu from "./menuApi";
import Navbar from "./Navbar";

const uniqueList = [...new Set(
    Menu.map ((curElim) => {
        return curElim.category;
    })
),
"All"
];

console.log (uniqueList);

const Resturant =() => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

     if (category === "All") {
         setMenuData(Menu);
         return;
     }

    const updatedList = Menu.filter((curElem) => {
    return curElem.category===category;
});
        setMenuData(updatedList);

    }

    return (
        <>
          <Navbar filterItem = {filterItem} menuList={menuList} />
           <MenuCard menuData={menuData}/>
        </>
    )


};

export default Resturant;