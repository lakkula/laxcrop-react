import React from 'react'
import StatGraphLegend from './statContent/StatGraphLegend'
import StatGraph from '../../../../components/statContent/StatGraph'
import StatDescription from '../../../../components/statContent/StatDescription'

export default function StatContent() {
  return (
    <div style={{display:'flex'}}>
      <div>
        <StatGraphLegend/>
        <div style={{marginTop:'30px'}}>
          <StatDescription/>
        </div>
      </div>
      <StatGraph/>
    </div>
  )
}
