import React from "react";

function Stuck ({children, sticky=false, ...rest}) {
    const [isSticky, setIsSticky] = React.useState(false);
    const ref =  React.createRef()

    // mount
    React.useEffect(() => {
        const cacheRef = ref.current, observer = new IntersectionObserver(
            ([e]) =>
                setIsSticky(e.intersectionRatio < 1),
                {threshold : [1]}
        )
        observer.observe(cacheRef)
        return function (){
            observer.unobserve(cacheRef)
        }
    }, [])
    return (
        <div style={{width: isSticky ? '8rem' : '0px', height: isSticky ? '2rem' : '0px',opacity: isSticky ? '1' : '0'}} className={ 'asp ' + (isSticky ? " isSticky" : "")} ref={ref} {...rest}>
            {children}
        </div>
    )
}

export default Stuck;