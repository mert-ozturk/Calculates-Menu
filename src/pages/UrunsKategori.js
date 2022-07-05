import React from 'react'

const UrunsKategori = ({usd}) => {

  const UsdFiyat = ({points}) =>{
    return(
     <article> 
      <div> 
        <p> ${points}</p>
      </div>
     </article>
    )
  }
  return (
    <section> 
    <div className='title'>
      {usd.map((usde)=>{
        return (
        <UsdFiyat key={usde.points} {...usde}> </UsdFiyat>
        )
      })}
    </div>
    </section>
  )
}

export default UrunsKategori
