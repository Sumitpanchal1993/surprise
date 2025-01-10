import React from 'react'
import "./Envolope.css"

function Envolope() {
    return (
        <>
            <div className="envolopeBase">
                <div className="envolope">
                <div className='topFlap'>
                    <div className='openBtn'>o</div>
                </div>
                <div className='virtualFlap'>Virtual Flap</div>                
                <div className='leftFlap'>Left Flap</div>
                <div className='rightFlap'>Right Flap</div>
                <div className='bottomFlap'></div>
                </div>
            </div>
        </>
    )
}

export default Envolope