import { useState } from 'react';

export const Counter2 = () => {
    const [Stade, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30,

    });

    const {counter1, counter2, counter3} = Stade;
    

    return (
        <>
            <h1>Counter: {counter1}</h1>
            <h1>Counter2: {counter2}</h1>
            <h1>Counter3: {counter3}</h1>
            
            <button onClick={() => setCounter({
                ...Stade,
                counter1:counter1 + 1,
                
            })}>+1</button>
        </>
    );
}
