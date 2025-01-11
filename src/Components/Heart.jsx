import React, { useState } from "react";
import "./Heart.css";

function Heart({ lang }) {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(null);
  const msgArrayHindi = [
    "रोहिणी '🖐",
    "मै तुमसे कुछ कहना चाहता हूँ 👆",
    "तुम मुझे बहुत अच्छी लगती हो ❤",
    "मै तुमसे बहुत प्यार करता हूँ ❤",
    "तुमसे शादी करना चाहता हूँ !! 👰",
    "परन्तु माफ़ी चाहता हूँ  😮",
    "मैंने हमेशा अपने दिल की बात बताई 🥰",
    "तुमसे तो पुछा ही नहीं तुम क्या चाहती हो 🙄",
    "क्या तूम मुझे पसंद करती हो? 😟",
    "क्या तुम मुझसे प्यार करती हो 😟?",
    "क्या तुम मुझसे शादी करोगी 😊?",
    "जानता हूँ यह फैसला इतना आसान नही हैं 😊?",
    "और तुम अगर 'ना' भी कहोगी तो मैं बुरा नही मानूंगा 🤗",
    "तुम्हारी छवि हमेशा वैसी की वैसी ही रहेगी एक अच्छी दोस्त वाली 🎈",
    "अगर तुम्हारे मन में कोई सवाल हो तो बेजिजक पूछ सकती हो🤗",
    "मेरे भूत भविष्य वर्त्तमान कुछ भी पूछ सकती हो 🤗",
    "मै तुम्हें सुनिशचित करता हूँ की बुरा नही मानूंगा और सही बताऊंगा 🤗",
    "जवाब जरूर देना  😘",
    "मै इंतजार करूँगा.......  😘",
  ];
  const msgArrayEnglish = [
    "Hi Rohini '🖐",
    "I want to tell you something 👆",
    "I Like you ❤",
    "I love you a lot ❤",
    "I want to marry you !! 👰",
    "But I am sorry 😮",
    "I have always expressed my feelings 🥰",
    "But I never asked you what you want 🙄",
    "Do you like me? 😟",
    "Do you love me? 😟",
    "Will you marry me? 😊",
    "I know this decision is not that easy 😊",
    "And if you say 'no', I won’t mind 🤗",
    "Your image will always remain the same, as a good friend 🎈",
    "If you have any questions in your mind, feel free to ask 🤗",
    "You can ask me anything about my past, present, or future 🤗",
    "I assure you that I won’t mind and I will be honest 🤗",
    "Please do respond 😘",
    "I will be waiting... 😘",
  ];

  const handlepop = (msgArray) => {
    setMessage(msgArray[count]);
    setCount((prev) => (count === 19 ? 0 : prev + 1));
  };

  return (
    <>
      <div
        className="heartBase"
        onClick={() => {
          handlepop(lang === "hindi" ? msgArrayHindi : msgArrayEnglish);
        }}
      >
        <div className="hrtTriangle">
          <div className="hrtCircle hrtleft"></div>
          <div className="hrtCircle hrtRight"></div>
          <div className="message">{message}</div>
        </div>
      </div>
    </>
  );
}

export default Heart;
