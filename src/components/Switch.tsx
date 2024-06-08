import { forwardRef} from 'react';
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

interface SwitchProps {
    checked: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, forwardRef) => {
  return (
    <label className='cursor-pointer'>
        <input type="checkbox" className='hidden' ref={forwardRef} {...props}/>
        <div className={`
            w-14 rounded-full
            ${props.checked ? "bg-primary": "bg-backdrop"}
            `}>
                <div className={`w-fit p-0.5 shadow-sm rounded-full transition-all duration-300 text-textBase 
                    ${
                        props.checked ?
                        "bg-white shadow translate-x-7 rotate-0":
                        "bg-primary shadow -rotate-90"

                    }`}>
                    {props.checked ? <CiLight className='text-primary' /> : <IoMoonOutline className='text-btnPrimaryText' />}
                </div>

        </div>
    </label>
  )
})

export default Switch