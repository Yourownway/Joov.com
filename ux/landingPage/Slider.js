import React, { useEffect, useRef, useState } from "react";

import style from "../../styles/SliderContainer.module.css";
export default function Slider({children, direction, setDirection,type="auto" }) {
  // const [scrollCompleted, setScrollCompleted] = useState(0);

  const ref = useRef(null);
  useEffect(() => {
   
    if (!ref.current || !direction || type !== "manuel") return;
    let gap = ref.current.offsetWidth;
    console.log(gap);
    if (direction == "right") {
      ref.current.scroll({
        top: 0,
        left: gap,
        behavior: "smooth",
      });
    }
    if (direction == "left") {
      ref.current.scroll({
        top: 0,
        left: -gap,
        behavior: "smooth",
      });
    }
    setDirection(null);
  }, [direction, ref.current]);

  useEffect(() => {
    
    if (!ref.current || type !== "auto") return;

    console.log(ref,"ici")
 let scrollCompleted = 0 
 

    setInterval(() => {
      
      if ( ref.current.scrollLeft == 0 ) {
        ref.current.scroll({
          top: 0,
          left: ref.current.offsetWidth,
          behavior: "smooth",
        });
        return
       
      }
       else {
        ref.current.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      
      }
    }, 3900);
    
    
    // if (direction == "left") {
    //   ref.current.scroll({
    //     top: 0,
    //     left: -gap,
    //     behavior: "smooth",
    //   });
    // }
    
  }, [ ref.current]);

  return (
    <div className={style.container} ref={ref} id="business__slider">
  {children}
    </div>
  );
}
