"use client";
import React, { useCallback, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";

import { toast } from "react-hot-toast";
import Button from "../Button";

import { FcGoogle } from "react-icons/fc";
import { AiFillAlert, AiFillGithub } from "react-icons/ai";
/* type FormData ={
    'name':string, 'email': string
} */
const RegisterModal = () => {
  //# INIT STATE==========
  const [isLoading, setIsLoading] = useState(false);
  //# STORE ==============
  const registerModal = useRegisterModal();
  //# ====================
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  //# ONSUBMIT ==============
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    //..........API ........................
    axios
      .post("api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log("tost:::::::::::::::::::::::::::");
        toast.error("Somthing wont wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //.....................................

  //# Body ============
  const onToggle = useCallback(() => {
    registerModal.onClose();
  }, [registerModal]);

  const bodyContent = (
    <div className="
        flex 
        flex-col 
        gap-4
    ">
      <Heading title="Welcome to Airbnb" subtitle="Create your account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  //# ======= FOOTER=====

  const footerContent = (
    <div className=" 
                flex
                flex-col 
                w-full 
                gap-4 
                mt-3            
    ">
      <Button
        outline
        label=" Continue with Google"
        disabled={isLoading}
        onClick={() => {}}
        icon={FcGoogle}
      />
      <Button
        outline
        label=" Continue with Github"
        disabled={isLoading}
        onClick={() => {}}
        icon={AiFillGithub}
      />
      <div
        className="
                text-neutral-500 
                text-center 
                my-4 
                font-light
            "
      >
        <p>
          Already have an account?
          <span
            className="
            mx-1
            font-bold 
            cursor-pointer  
            hover:underline"
            onClick={onToggle}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
  //# ===================
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
