import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../products";
import "./Home.scss";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import MyContext from "../../context/MyContext";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  // const {data,setData}=useContext(MyContext);
  const {fdata, Pageno, setPageno, add, remove, cart} = useContext(MyContext);
  
  let totalcards=fdata.length
  return (
    <div>
      <div className="home_wrapper">
        <Sidebar/>
        <div className="Home flex flex-wrap justify-evenly items-start">
          {fdata.slice((Pageno-1)*15, Pageno*15).map((product) => (
            <Card add={add} remove={remove} cart={cart} product={product} />
          ))}
          
        </div>
      </div>
        <Footer Pageno={Pageno} setPageno={setPageno} totalcards={totalcards}/>
    </div>
  );
};

export default Home;
