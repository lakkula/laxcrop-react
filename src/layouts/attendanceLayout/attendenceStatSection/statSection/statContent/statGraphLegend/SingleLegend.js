import React from 'react'
import SingleLegendBox from '../../../../../../components/singleLegend/SingleLegendBox'
import LegendValue from '../../../../../../components/singleLegend/LegendValue'

export default function SingleLegend({color, value, title}) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <SingleLegendBox color={color}/>
        <LegendValue value={value} title={title}/>
    </div>
  )
}
