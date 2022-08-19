import Typography from "../Typography/Typography";
import {FieldError, FieldErrorsImpl, Merge} from "react-hook-form";

type Props = {
  label?: string,
  value?: string | number,
  defaultValue?: string | number,
  placeholder?: string,
  register?: (name: string, options: object) => void,
  name?: string,
  options?: object,
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

function Input({label, value, defaultValue, placeholder, register, name, options, errorMessage}: Props) {

  const inputClassName = `py-3 px-4 rounded w-full outline-none duration-300
   border border-gray-200 hover:border-gray-300 focus:border-gray-400`

  return (
    <>
      <div className='relative w-full mb-0.5'>
        <label className='absolute top-0 right-3 z-10 -translate-y-1/2 px-2 bg-white'>
          <Typography size='sm' className='text-gray-500'>
            {label}
          </Typography>
        </label>
        <input
          {...(register ? register(name!, options!) : {})}
          {...(value && {value: value})}
          autoComplete="off"
          {...(defaultValue && {defaultValue: defaultValue})}
          placeholder={placeholder}
          className={inputClassName}
        />
      </div>
      {errorMessage && (
        <Typography size='xs' className='text-red-500'>
          {errorMessage.toString()}
        </Typography>
      )}
    </>
  );
}

export default Input;