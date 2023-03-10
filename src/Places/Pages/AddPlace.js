import React from 'react'
import Form from '../Components/Form'
import './AddPlace.css'
const AddPlace = () => {
  return (
    <div className='div-addPlace'>
        <h3>Add New Place</h3>
      <Form errortext="Add Valid UserName"/>
    </div>
  )
}

export default AddPlace
