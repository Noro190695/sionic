import React from 'react';
import { Link } from 'react-router-dom';
import AppleIcon from '../svg/Apple';
import FacebookIcon from '../svg/facebook';
import GoogleIcon from '../svg/Google';
import InstagramIcon from '../svg/Instagram';
import VkIcon from '../svg/Vk';
import footerStyle from './footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={footerStyle.footer}>
            <div className={footerStyle.footer__container + ' container'}>
                <div className={footerStyle.footer__top}>
                    <Link to='/' className={footerStyle.footer__left}>
                        <h2>React</h2>
                    </Link>
                    <div className={footerStyle.footer__right}>
                        <div className={footerStyle.left__content}>
                            <h3>Присоединяйтесь к нам</h3>
                            <ul>
                                <li>
                                    <a href='https://facebook.com' rel="noreferrer" target='_blank'><FacebookIcon /></a>
                                </li>
                                <li>
                                    <a href='https://vk.com' rel="noreferrer" target='_blank'><VkIcon /></a>
                                </li>
                                <li>
                                    <a href='https://instagram.com' rel="noreferrer" target='_blank'><InstagramIcon /></a>
                                </li>
                            </ul>
                        </div>
                        <div className={footerStyle.right__content}>
                            <h3>Устанавливайте приложение</h3>
                            <ul>
                                <li>
                                    <a href='https://facebook.com' rel="noreferrer" target='_blank'><GoogleIcon /></a>
                                </li>
                                <li>
                                    <a href='https://vk.com' rel="noreferrer" target='_blank'><AppleIcon /></a>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={footerStyle.footer__bottom}>
                    <Link to=''>© Sionic</Link>
                    <Link to=''>Правовая информация</Link>
                    <Link to=''>Политика конфиденциальности</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;