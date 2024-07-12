import React, {Children} from 'react'

export default function TitleAndContentWrapper({children}) {
    let firstChild, secondChild;

    Children.forEach(children, (child) => {
        if (child.props.slot === 'first'){
            firstChild = child;
        }else{
            secondChild = child;
        }
    })
    
  return (
    <div style={{boxShadow:'2px 2px 4px rgba(0,0,0,0.5)', padding:'10px'}}>
        <div style={{marginBottom:'15px'}}>
            {firstChild}
        </div>
        <hr/>
        <div style={{marginTop:'15px'}}>
        {secondChild}
        </div>       
    </div>
  )
}
