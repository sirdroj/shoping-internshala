import React from "react";
import "./Footer.css";
const Footer = ({ Pageno, setPageno,totalcards }) => {
  
  let x=Math.ceil(totalcards/15)
  return (
    <footer className="footer_wrapper my-3">
      <div className="pagenavigator flex flex-row items-center gap-3">
        <span
          className="pg_button bg-gray-300"
          onClick={() => {
            if (Pageno > 1) {
              setPageno(Pageno - 1);
            }
          }}
        >
          Previous
        </span>
        <div>{Pageno}/{x}</div>
        <span
          className="pg_button bg-gray-300"
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
