
export function TransitionAnimation(){
    

   
    const transition = {duration: 2, ease: [0.43,0.13,0.23,0.96]};

    const fadeInUp = () => {

            const parent = {
                    initial: {
                        opacity: 0,
                        y: "50%"
                    },
                    animate: {
                    opacity: 1,
                    y: 0,
                    transition: {duration:1,ease:transition.ease}
                    }
                
            }
            return parent;
}
    const staggerFadeIn = () => {

    
    const stg = {
        initial: {
            opacity: 0
        },
        fadeInUp: (custom) => {
            return {
                opacity: 1,
                transition: {delay:.5+(custom/4),duration:1,ease:transition.ease}
            }
        }
    }
    return stg;
}

return {
    staggerFadeIn,
    fadeInUp
}

}