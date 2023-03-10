import React from 'react'
import Input from '../../shared/Components/Input'
import Button from '../../shared/Components/Button'
import './Form.css'
import { useState } from 'react'
 
const Form = props => {
  const [name,setName]=useState('')
  const [city,setCity]=useState('')
  const [textarea,settextarea]=useState('')
 const [touch,setTouched]=useState(true)
 const [touchcity,setTouchedcit]=useState(true)
 const messgaeName=" Place Name is required"
 const messgaeCity="Place Location is required "
  const onsubmit=(e)=>{
    e.preventDefault()
    setTouched(true)
    setTouchedcit(true)
    setCity('')
    setName('')
settextarea('')
    
  }
  const blurname=()=>{
 setTouched(false)
 
  }
  const blurCity=()=>{
    setTouchedcit(false)
  }
  return (
    <div>
      <form onSubmit={onsubmit}>
        <Input element="text" blur={blurname} class={`addPlace`} label="Add new place" value={name} onChange={(e)=>setName(e.target.value)} /><br/>{/* THIS ONE IS A VALID COMMENT */}
     {!touch && name.length===0 ? <p className='message'>{messgaeName}</p>:""}  
        <Input element="text" blur={blurCity} class={'addPlace'} label="Add new place" value={city} onChange={(e)=>setCity(e.target.value)} /><br/>{/* THIS ONE IS A VALID COMMENT */}
      {!touchcity && city.length===0 ?<p className='message'>{messgaeCity}</p>:""} 
        <Input element="textarea"  label="Add description" value={textarea}onChange={(e)=>settextarea(e.target.value)} />
        <Button info="Add Place" class={`btn-submit ${name.length>0 && city.length>0 ?'btn-submit-correct':'btn-submit'}`}/>
      </form>
    </div>
  )
}

export default Form
