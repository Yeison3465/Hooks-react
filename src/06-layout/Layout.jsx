import React from 'react'
import { usefecht } from '../hooks/usefecht'
import { useCounter } from '../hooks/usecounter';
import { Pokemoncard } from '../03-example/Pokemoncard';
import { LoadingM } from '../03-example/LoadingM';

export const Layout = () => {
    const {increment, decrement , reset ,counter} = useCounter(1);
    const {data , haserror , isloading} = usefecht(`https://pokeapi.co/api/v2/pokemon/${counter}`);


    return (
        <>
            <h1>Nuevos pokemondes </h1>
            {
                isloading ? <LoadingM/>: <Pokemoncard id={counter} name={data.name} sprites={
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

