import React from "react";
import "./Footer.css";
const Footer = ({ Pageno, setPageno,totalcards }) => {
  
  let x=Math.ceil(totalcards/15)
  return (
    <footer className="footer_wrapper">
      <div className="pagenavigator">
        <span
          className="pg_button"
          onClick={() => {
            if (Pageno > 1) {
              setPageno(Pageno - 1);
            }
          }}
        >
          previous
        </span>
        <div>{Pageno}/{x}</div>
        <span
          className="pg_button"
          onClick={() => {
            if (Pageno < x) {
              setPageno(Pageno + 1);
            }
          }}
        >
          Next
        </span>
      </div>
    </footer>
  );
};

export default Footer;
