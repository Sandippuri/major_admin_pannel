import React from 'react'
import cn from 'classnames';
const Button = ({buttonText,className,...others}) => {
  return (
    <button className={cn(className,"btn")} {...others}>{buttonText}</button>
  )
}

export default Button