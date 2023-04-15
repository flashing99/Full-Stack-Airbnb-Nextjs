"use client";
import React, { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen = true,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled = false,
  secondaryAction,
  secondaryActionLabel,
}) => {
  //...................
  const [showModal, setShowModal] = useState(isOpen);
  //...................
  useEffect(() => {
    return setShowModal(isOpen);
  }, [isOpen]);

  //....... onClose ............
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  //........ onSubmit ...........

  const handlOnSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  //...................
  const handlSecendaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [secondaryAction, disabled]);
  //...................
  return (
    <div
      className="
      justify-center 
      items-center 
      flex 
      overflow-x-hidden 
      overflow-y-auto 
      fixed 
      inset-0 
      z-50 
      outline-none 
      focus:outline-none
      bg-neutral-800/70      
      "
    >
      <div
        className="
        relative
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto
        h-full
        md:h-auto
        lg:h-auto    
      "
      >
        {/*content*/}
        <div
          className={`
          translate
          duration-300
          h-full
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
          `}
        >
          <div
            className="
              flex
              flex-col
              relative
              translate
              w-full
              h-full 
              lg:h-auto
              md:l-auto                            
              bg-white
              rounded-lg
              outline-none
              focus:outline-none
              border-0
              shadow-lg              
          "
          >
            {/*.......header.......*/}
            <div
              className="
                  flex
                  items-center
                  justify-center
                  rounded-t
                  border-b-[1px]                 
                  p-6
                  relative
                  mb-3             
             "
            >
              {/* ....... button........ */}
              <button
                className="
                      p-1
                      border-0
                      absolute
                      left-9
                      transition
                      hover:opacity-70
                      "
                onClick={handleClose}
              >
                <IoMdClose size={18} />
              </button>
              <div
                className="
                    text-lg
                    font-semibold
                    "
              >
                {title}
              </div>
            </div>

            {/*.......body.......*/}
            <div
              className="
                  flex
                  flex-auto
                  p-6            
             "
            >
              {body}
            </div>

            {/*.......FOOTER..........*/}
            <div
              className="
                  flex
                  flex-col
                  gap-2
                  p-6            
             "
            >
              <div
                className="
                  flex
                  flex-row                  
                  items-center                   
                  gap-4
                  w-full
              "
              >
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    /*icon={IoMdClose} */
                    label={secondaryActionLabel}
                    disabled={disabled}
                    onClick={secondaryAction}
                  />
                )}
                <Button
                  /*icon={IoMdClose} */
                  label={actionLabel}
                  disabled={disabled}
                  onClick={handlOnSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
