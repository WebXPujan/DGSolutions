import {useState} from 'react'
import React from 'react';
import {TweenMax} from 'gsap';

const MouseMove = () => {
    const [elem,setEl] = useState([]);

    const move = (mousePos,config) => {


        TweenMax.to( 
            elem[0], 
            5, 
            {
                 y: config.vertical ? -.2 * (((mousePos.y / config.rect.clientWidth) * 100) - 50) : 0,
                 x: -.2 * (((mousePos.x / config.rect.clientHeight) * 100) - 50),

                transformPerspective:100,
                transformOrigin:'center center' 
            })
        TweenMax.to(
                elem[1],
                5,
                {
                    x: .2 * (((mousePos.x / config.rect.clientHeight) * 100) - 50)
                }
            );
    }
    const setElem = (el) => {
        setEl(el);
        el.forEach(element => {
            TweenMax.set(element,{ transformStyle: 'preserve-3d'  })
        });
    }

    const revertPosition = (el) => {
        TweenMax.to( 
            el, 
            5, 
            {
                 y: 0,
                 x: 0,

                transformPerspective:0,
                transformOrigin:'center center' 
            });
    }
    return {
        setElem,
        move,
        revertPosition
    };
}

export default MouseMove;
