import {useContext,useEffect} from 'react'
import Link from 'next/link';
import {GlobalContext} from '../context/GlobalContext'

const ButtonNormal = () => {
    return "dg-link dg-cta";
}
const ButtonInverted = () => {
    return "dg-link dg-cta inverted";
}

const ButtonInvertedGreen = () => {
    return "dg-link dg-cta inverted green-border";
}
const Button = (props) => {

     useEffect(()=>{
        // console.log(props.link,props.viewas);
     },[]);

    const [cursor,setCursor] = useContext(GlobalContext);
    return(
        <>
        {
            props.hasSlug === false ?
            (
                <Link href={props.link ? props.link : "/"} >
            <a 
            className={props.type === "normal" ? ButtonNormal() : props.type === "inverted" ? ButtonInverted() : ButtonInvertedGreen() }
            onMouseEnter={() => setCursor(props.type === "normal" ? "hovered" : props.type === "inverted" ? "hovered" : "inverted-hovered")} 
            onMouseLeave={() => setCursor(props.type === "inverted" ? "inverted": "")}
            onClick={props.onClick ? (e) => props.onClick(e) : undefined}
            ref={props.button}>
                {props.title}
            <span className="cta-icon">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                <g>
                <g>
                <path d="M390.595,281.767c-3.206-5.581-9.139-9.02-15.569-9.02H136.969c-6.43,0-12.363,3.439-15.563,9.02
                c-3.2,5.581-3.17,12.441,0.078,17.992l119.028,203.365c3.218,5.497,9.115,8.876,15.486,8.876c6.37,0,12.268-3.385,15.492-8.876
                l119.022-203.365C393.759,294.209,393.801,287.348,390.595,281.767z M255.997,458.527l-87.734-149.892h175.462L255.997,458.527z"
                />
                </g>
                </g>
                <g>
                <g>
                <path d="M255.997,0c-9.911,0-17.944,8.033-17.944,17.944v272.748c0,9.911,8.033,17.944,17.944,17.944
                c9.911,0,17.944-8.033,17.944-17.944V17.944C273.941,8.033,265.908,0,255.997,0z"/>
                </g>
                </g>
                </svg>
            </span>
        </a>
        </Link>
            )
            :
            (
                <Link href={props.link ? props.link : "/"} as={props.viewas ? props.viewas : "/"}>
            <a 
            className={props.type === "normal" ? ButtonNormal() : props.type === "inverted" ? ButtonInverted() : ButtonInvertedGreen() }
            onMouseEnter={() => setCursor(props.type === "normal" ? "hovered" : props.type === "inverted" ? "hovered" : "inverted-hovered")} 
            onMouseLeave={() => setCursor(props.type === "inverted" ? "inverted": "")}
            onClick={props.onClick ? (props.details ? e => props.onClick(e,props.details) : (e) => props.onClick(e)) : undefined}
            ref={props.button}>
                {props.title}
            <span className="cta-icon">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                <g>
                <g>
                <path d="M390.595,281.767c-3.206-5.581-9.139-9.02-15.569-9.02H136.969c-6.43,0-12.363,3.439-15.563,9.02
                c-3.2,5.581-3.17,12.441,0.078,17.992l119.028,203.365c3.218,5.497,9.115,8.876,15.486,8.876c6.37,0,12.268-3.385,15.492-8.876
                l119.022-203.365C393.759,294.209,393.801,287.348,390.595,281.767z M255.997,458.527l-87.734-149.892h175.462L255.997,458.527z"
                />
                </g>
                </g>
                <g>
                <g>
                <path d="M255.997,0c-9.911,0-17.944,8.033-17.944,17.944v272.748c0,9.911,8.033,17.944,17.944,17.944
                c9.911,0,17.944-8.033,17.944-17.944V17.944C273.941,8.033,265.908,0,255.997,0z"/>
                </g>
                </g>
                </svg>
            </span>
        </a>
        </Link>
            )

        }
        </>
    )
}
export default Button;