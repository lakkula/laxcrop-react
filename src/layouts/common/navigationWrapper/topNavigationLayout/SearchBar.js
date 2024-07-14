import React from 'react'

export default function SearchBar() {
  return (
    <div>
      <input
        type='text'
        placeholder='Search anything'
        style={{
          border:'none',
          backgroundColor:'lightgray',
          borderRadius:'10px',
        }}
      />
    </div>
  )
}
