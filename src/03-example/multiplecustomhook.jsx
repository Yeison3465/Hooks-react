import React from 'react'
import { usefecht } from '../hooks/usefecht'
import { useCounter } from '../hooks/usecounter';
import { LoadingM } from './LoadingM';
import { Pokemoncard } from './Pokemoncard';

export const Multiplecustomhook = () => {
    const {increment, decrement , reset ,counter} = useCounter(1);
    const {data , haserror , isloading} = usefecht(`https://pokeapi.co/api/v2/pokemon/${counter}`);


    return (
        <>
            <h1>Nuevos pokemondes </h1>
            {
                isloading ? <LoadingM></LoadingM> : <Pokemoncard id={counter} name={data.name} sprites={
                    [
                        data.sprites.front_default, data.sprites.back_default , data.sprites.back_default, data.sprites.back_shiny
                    ]
                } />
            }
            <button onClick={() => counter > 1 ? decrement() : null}>Decrementar</button>
            <button onClick={() => increment()}>Incrementar</button>
            
        </>
    )
}

