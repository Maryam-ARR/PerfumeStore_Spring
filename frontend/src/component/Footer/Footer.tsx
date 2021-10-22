import React, {FC} from 'react';

import "./Footer.css";

const Footer: FC = () => {
    return (
        <footer className="page-footer p-5 bg-black text-white">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="footer-left">
                        <h3>Perfume</h3>
                        <p><b>Mobile:</b> (+212) 652-01-53-78<br/>
                            <b>E-mail:</b> perfumeStore@gmail.com</p>
                        <br/>
                        <p>from 08:00 to 20:00 without breaks and weekends</p>
                    </div>
                    <div className="footer-right">
                        <h3>Social networks</h3>
                        <a href="#"><i className="fab fa-linkedin fa-2x mr-3" style={{color: "white"}}></i></a>
                        <a href="#"><i className="fab fa-facebook-f fa-2x mr-3" style={{color: "white"}}></i></a>
                        <a href="#"><i className="fab fa-twitter fa-2x mr-3" style={{color: "white"}}></i></a>
                    </div>
                </div>
              
            </div>
        </footer>
    );
}

export default Footer
