import Input from "../../UI/Input/Input";
import {FormFieldType} from "../../../types/FormFieldType";

function PasswordField({register, errorMessage}: FormFieldType) {
  return (
    <Input
      register={register}
      errorMessage={errorMessage}
      name='password'
      label='رمز عبور'
      options={{
        required: {
          value: true,
          message: "این فیلد اجباریست"
        },
        minLength: {
          value: 8,
          message: "باید حداقل 8 کاراکتر باشد"
        },
      }}
    />
  );
}

export default PasswordField;