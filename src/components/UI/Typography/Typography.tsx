import useTypographySizes from "../../../hooks/components/Typography/useTypographySizes";
import {ReactNode} from "react";

export type TypographySizeTypes = 'xs' | 'sm' | 'md'| 'lg'| 'xl'

type Props = {
  size?: TypographySizeTypes,
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