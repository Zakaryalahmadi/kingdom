import React,{useState,useEffect, useContext} from "react";
import { FirstContext } from "./First";
import { FreeContext } from "./FreePlacement";
import { LastContext } from "./Lastpick";
import { BeforeLastContext } from "./BeforeLastpick";
import { PlayedContext } from "./PlayedPlacement";
import { UserContext } from "./Player";
import {Game} from "./Game";
import blanc from "../images/blanc.png";
import jaune from "../images/jaune.png";
import verte from "../images/vert.png";
import bleu from "../images/bleu.png";

export default function Bille(props){    
    
    const rouge = blanc
    const gris = bleu
    const noir = jaune;
    const vert = verte
    const [color,setColor] = useState(gris) // couleur de l'emplacement de la bille 
    const [taken,setTaken] = useState(false) // l'etat de la bille
    const { player, setPlayer } = useContext(UserContext); // joueur actuelle
    const {lastpick,setLastpick} = useContext(LastContext);
    const {beforelastpick,setBeforeLastpick} = useContext(BeforeLastContext); // derniere placement 
    const {first,setFirst} = useContext(FirstContext) // indique si c'est la premiere mouvement 
    const {free,setFree} = useContext(FreeContext)
    const {played,setPlayed} = useContext(PlayedContext)
    const {game,setGame} = useContext(Game);

    
    
    
    
    
    const x = props.x
    const y = props.y
    const piece = props.class
    useEffect(()=>{
        if(((x === lastpick.x && piece !== lastpick.piece)||(y === lastpick.y && piece !== lastpick.piece)) && !taken ){
            setColor(vert)

        }
        if(((x!== lastpick.x && y!== lastpick.y) && !taken)||(piece===lastpick.piece && !taken)||(piece=== beforelastpick.piece && !taken)){
            setColor(gris)}

        
        
        
        },[player])
    


    function handleColor(){
        if(game){
            if((!taken && color===vert )||first){
            
                setColor(()=>player?rouge:noir)
                setTaken(true)
                setPlayer(prev=>!prev)
                setBeforeLastpick({
                    x: lastpick.x,
                    y: lastpick.y,
                    piece: lastpick.piece
                })
                setLastpick({
                    x:x,
                    y:y,
                    piece:props.class
                    
                })
                setFirst(false)
                
                
                
                setPlayed([...played,{
                    player : player,
                    piece : piece,
                    type : props.type
                }])
                //console.log(played)
                
                
                
                
            }else{
                alert(`placement already taken !`)
                
            }
            
            
        }else{
            alert("Press Play to begin ")
        }

    }
        
    
    
    return(
        <div>
            <img src={color} alt="bille" 
                width = "43" height="43"
                style={
                    {
                        position:"absolute",
                        left: props.x,
                        top: props.y
                    }
            
                
                }
                onClick={handleColor}
            />
    
        </div>
    )
    

}