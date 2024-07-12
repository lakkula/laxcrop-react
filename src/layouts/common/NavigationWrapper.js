import React from 'react'
import LeftMenuLayout from './navigationWrapper/LeftMenuLayout'
import TopNavigationLayout from './navigationWrapper/TopNavigationLayout'

export default function NavigationWrapper({children}) {
  return (
    <div style={{display:'flex', padding:'20px'}}>
      <LeftMenuLayout/>
      <div style={{width:'100%'}}>
        <TopNavigationLayout/>
        <div style={{padding:'10px'}}>{children}</div>
      </div>
    </div>
  )
}
