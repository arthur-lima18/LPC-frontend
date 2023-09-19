import '../styles/Header.css'
import Logo from '/logo_loucxs_borderless.svg';

export default function Header() {
    return (
        <div className="header-container bg-green-3">
            <img src={Logo} className="logo" alt="Loucxs Por Chocolate" />
        </div>
    )
}