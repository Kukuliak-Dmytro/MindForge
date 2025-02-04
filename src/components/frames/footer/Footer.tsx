import './Footer.scss'
import { FaFacebook,FaInstagram,FaPhone  } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="footerWrapper">
            <div className="line"></div>
            <div className="footer">
                <div className="col">
                    <h2>MindForge</h2>
                    <span>
                        <a href="">
                            <FaFacebook size={24}> </FaFacebook>
                        </a>
                        <a href="">
                            <FaInstagram size={24}></FaInstagram>
                        </a>
                        <a href="">
                            <FaPhone size={22}></FaPhone>
                        </a>
                    </span>
                </div>
                <div className="col">
                    <ul>
                        <li>
                            <h4><a href="#">Фахівцю</a></h4>
                        </li>
                        <li>
                            <h5><a href="#">Знайти замовлення</a></h5>
                        </li>
                        <li>
                            <h5><a href="#">Виконані замовлення</a></h5>
                        </li>
                        <li>
                            <h5><a href="#">Заповнити профіль</a></h5>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>
                            <h4><a href="#">Замовнику</a></h4>
                        </li>
                        <li>
                            <h5><a href="#">Створити замовлення</a></h5>
                        </li>
                        <li>
                            <h5><a href="#">Мої замовлення</a></h5>
                        </li>
                        <li>
                            <h5><a href="#">Знайти фахівця</a></h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}