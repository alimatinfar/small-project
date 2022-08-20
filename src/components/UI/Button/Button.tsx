import React, {ReactNode} from 'react';
import useButtonTypes from "./hooks/useButtonTypes";
import useButtonSizes from "./hooks/useButtonSizes";

type ButtonTypes = 'primary' | 'primaryOutline'
type ButtonSizes = 'md' | 'lg' | 'full'

type Props = {
  type?: ButtonTypes,
  size?: ButtonSizes,
  onClick?: (event: any) => void,
  children: ReactNode
}

function Button({type='primary', size='md', onClick, children}: Props) {
  const types = useButtonTypes()
  const sizes = useButtonSizes()

  const customClass = `${types[type]} ${sizes[size]}`

  return (
    <button
      {...onClick ? {onClick: onClick} : {} }
      className={`rounded text-center duration-300 ${customClass}`}>
      {children}
    </button>
  );
}

export default Button;