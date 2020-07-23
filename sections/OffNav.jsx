import {useContext,useEffect} from "react"
import {GlobalContext} from "../context/GlobalContext"
import Button from '../Component/Button'
import Navlink from "../Component/NavLink"

const OffNav = ({toggleMenu,setToggleMenu,nav,button}) => {

    const [cursor,setCursor] = useContext(GlobalContext)
    const toggleHandle = e => {
        setToggleMenu(!toggleMenu)
        setCursor("hovered");
    }
 

    return(
    <>
        {
            toggleMenu && (
                <section id="mega-menu" ref={nav}>
                    <div className="container">
                        <div className="ham ham-close"
                            onMouseEnter={()=>setCursor("inverted-hovered")}
                            onMouseLeave={() => setCursor("")}
                            onClick={toggleHandle}>
                            <a href="" className="dg-link" onClick={e => e.preventDefault()}>
                                <span className="icons">
                                    <svg id="Capa_1" enableBackground="new 0 0 413.348 413.348" viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg"><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>                    </span>
                            </a>
                        </div>
                        <div className="wrap">
                            <div className="logo logo-offnav">
                                <img src="/images/logo-full.png" alt="DG Solutions" 
                            onMouseEnter={()=>setCursor("inverted-hovered")}
                            onMouseLeave={() => setCursor("")}/>
                            </div>
                            <Navlink setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
                            <p>
                            <Button type="inverted border-green" title="Start Project" button={button}/>
                            </p>
                        </div>
                    </div>
                </section>
            )
        }
    </>
    )
}
export default OffNav;