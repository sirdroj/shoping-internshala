import React, { useState } from "react";
import MyContext from "./MyContext";
import { PRODUCTS } from "../products";
const MyProvider = ({ children }) => {
  const [data, setData] = useState("Initial Data");
  const [categorys,setcategorys]=useState([])
  const [selectedRange, setSelectedRange] = useState("-")
  const [filteredproducts,setfilterproducts]=useState([])
  const [Pageno, setPageno] = useState(1);
  function productfilter(){
        return (PRODUCTS.filter(
          (product) =>
            ifcategory(product.category)&&rangefinder(product.price))).map((item, index) => {
          return {
            ...item,
            serialNumber: index + 1
          };
        });
      
  }
  let fdata=productfilter();




  // const [categorys,setcategorys]=useState({"Clothing":true,"Electronics":true,"Toys":true,"Beauty":true,"Home Decor":true})
  function resetfilters(){
    setcategorys({"Clothing":true,"Electronics":true,"Toys":true,"Beauty":true,"Home Decor":true});
  }
  function ifcategory(cat){
    if(categorys.length==0){
      return true
    }
    else{
      console.log(cat)
      console.log(categorys)
      if(cat in categorys){
        return true
      }
      for (const c of categorys) {
      if(c===cat){
        return true
      } 
      }
      return false
    }
  }
  function rangefinder(price){
    if(selectedRange=="-"){
      return true
    }
    else if(selectedRange=="0-50"){
      return price<=50
    }
    else if(selectedRange=="51-100"){
      return 50<price && price<=100
    }
    else if(selectedRange=="101-200"){
      return 100<price && price<=200
    }
    else if(selectedRange=="201-500"){
      return 201<price && price<=500
    }
    else if(selectedRange=="501+"){
      return 500<price 
    }
  }
  const zeroart = {};
  for (let i = 1; i <= 49; i++) {
    zeroart[i] = 0;
  }
  const [cart, setCart] = useState(zeroart);
  function checkout() {
    setCart(zeroart);
  }
  const add = (id) => {
    let x = { ...cart };
    x[id] += 1;
    setCart(x);
  };
  const remove = (id) => {
    if (cart[id] > 0) {
      let x = { ...cart };
      x[id] -= 1;
      setCart(x);
    }
  };
  const total = () => {
    var s = 0;
    PRODUCTS.map((product) => {
      s += product.price * cart[product.id];
    });
    console.log("total", s);
    return s;
  };
  return (
    <>
      <MyContext.Provider
        value={{fdata,Pageno, setPageno,rangefinder,selectedRange, setSelectedRange, data, setData, cart, setCart, add, remove, total, checkout,categorys,setcategorys,ifcategory }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
  //   }
};
export default MyProvider;
