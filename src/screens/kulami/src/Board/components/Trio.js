import React from "react";
import Bille from "./Bille";
import dir_v from "../images/trios_v.png";
import dir_h from "../images/trios_h.png";



export default function Trio(props){
    const x = props.x ;
    const y = props.y ;
    if(props.position ==='v'){
        const cord = [{x:x+18,y:y+19},{x:x+18,y:y+99},{x:x+18,y:y+179}] 
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
            <img src={dir_v} alt="piece à 6" 
                width = "80" height="240"
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


    if(props.position ==='h'){
        const cord = [{x:x+18,y:y+19},{x:x+98,y:y+19},{x:x+178,y:y+19}] 
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
            <img src={dir_h} alt="piece à 6" 
                width = "240" height="80"
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
}
