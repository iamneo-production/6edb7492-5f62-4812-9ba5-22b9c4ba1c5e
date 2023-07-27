import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { analyze } from "./utlis";
import './Chatbot.css'




export default function Chatbot() {
  const [messages, setMessages] = useState([
    { message: "Hello ! your name please?" },
  ]);
  const [text, setText] = useState("");
  const onSend = () => {
    let list = [...messages, { message: text, user: true }];
    if (list.length > 2) {
        const reply=analyze(text)
        list=[
            ...list,
            {message:reply}
        ]
    } else {
      list = [
        ...list,

        /*{ message: `Hi, ${text}`,},*/
        { message:<p className="hr3"> Hi {text}
        <ul className="hr3">Please type the kind of issue you are facing from below:
        <li>Order delayed </li>
        <li>order delivered late</li>
        <li> order item missing </li>
        <li>received wrong item</li>
        <li>food was bad</li>
        <li>packaging problem</li>
        </ul></p>},

      ];
    }
    setMessages(list)
    setText("")
    setTimeout(()=>{
        document.querySelector('#copyright').scrollIntoView();
    },1);
  };
  const [modal,setModal]=useState(false);
  const toggle=()=>{
    setModal(!modal)

  }
  return (
    <div>
      <br></br>

      <br></br>
       <h3 className='heading' style={{marginLeft:'100px'}}>To use HelperBot please click the chatbot </h3>
        <button className='sbb' 
        style={{marginLeft:'680px',marginTop:'10px'}}
        onClick={toggle}>ChatBot</button>
        
      {modal && (
        <div className='all'>
        <div className="d-flex align-items-center justify-content-center mt-5">

          <h2 style={{ color: "orangered" }}>Customer Service</h2>

        </div>
        <div className="chat-message">
          {messages.length > 0 &&
            messages.map((data) => <ChatMessage {...data} />)}
          <div className="d-flex mt-2">
            <input
              type="text"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="primary" className="ms-3" style={{backgroundColor:"orangered",borderRadius:"20%"}} onClick={onSend}>
              Send
            </button>
            </div>
            <div id='copyright' className="mt-3" style={{paddingLeft:"210px",color:"orangered",fontSize:"20px"}}>Foodle
            </div>
            </div>

        </div>


      )}

    </div>
  );
}