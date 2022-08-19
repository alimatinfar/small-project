import Input from "../../UI/Input/Input";
import {FormFieldType} from "../../../Types/FormFieldType";

function UserNameField({register, errorMessage}: FormFieldType) {
  return (
    <Input
      register={register}
      errorMessage={errorMessage}
      name='username'
      label='نام کاربری'
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

export default UserNameField;