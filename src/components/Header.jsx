import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../styles/Header.scss';

const Header = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Header' });

    return (
        <header className="header-section">
            <div className="header">
                <div className="header-logo-container">
                    <p>{ t('title')}</p>
                    <img alt="FreHp Logo" className="header-logo" src={Logo}></img>
                </div>
                <nav>
                    <Link to='/'>{t('home')}</Link>
                    <Link to='/'>{t('aboutUs')}</Link>
                    <Link to='/'>{t('services')}</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;