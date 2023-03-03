import React, { useState } from "react";


function Display(){
    let[word, setWord] = useState("")
    let [currName, setName] = useState("")

    function updateCard(event){
        setWord(currName)
        console.log(currName);
    }

    function updateWord(event){
        let value = event.target.value;
        // console.log(value);
        setName(value);

    }

    return (
        <div>
            <input type="text" onChange={updateWord}></input>
            <button onClick={updateWord}>Add</button>
        </div>
    )
}
export default Display;