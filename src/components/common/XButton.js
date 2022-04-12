import React from 'react'
import TextBlock from './TextBlock'

export default function XButton(props) {
  const style = {
    borderCardStyle: {margin: 0, padding: '3px 8px', cursor: 'pointer', boxShadow: 'none'},
    textStyle: {margin: 0}
  }
  if (props.style) {
    if (props.style.div) 
      style.borderCardStyle = {...style.borderCardStyle, ...props.style.div}
    if (props.style.text) 
      style.textStyle = {...style.textStyle, ...props.style.text}
  }
  
    return (
    <TextBlock onClick={props.onClick} borderCardStyle={style.borderCardStyle} textStyle={style.textStyle} onRemove={()=>{}}/>
  )
}
