import React from 'react';
import Typography, {TypographySizeTypes} from "./UI/Typography/Typography";

type Props = {
  title: string;
  value: string | number;
  titleSize?: TypographySizeTypes;
  valueSize?: TypographySizeTypes;
  direction?: 'rtl' | 'ltr';
}

function KeyValue({title, value, titleSize='sm', valueSize='md', direction='rtl'}: Props) {

  const ltr = direction === 'ltr'

  return (
    <div className={`flex ${ltr && 'ltr'}`}>
      <Typography size={titleSize} className='text-gray-400'>{`${title} : `}</Typography>
      <Typography size={valueSize} className={`flex-1 ${ltr ? 'ml-2' : 'mr-2'}`}>{value}</Typography>
    </div>
  );
}

export default KeyValue;