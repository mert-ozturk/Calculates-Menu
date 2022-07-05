import React, { useEffect, useState } from 'react'
import UrunKategori from './UrunKategori';



const url='https://course-api.com/react-tours-project'

const UrunApi = () => {
    const [menus,setMenus] = useState ([]);
    
    const fetchMenus = async () => {
        const response = await fetch(url)
        const menus = await response.json();
        setMenus(menus);
    }
useEffect(()=>{
    fetchMenus();
},[])

  return (
    <main>
      <UrunKategori menus={menus} />
    </main>
  )
}

export default UrunApi
