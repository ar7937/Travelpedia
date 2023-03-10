import React from 'react'
import PlaceItem from './PlaceItem'
const PlaceList = ({places}) => {
  if(places.length===0){
       <h3>No places found </h3>
  }
  return <ul>
    {places.map(place=>{
        return <PlaceItem key={place.id}
        id={place.id}
        name={place.name}
        image={place.image}
        place={place.place}
        infor={place.infor}
        />
    })}
  </ul>
}

export default PlaceList
