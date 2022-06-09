import React from "react";

export default function Light(color, active){
    
    return(
        <div 
            className={"Light"}
                style={{
                    backgroundColor:color, opacity: active ? 1 : 0.4
                }
            }
        />
    )
}