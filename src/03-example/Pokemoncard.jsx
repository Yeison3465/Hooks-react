import React from 'react'

export const Pokemoncard = ({id,name,sprites=[]}) => {
  return (
    <section>
        <h2>#{id} - {name}</h2>
        <div>
            {
                sprites.map(sprites =>(
                    <img key={sprites} src={sprites} alt={name}/>
                ))
            }
        </div>
    </section>
  )
}
