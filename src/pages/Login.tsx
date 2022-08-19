import Button from "../components/UI/Button/Button";
import Typography from "../components/UI/Typography/Typography";
import {useForm} from "react-hook-form";
import UserNameField from "../components/pages/Login/UserNameField";
import PasswordField from "../components/pages/Login/PasswordField";
import Ls from "../utils/localStorage";
import {useNavigate} from "react-router";


function Login({}) {

  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const navigate = useNavigate()

  function onSubmit(data: any) {
    Ls.add('userInfo', data)
    navigate('/')
  }

  return (
    <div className='flex-center h-screen w-screen'>
      <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col justify-between items-center w-[30rem] h-3/4 shadow bg-white p-20'>
        <Typography>
          ورود به حساب کاربری
        </Typography>

        <div className='w-full'>

          <div className='mb-5'>
            <UserNameField register={register} errorMessage={errors?.username?.message}/>
          </div>

          <PasswordField register={register} errorMessage={errors?.password?.message}/>

        </div>

        <Button size='full'>
          ورود
        </Button>
      </form>
    </div>
  );
}

export default Login;