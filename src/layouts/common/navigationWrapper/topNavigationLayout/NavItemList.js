import React from 'react'
import SingleNavItem from '../../../../components/navItemList/SingleNavItem'

const navItems = ['Dashboard', 'Leave', 'Attendance', 'performance'];

export default function NavItemList() {
  return (
    <div  style={{display:'flex', gap:'30px', padding:'0px 40px'}}>
      {navItems.map((val, key) => {
        return <SingleNavItem key={key} title={val }/>
      })}
      
    </div>
  )
}
