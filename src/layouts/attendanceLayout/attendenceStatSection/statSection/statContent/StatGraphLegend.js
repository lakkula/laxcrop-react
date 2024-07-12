import React from 'react'
import SingleLegend from './statGraphLegend/SingleLegend';

const statLegend = [
  {
    color:'green',
    value:'1,031',
    title:'on time',
  },
  {
    color:'yellow',
    value:'191',
    title:'work from home',
  },
  {
    color:'red',
    value:'212',
    title:'late attendance',
  },
  {
    color:'gray',
    value:'66',
    title:'absent',
  },
];

export default function StatGraphLegend() {
  return (
    <div>
      {statLegend.map((val, key) => {
        const {color, value, title} = val;
        return <SingleLegend key={key} color={color} value={value} title={title}/>
      })}   
    </div>
  )
}
