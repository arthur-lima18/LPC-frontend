import '../styles/Footer.css';
import Logo from '/logo_loucxs.svg';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="footer-container bg-green-3">

            <img src={Logo} className="footer-logo" alt="Loucxs Por Chocolate" />

            <div className="social-links">
                <FaInstagram />
                <FaWhatsapp />
            </div>
        </div>
    )
}