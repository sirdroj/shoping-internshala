import React, { useContext, useState } from "react";
import "./Sidebar.css";
import MyContext from "../../context/MyContext";
const Sidebar = () => {



  const {categorys,setcategorys,selectedRange, setSelectedRange} = useContext(MyContext)

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setcategorys([...categorys, value]);
    } else {
      setcategorys(categorys.filter(category => category !== value));
    }
  };

   ; // Initial state for selected price range
    
    const handleChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedRange(selectedValue);
      console.log("Selected price range:", selectedValue);
    };
  
  return (
    <div className="sidebar">
      Sidebar
      <div>
      <h2>Select Categories:</h2>
      <label className="checkbox-label">
        <input type="checkbox" value="Toys" onChange={handleCheckboxChange} />
        Toys
      </label><br />
      <label className="checkbox-label">
        <input type="checkbox" value="Clothing" onChange={handleCheckboxChange} />
        Clothing
      </label><br />
      <label className="checkbox-label">
        <input type="checkbox" value="Electronics" onChange={handleCheckboxChange} />
        Electronics
      </label><br />
      <label className="checkbox-label">
        <input type="checkbox" value="Home Decor" onChange={handleCheckboxChange} />
        Home Decor
      </label><br />
      <label className="checkbox-label">
        <input type="checkbox" value="Beauty" onChange={handleCheckboxChange} />
        Beauty
      </label><br />

      <h3>Selected Categories:</h3>
      <ul className="selected_categories">
        {categorys.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>

    <div className="price_range">
    <label htmlFor="priceRange">Select Price Range:</label>
      <select id="priceRange" onChange={handleChange} value={selectedRange}>
        <option value="-">no range</option>
        <option value="0-50">0 - 50 ₹</option>
        <option value="51-100">51 - 100 ₹</option>
        <option value="101-200">101 - 200 ₹</option>
        <option value="201-500">201 - 500 ₹</option>
        <option value="501+">501+ ₹</option>
      </select>

    </div>
    </div>
  );
};

export default Sidebar;
