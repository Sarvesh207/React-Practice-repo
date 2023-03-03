import React, { useState } from "react";

function Text(){
    let[inputText, setInputText] = useState("here")
   

    function updateInputText(event){
        const curInputValue = event.target.value;
        setInputText(curInputValue);
    }
    return(
        <div>
            <p>The value of text shown will be {inputText}</p>
            <input type="text" onChange={updateInputText}></input>
            
        </div>
    )
}

export default Text;