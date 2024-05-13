import React from "react";
import { BannerProps } from "./Banner.types";
import './styles.css';


const Banner: React.FC<BannerProps> = ({ logo, navigations, ...props}) => (
    <div className="">
        <div className="banner-topbar">
            <div className="logo">Logo here</div>
            <div className="banner-right-bar">
                <ul className="banner-navbar">
                    { navigations.map((item, index) => <a href={item.link}><li key={index} className="banner-nav-item">{item.name}</li></a>)}
                </ul>
            </div>
        </div>
    </div>
);

export default Banner;