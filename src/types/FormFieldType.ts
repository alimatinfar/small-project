import {DeepRequired, FieldError, FieldErrorsImpl, Merge} from "react-hook-form";

export type FormFieldType = {
  register?: (name: string, options: object) => void,
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}