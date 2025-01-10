import React, { useState } from 'react'
import "./Heart.css"

function Heart({lang}) {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState(null)
    const msgArrayHindi = [
        "Hi रोहिणी '🖐", 
        "दिल को छुए और आपके लिए सन्देश जानें 👆", 
        "मै तुमसे बहुत प्यार करता हूँ ❤",
        "तुमसे शादी करना चाहता हूँ !! 👰", 
        "परन्तु माफ़ी चाहता हूँ  😮",
        "मैंने हमेशा अपने दिल की बात बताई 🥰",
        "तुमसे तो पुछा ही नहीं 🙄",
        "क्या तूम मुझे पसंद करती हो? 😟",
        "क्या तुम मुझसे प्यार करती हो 😟?",
        "तुम अगर 'ना' भी कहोगी तो मुझे बुरा नही मानूंगा 🤗",
        "तुम्हारी छवि हमेशा वैसी की वैसी ही रहेगी🎈",
        "जवाब जरूर देना  😘",
        "मै इंतजार करूँगा.......  😘",
    ]
    const msgArrayEnglish = ["Hi Dear '🖐", 
        "Tap On the Heart for Message 👆", 
        "I Love you ❤",
        "Will you Marry Me !! 👰", 
        "But I am Sorry 😮",
        "Maine Hamesha Apni Feelings Batai 🥰",
        "Tumse to Poocha h nhi 🙄",
        "Do You Like Me ? 😟",
        "Do You Love Me  😟?",
        "Don't worry tum agr 'Na' bhi Kahogi to Koi Bura Nhi Manunga 🤗",
        "Tumhari Image hamesha mere liye wasie hi rahegi 🎈",
        "Jawab Jarro Dena 😘",
        "I will be waiting...... 😘",
    
    ]
    const handlepop = (msgArray)=>{
        if(count === 0 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        if(count === 1 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        if(count === 2 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        if(count === 3){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        if(count === 4 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        if(count === 5 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        
        if(count === 6 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        
        if(count === 7 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        
        if(count === 8 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        
        if(count === 9 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        if(count === 10 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        if(count === 11 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        if(count === 12 ){
            setMessage(msgArray[count])
            setCount(prev => prev+1)
        }
        
    }
  return (
   <>
   <div className="heartBase" onClick={()=>{handlepop(lang=== "hindi" ? msgArrayHindi: msgArrayEnglish)}}>
   <div className='hrtTriangle'>
   <div className='hrtCircle hrtleft'></div>
   <div className='hrtCircle hrtRight'></div>
   <div className="message">
    {message}
   </div>
   </div>
   
   </div>
  
   </>
  )
}

export default Heart




