import React from 'react'
import './PlaceList.css'
import Button from '../../shared/Components/Button'

import Model from '../Components/Model'
import EditPlace from '../Components/EditPlace'
import DeleteModel from '../Components/DeleteModel'
import { useState } from 'react'

const PlaceItem = props => {

  const[openModel,setOpenModal]=useState(false)
  const[openEdit,setOpenEdit]=useState(false)
  const[openDelete,setOpenDelete]=useState(false)
const openModelbtn=()=>{
     setOpenModal(true)
}
const closeModel=()=>{
  setOpenModal(false)

}
const openEditBtn=()=>{
  setOpenEdit(true)
}
const closeEdit=()=>{
  setOpenEdit(false)
}
const deleteBtn=()=>{
  setOpenDelete(true)
}
const closedelete=()=>{
  setOpenDelete(false)
}
  return (
    <div className='div-placeitem'>
        <img src={props.image} alt={props.image}/>
      <h3>{props.name}</h3>
      <h4>{props.place}</h4>
      <p>{props.infor}</p>
      <ul>
      <li><Button info="View On Map" class="btn-info" openModel={openModelbtn}/></li>
      <li><Button info="Edit" class="btn-edit" openModel={openEditBtn}/></li>
      <li><Button info="Delete" class="btn-delete" openModel={deleteBtn}/></li>
      </ul>
      {openModel &&<Model closeModel={closeModel}><h3>View On Map</h3></Model>}
      {openEdit &&<EditPlace closeModel={closeEdit}><h3>Edit</h3></EditPlace>}
      {openDelete && <DeleteModel closeModel={closedelete}>
       <h4>Are you sure you want to delete</h4>
       <ul>
      <li><Button info="Cancel" class="btn-cancel" openModel={closedelete}/></li>
      <li><Button info="Delete" class="btn-delete" openModel={closedelete}/></li>
      </ul>
      
        </DeleteModel>}<br/>
        <h4>Published By:- {props.id}</h4>
    </div>
  )
}

export default PlaceItem
