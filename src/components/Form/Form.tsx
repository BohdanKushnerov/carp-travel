'use client';

import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import SvgIcon from '../SvgIcon';

const textRegExp =
  /^[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+([-']?[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+)\s[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+([-']?[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+)$/;

const phoneRegExp = /^380\d{9}$/;

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

type FieldName = 'fullName' | 'email' | 'position' | 'phone';

const formFields: {
  name: FieldName;
  label: string;
  type: string;
  placeholder: string;
  pattern: {
    value: RegExp;
    message: string;
  };
  requiredMessage?: string;
}[] = [
  {
    name: 'fullName',
    label: 'Full name',
    type: 'text',
    placeholder: 'John Smith',
    pattern: {
      value: textRegExp,
      message: 'Incorrect name',
    },
    requiredMessage: 'Name is required',
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'johnsmith@email.com',
    pattern: {
      value: emailRegExp,
      message: 'Invalid email',
    },
    requiredMessage: 'Email is required',
  },
  {
    name: 'position',
    label: 'Position',
    type: 'text',
    placeholder: 'Movie maker',
    pattern: {
      value: textRegExp,
      message: 'Invalid position',
    },
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '+ 38 (097) 12 34 567',
    pattern: {
      value: phoneRegExp,
      message: 'Incorrect Phone',
    },
    requiredMessage: 'Phone is required',
  },
];

interface IContactForm {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IContactForm>({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      position: '',
      phone: '',
      message: '',
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      localStorage.removeItem('contactFormValues');
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    const storedValues = JSON.parse(
      localStorage.getItem('contactFormValues') || '{}'
    );
    Object.keys(storedValues).forEach(key => {
      setValue(key as keyof IContactForm, storedValues[key]);
    });
  }, [setValue]);

  const handleChange = () => {
    localStorage.setItem('contactFormValues', JSON.stringify(getValues()));
  };

  const onSubmit: SubmitHandler<IContactForm> = data => {
    console.log('data sended', data);
  };

  return (
    <form
      className="flex flex-col gap-4"
      action="/path"
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleChange}
    >
      {/*  */}
      {formFields.map(field => (
        <label key={field.name} htmlFor={field.name}>
          <span className="mb-1 block text-[12px] leading-[200%] tracking-[0.2em]">
            {field.label}
          </span>
          {/*  */}
          <input
            className="h-[24px] w-full border-white bg-input px-[8px] py-[6px] text-[20px] leading-[120%] outline-none focus:border"
            {...register(field.name, {
              pattern: field.pattern,
              required: field.requiredMessage,
            })}
            type={field.type}
            id={field.name}
            placeholder={field.placeholder}
          />
          {/* <p>{errors}</p> */}
        </label>
      ))}
      <label htmlFor="message">
        <span className="mb-1 block text-[12px] leading-[200%] tracking-[0.2em]">
          Message
        </span>
        <textarea
          className="h-[196px] w-full bg-input px-[8px] py-[6px]"
          {...register('message')}
          id="message"
          name="message"
          cols={30}
          rows={10}
          // placeholder="Your message"
        />
      </label>

      <label htmlFor="checkbox" className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          name="confirm"
          id="checkbox"
          className="peer hidden"
        />

        <SvgIcon
          height={24}
          width={24}
          iconPath="/sprite.svg#icon-checkbox"
          className="peer-checked:hidden"
        />

        <SvgIcon
          height={24}
          width={24}
          iconPath="/sprite.svg#icon-checkbox-checked"
          className="hidden peer-checked:block"
        />

        <span className="ml-2 text-[12px] leading-[183%]">
          I confirm my consent to the processing of personal data.
        </span>
      </label>

      {/* */}
      <button
        className="ml-auto w-[82px] text-[30px] font-medium"
        type="submit"
      >
        SEND
      </button>
    </form>
  );
};

export default Form;
