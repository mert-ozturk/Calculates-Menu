import React from 'react'
import './urunler.css'




const UrunKategori = ({menus}) => {
  const Urunler = ({id,name,info,image,price}) => {
 
    return (
      <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
         {info}
        </p>
      </footer>
    </article>
    )
  }
  
  return (
    <section>
        <div className='title'>
        {menus.map((menu)=>{
            return <Urunler key={menu.id} {...menu}> </Urunler>
        })}
        </div>
      </section>
  )
}

export default UrunKategori
