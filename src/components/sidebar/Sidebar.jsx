import React, { useContext, useState } from "react";
import "./Sidebar.css";
import MyContext from "../../context/MyContext";
const Sidebar = () => {
  const { categorys, setcategorys, selectedRange, setSelectedRange } =
    useContext(MyContext);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setcategorys([...categorys, value]);
    } else {
      setcategorys(categorys.filter((category) => category !== value));
    }
  }; // Initial state for selected price range

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedRange(selectedValue);
    console.log("Selected price range:", selectedValue);
  };

  return (
    <div className="sidebar bg-white shadow-sm m-3 rounded-md py-3 px-3 text-left">
      <div className="">
        <div className="py-2">
          <h2 className="font-bold text-gray-500 my-1">Select Categories:</h2>
          <label className="checkbox-label font-semibold cursor-pointer hover:text-green-500">
            <input
              type="checkbox"
              value="Toys"
              onChange={handleCheckboxChange}
            />
            Toys
          </label>
          <br />
          <label className="checkbox-label font-semibold cursor-pointer hover:text-green-500">
            <input
              type="checkbox"
              value="Clothing"
              onChange={handleCheckboxChange}
            />
            Clothing
          </label>
          <br />
          <label className="checkbox-label font-semibold cursor-pointer hover:text-green-500">
            <input
              type="checkbox"
              value="Electronics"
              onChange={handleCheckboxChange}
            />
            Electronics
          </label>
          <br />
          <label className="checkbox-label font-semibold cursor-pointer hover:text-green-500">
            <input
              type="checkbox"
              value="Home Decor"
              onChange={handleCheckboxChange}
            />
            Home Decor
          </label>
          <br />
          <label className="checkbox-label font-semibold cursor-pointer hover:text-green-500">
            <input
              type="checkbox"
              value="Beauty"
              onChange={handleCheckboxChange}
            />
            Beauty
          </label>
          <br />
        </div>
        <div className="py-2 ">
          <h3 className="font-bold text-gray-500 my-1">Selected Categories:</h3>
          <ul className="selected_categories  border-[1px] rounded-md p-1 text-sm">
            {categorys.map((category) => (
              <li className="font-normal" key={category}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="price_range py-2">
        <label htmlFor="priceRange" className="font-bold text-gray-500 my-1">Select Price Range:</label>
        <select id="priceRange" className="font-semibold border-[1px] rounded-md " onChange={handleChange} value={selectedRange} >
          <option className="font-semibold text-sm"  value="-">no range</option>
          <option className="font-semibold text-sm"  value="0-50">0 - 50 ₹</option>
          <option className="font-semibold text-sm"  value="51-100">51 - 100 ₹</option>
          <option className="font-semibold text-sm"  value="101-200">101 - 200 ₹</option>
          <option className="font-semibold text-sm"  value="201-500">201 - 500 ₹</option>
          <option className="font-semibold text-sm"  value="501+">501+ ₹</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
