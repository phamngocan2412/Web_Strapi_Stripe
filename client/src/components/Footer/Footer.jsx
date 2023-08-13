import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        The joy of the accuser and the pain of the praiser, all
                        I will open, and the very things that from the discoverer 
                        of truth and I will interpret them as if they were supposed 
                        to be the architects of a happy life that's from him.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            185/14 CMT8, Q.10, P.12, TP.HCM
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone : 089 646 7610
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: phamngocanh7679@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
                </div> 
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                        JSDEVSTORE 2022 CREATED BY PNA. PREMIUM E-COMMERCE SOLUTIONS.
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
