import React from 'react'
import './Input.css'
const Input = props => {
  

    const element=
    props.element==='text'?<input  id={props.id} name={props.name} type="text" className={props.class} value={props.value} 
    onClick={props.onClick} required onBlur={props.blur}focused={props.focused} onChange={props.onChange}></input>:<textarea id={props.id} rows={props.row||20} value={props.value} onChange={props.onChange}></textarea>
      return (
        <div>
            <label htmlFor={props.label}>{props.label}</label><br/>
            {element}
        </div>
      )
}

export default Input
