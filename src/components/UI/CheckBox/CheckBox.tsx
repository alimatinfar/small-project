import {useEffect, useState} from "react";
import CheckIcon from "../../svg/CheckIcon";
import Typography from "../Typography/Typography";

type Props = {
  text?: string;
  className?: string;
  id?: string;
  initialValue?: boolean
}

function CheckBox ({text, className, initialValue = false, id = "checkbox1"}: Props) {
  const [isChecked, setIsChecked] = useState(false);


  const CheckHandler = function () {
    setIsChecked((perv) => !perv);
  };

  useEffect(() => {
    setIsChecked(initialValue)
  }, [initialValue]);


  return (
    <label
      htmlFor={id}
      className={`flex items-center  ${className || "mt-4"}`}
    >
      <div
        onClick={CheckHandler}
        className={`w-5 h-5 box-border  border-2  rounded-md select-none cursor-pointer transition-all m-1
         flex items-center justify-center duration-200 overflow-hidden border-primary ${
          isChecked ? "bg-primary" : "bg-white"
        }`}>
        <div
          className={`w-full h-full transition-all flex items-center rounded-sm justify-center delay-100  ${
            isChecked ? "scale-125" : "scale-x-0"
          }`}
        >
          <CheckIcon className="fill-white"/>
        </div>
      </div>
      <Typography size={"sm"}>
        {text}
      </Typography>
    </label>
  );
};
export default CheckBox;
