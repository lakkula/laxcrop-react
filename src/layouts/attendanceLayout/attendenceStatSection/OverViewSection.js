import React from 'react'
import ViewCard from './overViewSection/ViewCard'

const firstRow = [
  {
    icon:'icon',
    title:'Average hours',
    valInfo: {
      value:'7h 17mins',
      valColor:'black',
    },
  },
  {
    icon:'icon',
    title:'Average check-in',
    valInfo: {
      value:'10:33 AM',
      valColor:'black',
    },
  },
];

const secondRow = [
  {
    icon:'icon',
    title:'On-time arrival',
    valInfo: {
      value:'98.56%',
      valColor:'green',
    },
  },
  {
    icon:'icon',
    title:'Average check-out',
    valInfo: {
      value:'19:12 PM',
      valColor:'black',
    },
  },
];

export default function OverViewSection() {
  return (
    <div style={{}}>
      <div style={{display:'flex', gap:'20px', marginBottom:'20px'}}>
        {firstRow.map((val, key) => {
          const {icon, title, valInfo} = val;
          return <ViewCard key={key} icon={icon} title={title} valInfo={valInfo}/>
        })}
      </div>
      <div style={{display:'flex', gap:'20px'}}>
        {secondRow.map((val, key) => {
          const {icon, title, valInfo} = val;
          return <ViewCard key={key} icon={icon} title={title} valInfo={valInfo}/>
        })}
      </div>
    </div>
  )
}
