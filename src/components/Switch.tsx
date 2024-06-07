import { forwardRef} from 'react';
import { CiLight } from "react-icons/ci";
import { MdModeNight } from "react-icons/md";

interface SwitchProps {
    checked: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, forwardRef) => {
  return (
    <label className='cursor-pointer'>
        <input type="checkbox" className='hidden' ref={forwardRef} {...props}/>
        <div className={`
            w-14 p-1 rounded-full
            ${props.checked ? "bg-blue-500": "bg-gray-300"}
            `}>
                <div className={`w-fit p-0.5 shadow-sm rounded-full transition-all duration-300 text-white 
                    ${
                        props.checked ?
                        "bg-white translate-x-6 rotate-0":
                        "bg-gray-500 -rotate-180"

                    }`}>
                    {props.checked ? <CiLight className='text-yellow-500' /> : <MdModeNight />}
                </div>

        </div>
    </label>
  )
})

export default Switch