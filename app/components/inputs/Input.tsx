import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  disabled?: boolean;
  type?: string;
  formatPrice?: boolean;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const Input: React.FC<InputProps> = ({
  id,
  label,
  disabled,
  type = "text",
  register,
  formatPrice,
  required,
  errors,
}) => {
  return (
    <div className=" w-full relative">
      {formatPrice && <BiDollar size={24} className=" absolute top-5 left-2" />}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}

        className={`
            peer
            transition
            w-full
            p-4
            pt-6
            font-light
            bg-white           
            rounded-md
            outline-none
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${formatPrice ? 'pl-9' : 'pl-4'}    
            border-2       
            ${errors[id]? 'border-red-500':'border-neutral-300' }
            ${errors[id]? 'forcus:border-red-500':'forcus:border-black' } 
        
        `}
      />
      <label className={`
            absolute
            text-md
            duration-150
            transform
            -translate-y-3           
            z-10
            origin-[0] 
            top-5
            ${formatPrice ? 'left-9' : 'left-4'}   
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id]?'border-red-500' : 'border-zinc-400' }

           

 

      
      `}>
        {label}
      </label>
    </div>
  );
};

export default Input;
