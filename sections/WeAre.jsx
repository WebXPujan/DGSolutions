import {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import Button from '../Component/Button';
const WeAre = () => {

    const [cursor,setCursor] = useContext(GlobalContext)
    return(
        <section className="sections" id="who-we-are"
        onMouseEnter={()=>setCursor("inverted")}
        onMouseLeave={()=>setCursor("")}>
        <div className="container">
            <div className="columns">
              <div className="column col-5 col-md-12">
                  <div className="hero-content">
                    <div className="info">
                        <div className="wrap">
                            <h1 className="title xl-title inverted">WE<span>ARE</span></h1>
                            <p className="title title__big md-title inverted">
                                The Growth Hackers!
                            </p>
                            <p>
                                <Button type="inverted" title="Get Details"/>
                            </p>
                        </div>
                        
                    </div>
                    
                  </div>
              </div>
              <div className="column col-7 col-md-12">
                <div className="feature">
                    <ul>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Humble</h1>
                            <p className="para inverted small">Lorem ipsum, vero porro repudiandae quibusdam error molestiae.</p>
                        </li>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Punctual</h1>
                            <p className="para inverted small">Lorem ipsum, vero porro repudiandae quibusdam error molestiae.</p>
                        </li>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Flexible</h1>
                            <p className="para inverted small">Lorem ipsum, vero porro repudiandae quibusdam error molestiae.</p>
                        </li>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Agile</h1>
                            <p className="para inverted small">Lorem ipsum, vero porro repudiandae quibusdam error molestiae.</p>
                        </li>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Creative</h1>
                            <p className="para inverted small">Lorem ipsum, vero porro repudiandae quibusdam error molestiae.</p>
                        </li>
                        <li className="list-items">
                            <h1 className="black title title__big inverted">Creative</h1>
                            <p className="para inverted small">Lorem ipsum, vero porro repudiandae quibusdam error molestiae.</p>
                        </li>
                        
                    </ul>
                </div> 
              </div>
            </div>
        </div>
        <span className="arrow"></span>
    </section>
    )
}
export default WeAre;