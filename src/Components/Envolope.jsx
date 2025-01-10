import React, { useState } from 'react'
import "./Envolope.css"
import Heart from './Heart'

function Envolope() {
    const [lang, setLang] = useState("eng");
    const [isFlapOpen, setisFlapOpen] = useState(false)
    const secretKey = "Rohini"


    const handleOnClick = () => {
        let flap = document.getElementById("foldFlap")
        let heart = document.getElementById("heart")
        if (!isFlapOpen) {
            let key = prompt("Enter the Secert Key")
            if (key === secretKey) {
                flap.style.transform = "rotateX(-180deg)"
                flap.style.top = "-50%"
                setisFlapOpen(true)
                heart.style.zIndex = "10"
            }
            else {
                alert("You are not the Special One")
            }
        }
        else {
            flap.style.transform = "rotateX(0deg)"
            flap.style.top = "0%"            
            heart.style.zIndex = "-1"
            setisFlapOpen(false)
        }
    }


    return (
        <>
            <div className="envolopeBase">
            <div className="selector">
            <button
              onClick={() => {
                setLang("eng");
              }}
            >
              English
            </button>
            <button
              onClick={() => {
                setLang("hindi");
              }}
            >
              Hindi
            </button>
          </div>
                <div className="envolope">
                    <p style={{textAlign:"center", color: 'white'}}>tap on heart</p>
                    <div className='topFlap' id="foldFlap">
                        <div className='openBtn' onClick={handleOnClick}></div>
                    </div>
                    <div className='virtualFlap'></div>
                    <div className='leftFlap'></div>
                    <div className='rightFlap'></div>
                    <div className='bottomFlap'></div>
                </div>
                <div className="heart" id='heart'>
                    {isFlapOpen && <Heart lang={lang} />}
                </div>
            </div>

            

        </>
    )
}

export default Envolope