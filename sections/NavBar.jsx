import {useContext} from 'react'
import Link from 'next/link';
import {GlobalContext} from '../context/GlobalContext'


const NavBar = ({toggleMenu,setToggleMenu}) => {

    const [cursor,setCursor] = useContext(GlobalContext);

   
    const toggleHandle = e => {
        setToggleMenu(!toggleMenu)
        setCursor("inverted-hovered");
    }
    return(
        <section id="navBar" className={`${toggleMenu ? "hide": ""}`}>
            <div className="wrapper">
                <div className="container">
                    <div className="logo"
                    onMouseEnter={() => setCursor('hovered')}
                    onMouseLeave={() => setCursor("")}>
                        <Link href="/">
                            <a className="dg-link">
                                <img src="/images/logo.png" alt="Digital Gurkha Solutions"/>
                            </a>
                        </Link>
                    </div>
                    <div className="ham"
                    onMouseEnter={() => setCursor('hovered')}
                    onMouseLeave={() => setCursor("")}
                    onClick={toggleHandle}>
                        <a className="dg-link" href="" onClick={e => e.preventDefault()}>
                            <span className="icons">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 384 384" style={{"enableBackground":"new 0 0 384 384"}}>
                                <g>
                                <g>
                                <g>
                                <rect x="0" y="277.333" width="384" height="42.667"/>
                                <rect x="0" y="170.667" width="384" height="42.667"/>
                                <rect x="0" y="64" width="384" height="42.667"/>
                                </g>
                                </g>
                                </g>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
    </section>
    );
}
export default NavBar;