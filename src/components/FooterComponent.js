import React from "react";
import '../style/Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 text-center">
            <h3>Download Our App</h3>
            <p>Download App for ios or Android mobile phone.</p>
            <div className="app-logo">
              <img src="/images/play-store.png" alt="" />
              <img src="/images/app-store.png" alt="" />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <img src="/images/logo.png" alt=""/>
            <p>
              Our Purpose Is To Sustainably Make the Pleaseure and Benefits of
              Sports Accessible to the Many.{" "}
            </p>
          </div>
          <div className="col-md-3 text-center">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright-2020 </p>
    </footer>
  );
}

export default Footer;
