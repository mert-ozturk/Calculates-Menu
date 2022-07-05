import React, { useState } from 'react'

function Grocery() {

  const ControlledInputs = () => {

 
    const [people,setPeople] = useState ([  ])
    const [person,setPerson] = useState ({firstName:'',email:'',age:''})
     const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({...person,[name]:value})
     }

     const handleSubmit = (e) => {
       e.preventDefault()
       if(person.firstName && person.email && person.age){
        const newPerson = {...person,id: new Date().getTime().toString()}
        setPeople([...people,newPerson])
        setPerson({firstName:'',email:'',age:''})
       }
     }
    return (
      <> 
      <article> 
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'> 
          <label htmlFor='firstName'>Name: </label>
          <input 
          type='text' 
          id='firstName' 
          name='firstName' 
          value={person.firstName} 
          onChange={handleChange} /> 
          <label htmlFor='email'>Email: </label>
          <input 
          type='text' 
          id='email' 
          name='email' 
          value={person.email} 
          onChange={handleChange} /> 
         
          <label htmlFor='email'>Age: </label>
          <input 
          type='number' 
          id='age' 
          name='age' 
          value={person.age} 
          onChange={handleChange} /> 
           </div>
          <button type='submit' onClick={handleSubmit}>Add Person</button>
        </form>
        {
          people.map((person,index)=>{
            const {id,firstName,email} = person
            return( 
            <div className="item" key={id}> 
            <p> {id} </p>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>)
          })
        }
      </article>
      </>
    )
  }
  
      return (
      <div className='container'>
        <h2>Forms</h2> 
        <ControlledInputs />
      </div>
    )
  }
export default Grocery
