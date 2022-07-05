import React, { useState } from 'react'

function Form() {

const Contant = () => {
    const [name,setName] = useState ('');
    const [email,setEmail] = useState ('');
    const [person,setPerson] = useState ([]);

    const handleSubmit = (e) =>{
        e.preventDefault()
    if(name && email ){
        const list = {id:new Date().getTime().toString(),name,email}
     setPerson((person)=>{
         return [...person,list]
     })   
     setName('')
     setEmail('')
    }else{
        console.log('eksik girdin ')
    }
    }
    return(
        <> 
        <article> 
        <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label> 
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
        <label htmlFor='email'>Email:</label> 
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button value='submit'> Gönder </button> 
        </form>
        </article>
        {
            person.map((list,index)=>{
                const {id,name,email} = list
            return (
                <div> 
                <h4>Id: {id} </h4>
                <p>Email: {email}</p>
                <h4>Name: {name}</h4>
                </div>
            )
            })
        }
        </>
    )
    }


  return (
    <div>
    <h2>Form Kayıtları</h2>
      <Contant />
    </div>
  )
}

export default Form
