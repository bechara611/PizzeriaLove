import styled from "styled-components";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import useObtenerMenu from "../Hooks/useObtenerMenu";


const Footer = () => {
    let face = 'https://www.facebook.com';
    let insta = 'https://www.instagram.com';
    let twitter = 'https://www.twitter.com';
    let nuevaPestana = "_blank"

    return (
        <>
            <div className="container-fluid " >
                <div className="row fila">
                    <footer className="col-12 footer">
                        <a href={face} target={nuevaPestana} className='face'><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href={twitter} target={nuevaPestana} className='twitter'><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href={insta} target={nuevaPestana} className='instagram'><FontAwesomeIcon icon={faInstagramSquare} /></a>

                    </footer>
                    <p className="col-12">Created by Dany Bechara</p>
                </div>
            </div>
        </>
    );
}

export default Footer;