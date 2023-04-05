import "./style.css"
import vk from "./../../img/icons/vk.svg"
import ig from "./../../img/icons/instagram.svg"
import gH from "./../../img/icons/gitHub.svg"
import lD from "./../../img/icons/linkedIn.svg"




function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={ig} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={gH} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={lD} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;