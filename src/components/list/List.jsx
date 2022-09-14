import "./list.scss"
import {ArrowBackIosOutlined,ArrowForwardIosOutlined }from "@material-ui/icons";
import  ListItem  from "../listitem/ListItem";
import { useRef,useState } from "react";


const List=()=>{
    const listContainerRef=useRef()
    const [slideNumber,setSliderNumber]=useState(0)
    const [rightClicked,setRightClicked]=useState(false)
   


    const handleClick=(direction)=>{
        
        let currentDistance=listContainerRef.current.getBoundingClientRect().x-50
        
        if(direction==="left" && slideNumber>0 ){
            setSliderNumber(slideNumber-1)
            listContainerRef.current.style.transform=`translateX(${230+currentDistance}px)`
        }
        else if(direction==="right" && slideNumber<4){
            setRightClicked(true)
            setSliderNumber(slideNumber+1)
            listContainerRef.current.style.transform=`translateX(${-230+currentDistance}px)`
        }

    }

    return (
        <div className="list">
            <span className="listTitle">Continue Watching</span>
            <div className="wrapper">
            {rightClicked && (<ArrowBackIosOutlined className={`sliderArrow left ${rightClicked?"show": ""}`} onClick={()=>{handleClick("left")}}/>)}
                <div ref={listContainerRef} className="listContainer">
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                    

                </div>
                
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>{handleClick("right")}}/>
            </div>
            
        </div>
    )
}
export default List