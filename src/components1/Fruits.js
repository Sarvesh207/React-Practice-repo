import React, { useState } from "react";

function Fruits(){
    const[Fruit, setFruit] = useState("Apple");

    // function UpdateFruit(Fruit){
    //     setFruit(Fruit);
    // }

    const UpdateFruit = (Fruit) =>{
        setFruit(Fruit);
    }
    return (
        <div>
            <p>The value of fruit is {Fruit}</p>
            <button onClick={()=>setFruit('Papaya')}>Papaya</button>
            <button onClick={()=>setFruit('Mango')}>Mango</button>
            <button onClick={()=>UpdateFruit('Banana')}>Banana</button>
        </div>
    )
}

export default Fruits;