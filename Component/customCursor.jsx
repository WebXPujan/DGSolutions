import React,{useState,useEffect,useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import { CursorContext } from '../context/CursorContext';

const Cursor = ({type,style,x,y}) => {
    
    const [yPos,setYPos] = useState(y);
    // const [styles,setStyle] = useState({
    //     left: style.left,
    //     top: style.top
    // })
    useEffect(()=>{
        setYPos((y + document.documentElement.scrollTop) - y)

        // window.onscroll = (e) => {
        //     // z = y + document.documentElement.scrollTop;
        //     // oldY = z
        //     setStyle({
        //         left: x,
        //         top: y+ window.scrollY
        //     })
        //     //console.log()
        // }
    },[y])

    if(x <= 5 || y <= (yPos+5)) {
        return (
            <div className="cursor hidden" style={style}></div>
        )
    }else{
        switch(type){
            case 'hovered':
                return(
                    <div className="cursor hovered" style={style}></div>
                );
                break;
            case 'inverted-hovered':
                return(
                    <div className="cursor inverted-hovered" style={style}></div>
                );
                break;
            case 'dragged':
                return(
                    <div className="cursor dragged" style={style}><span></span><span></span></div>
                );
                break;
            case 'inverted':
                return(
                    <div className="cursor inverted" style={style}></div>
                );
                break;
            case 'pointer':
                return(
                    <div className="cursor pointer" style={style}></div>
                );
                break;
            case 'hidden':
                return(
                    <div className="cursor hidden"></div>
                );
                break;
            case 'cross':
                return(
                    <div className="cursor cross" style={style}><span></span><span></span></div>
                );
                break;
            case 'cross.focus':
                return(
                    <div className="cursor cross focus" style={style}><span></span><span></span></div>
                );
                break;
            default:
                return(
                    <div className="cursor" style={style}></div>
                );
                break;
        }
    }
    

}
const CustomCursor = () => {

    const [mousePos,setMousePos] = useState({
        x: 0,
        y: 0
    });

    const [cursor,setCursor] = useContext(GlobalContext);
    const [mPos,setMPos] = useContext(CursorContext);

    const onMouseMove = e => {
        const {pageX: x, pageY: y} = e 
        setMousePos({x, y})
        setMPos({x,y})
        //setCursor(cursor)
        // if(x <= 5 || y <= 5){
        //     setCursor("hidden")
        // }
        
        
    }

    
    // const onWindowScroll = e => {
    //     let top = document.body.scrollTop || document.documentElement.scrollTop
    //     let left = mousePos.x
    //     setMousePos({left,top})
    //   // console.log(left,top)
    // }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        // document.addEventListener("mouseout", mouseHandle)
       // document.addEventListener("scroll", onWindowScroll)
        //console.log(cursor);
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
          //  document.removeEventListener("scroll", onWindowScroll)
        };
    }, []);


    return(
        
        <Cursor type={cursor} style={{left: mousePos.x, top: mousePos.y}} x={mousePos.x} y={mousePos.y} />
    );

}

export default CustomCursor;