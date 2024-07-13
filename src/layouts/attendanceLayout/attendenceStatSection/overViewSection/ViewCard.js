import React from 'react'
import CardIcon from '../../../../components/viewCard/CardIcon'
import CardDescription from '../../../../components/viewCard/CardDescription'
import CardValue from '../../../../components/viewCard/CardValue'
import CardWrapper from '../../../../components/viewCard/CardWrapper'

export default function ViewCard({icon, title, valInfo}) {
    const {value, valColor} = valInfo;
  return (
    <div>
        <CardWrapper>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', height:'100px'}}>
              <CardIcon icon={icon}/>
              <div style={{marginTop:'10px'}}>
                <CardDescription title={title}/>
              </div>
              <CardValue value={value} valColor={valColor}/>
            </div>
        </CardWrapper>  
    </div>
  )
}
