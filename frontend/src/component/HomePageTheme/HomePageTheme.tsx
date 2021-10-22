import React, {FC} from 'react';
import {Link} from "react-router-dom";

const HomePageTheme: FC = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5" >
                        <Link to={{pathname: "/menu", state: { id: "female" }}}>
                            <img className="img-fluid" src="https://image.freepik.com/vecteurs-libre/flacon-parfum-tissu-soie-noir_107791-1390.jpg"/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <Link to={{pathname: "/menu", state: { id: "male" }}}>
                            <img className="img-fluid" src="https://www.libertylifestyle.co.in/images/new-banner-1.jpg"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageTheme;
