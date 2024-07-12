import React from 'react'
import NavItemList from './topNavigationLayout/NavItemList'
import SearchBar from './topNavigationLayout/SearchBar'
import NotificationSection from './topNavigationLayout/NotificationSection'
import ProfileSection from './topNavigationLayout/ProfileSection'

export default function TopNavigationLayout() {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <NavItemList/>
      <div style={{display:'flex', gap:'20px'}}>
        <SearchBar/>
        <NotificationSection/>
        <ProfileSection/>
      </div>
    </div>
  )
}
