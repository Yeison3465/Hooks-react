import { useState } from "react"


export const Counter = ()=>{
    
    const [Counter,setCounter] = useState (0);

    const handleAdd = () =>{
        setCounter(Counter + 1 ); 
    }

    const resta = () =>{
        
        setCounter(Counter - 1);
    }

    const reset = () =>{
        setCounter( Counter == 1);
    }


    return(
        <> 
        <h1>Counter APP {Counter}</h1>
        <h1>Counter: {Counter}</h1>
        <h2>{Counter}</h2>
        <button onClick={handleAdd}> +1</button>
        <button onClick={resta}>-1</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}

