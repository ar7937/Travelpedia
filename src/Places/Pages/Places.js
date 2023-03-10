import React from 'react'
import PlaceList from '../Components/PlaceList'
import { useParams } from 'react-router-dom'
const places=[
    {
        id:"user1",
        name:"17 mile drive",
        place:"Los Angelos,Calforina",
        image:"https://s20426.pcdn.co/wp-content/uploads/2018/03/iStock-638564576-1900x1178.jpg",
        infor:"The scenery-saturated 17-Mile Drive in Pebble Beach is stomach-dropping.Coastal cliffs rising from the sea. White sandy beaches kissing the surf. A sea of sand dunes that disappears into a majestic forest full of whimsical cypress and towering pines. Deer graze carefree, birds soar overhead and marine mammals bark from just offshore Land and sea meet splendidly here, with jutting rocks, hanging fog, shrieking gulls and sometimes backstroking sea otters,” observes The Los Angeles Times.But no description can properly place you on 17-Mile Drive. Here are 17 photos — or 17,000 words — that capture a sliver of the bountiful beauty along 17-Mile Drive",
        
        

    }
    
    ,{
        id:"user2",
        name:"The Golden Ring",
        place:"Vladimir,Russia",
        image:"https://globalgrasshopper.com/wp-content/uploads/2017/01/Russia-1000x563.jpg",
        infor:"The Golden Ring is a series of cities that are considered the foundation of Russia’s formation and culture. For travellers especially interested in Russian history, a trip through some of these wonderful cities is a must-see in Russian A few good ones, to begin with, are Yaroslavl, Vladimir, and Suzdal Many of the sites within these cities are UNESCO protected because of their value not only to Russian history but to world history in general. Many of the structures date back to medieval times and beyond, so visitors to the area can get an experience of what life was like long ago. If you visit any cities in the Golden Ring, be sure to tour a few museums and monasteries as well. ",
        
    },{
        id:"user2",
        name:"Mount Batur",
        place:"Bali,Indonesia",
        image:"https://www.intrepidtravel.com/adventures/wp-content/uploads/2016/04/indonesia_bali_mount-batur.jpg",
        infor:"This sacred active volcano lies in Kintamani District in Bali's central highlands, about an hour's drive from Ubud. The hike, along well-marked trails, is relatively easy and usually takes about two to three hours. Guided treks typically include a picnic breakfast, with eggs cooked by the steam from the active volcano. On a clear day, the views are spectacular, stretching all the way across the Batur caldera; the surrounding mountain range; and beautiful Lake Batur, the island's main source of irrigation water.  Sturdy hiking shoes are essential, and it's advisable to wear layers, as the temperature can be cool before sunrise. ",
    }
]
const Places = () => {
    let userId  = useParams().id;
    let loaded=places.filter(place=>place.id===userId)
    
  return(
<div>
 <PlaceList places={loaded}/>
 

  </div>
  )
  
  
}

export default Places
