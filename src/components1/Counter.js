import React, { useState } from "react";

function Counter(){
    // let count = 0;
    const[count, setCount]= useState(0)
    function updateCount(){
        // count++;
        setCount(count+1);
        console.log('Clicked',count);
    }
    return(
        <div>
            <p>The value of count :{count}</p>
            <button onClick={updateCount}>Increment</button>
        </div>
    )
}
export default Counter;