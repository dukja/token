import { motion, useMotionValue, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";
export default function Progress  ({scaleX})  {
    const [scale, setScale] = useState({scaleX})
    const sliderXVal = useMotionValue(scaleX);
    useEffect(()=>{
        
        console.log("scale",sliderXVal.current)
    },[scale])
    console.log({scaleX})
    return(
        <>
            <div className="progressBar">
                <motion.div className="indicator"
                    style={{
                        scaleX: scaleX,                       
                        originX: 0,
                    }}
                >
                </motion.div>
            </div>
        </>
    )
}