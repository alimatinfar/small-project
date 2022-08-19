import useTypographySizes from "./hooks/useTypographySizes";
import {ReactNode} from "react";

type SizeTypes = 'xs' | 'sm' | 'md'| 'lg'| 'xl'

type Props = {
  size?: SizeTypes,
  className?: string,
  children: ReactNode
}

function Typography({size = 'xl', className, children}: Props) {
  const sizes = useTypographySizes()

  return (
    <p className={`${sizes[size]} ${className}`}>
      {children}
    </p>
  );
}

export default Typography;