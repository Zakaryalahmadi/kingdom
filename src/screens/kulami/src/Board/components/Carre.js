import React from "react";
import Bille from "./Bille";
import dir from "../images/4.png";



export default function Carre(props){
    const x = props.x ;
    const y = props.y ;
    const cord = [{x:x+18,y:y+19},{x:x+18,y:y+99},
                    {x:x+98,y:y+19},{x:x+98,y:y+99}] 
    const billes = cord.map((bille)=>{
        return(
        <Bille
            x={bille.x}
            y={bille.y}
            class={props.class}
            type ={props.type}
            

        />
        )
        
        })

    return(
        <div>
            <img src={dir} alt="piece à 6" 
                width = "160" height="160"
                style={
                    {
                        position:"absolute",
                        left: x,
                        top: y
                    }
            
                
                }
                
            />
            {billes}
    
        </div>
        
        
     
    )
}