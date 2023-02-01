import React from 'react'
import cn from 'classnames';
const Button = ({buttonText,className,...others}) => {
  return (
    <button className={cn(className,"p-2 rounded-md mt-4")} {...others}>{buttonText}</button>
  )
}

export default Button