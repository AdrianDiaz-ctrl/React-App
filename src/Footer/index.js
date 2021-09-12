import React from 'react';
import './main.css';
import { DiGithubBadge } from "react-icons/di";
import { FaInstagram } from "react-icons/fa";


function FooterSection(){
    return (
        <footer className="footerSection">
            <h2 className="footerSection__title">Hecho por <a href="#">@Adrían Díaz</a></h2>
            <p> Contact </p>
            <div className="links">
                <a href="#"><DiGithubBadge className="badge" fontSize="60" ></DiGithubBadge></a>
                <a href="#"><FaInstagram className="badge" fontSize="60" /></a>
            </div>
        </footer>
    );
}

export {FooterSection};