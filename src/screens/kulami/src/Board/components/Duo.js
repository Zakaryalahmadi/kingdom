import React from "react";
import Bille from "./Bille";
import dir_h from "../images/duo_h.png";
import dir_v from "../images/duo_v.png";



export default function Duo(props){
    const x = props.x ;
    const y = props.y ;
    if(props.position ==='v'){
        const cord = [{x:x+18,y:y+19},{x:x+18,y:y+99}] 
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
                    width = "80" height="160"
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
        const cord = [{x:x+18,y:y+19},{x:x+98,y:y+19}] 
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
                    width = "160" height="80"
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


