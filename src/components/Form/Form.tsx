'use client';

import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import SvgIcon from '../SvgIcon';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputMask } from '@react-input/mask';
import clsx from 'clsx';

const textRegExp =
  /^[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+([-']?[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+)\s[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+([-']?[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+)$/;

// const phoneRegExp = /^\+380\d{9}$/;
const phoneRegExp = /^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/;

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

type FieldName = 'fullName' | 'email' | 'position' | 'phone' | 'message';

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
    placeholder: '(097) 12 34 567',
    pattern: {
      value: phoneRegExp,
      message: 'Incorrect Phone',
    },
    requiredMessage: 'Phone is required',
  },
];

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: 'Name is required' })
    .regex(textRegExp, { message: 'Incorrect name' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .regex(emailRegExp, { message: 'Invalid email' }),
  position: z.string().optional(),
  phone: z
    .string()
    .min(1, { message: 'Phone is required' })
    .regex(phoneRegExp, { message: 'Incorrect Phone' }),
  message: z.string().optional(),
  checkbox: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    watch,
    formState: { isSubmitSuccessful, errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      position: '',
      phone: '',
      message: '',
      checkbox: false,
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      localStorage.removeItem('contactFormValues');
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValues = JSON.parse(
        localStorage.getItem('contactFormValues') || '{}'
      );

      Object.keys(storedValues).forEach(key => {
        if (key === 'checkbox') return;
        setValue(key as keyof FormValues, storedValues[key]);
      });
    }
  }, [setValue]);

  const phone = watch('phone');

  console.log(phone, errors);

  const handleChange = () => {
    localStorage.setItem('contactFormValues', JSON.stringify(getValues()));
  };

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log('data sended', data);
  };

  const isChecked = watch('checkbox');
  const isPhone = watch('phone');

  return (
    <>
      {/*  */}
      <p className="mb-[24px] ml-auto w-[179px] text-[14px] leading-[143%] md:mb-[32px] md:ml-0 md:text-[13px] md:leading-[154%] xl:mb-[14px] xl:w-[234px] xl:text-[18px] xl:leading-[133%]">
        Don't miss your opportunity! Fill out the form right now and join our
        team!
      </p>
      {/*  */}
      <form
        className="md:grid-custom-two-rows md:grid-cols-auto flex flex-col md:grid md:h-[316px] md:w-[463px] md:grid-cols-2 md:grid-rows-2 xl:h-[380px] xl:w-[606px]"
        action="/path"
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleChange}
      >
        {/*  */}
        <div className="md:mr-[20px] md:w-[222px] xl:mr-[24px] xl:w-[290px]">
          {formFields.map(field => (
            <label
              key={field.name}
              htmlFor={field.name}
              className="md:h-[68px]"
            >
              {/*  */}
              <span className="mb-[4px] block text-[12px] leading-[200%] tracking-[0.2em]">
                {field.label}
              </span>
              {/*  */}
              {field.name === 'phone' ? (
                <div className="relative text-[13px] leading-[185%] text-opacity-20 outline-none focus:border xl:text-[20px] xl:leading-[120%]">
                  <InputMask
                    className={clsx(
                      'h-[24px] w-full border-white bg-input pr-[8px]',
                      {
                        'pl-[8px]': isPhone,
                        'pl-[36px] xl:pl-[50px]': !isPhone,
                      }
                    )}
                    {...register(field.name, {
                      pattern: field.pattern,
                      required: field.requiredMessage,
                    })}
                    type={field.type}
                    id={field.name}
                    placeholder={field.placeholder}
                    mask="+38 (___) ___ __ __"
                    replacement={{
                      _: /\d/,
                    }}
                  />
                  {!isPhone && (
                    <span className="absolute left-[8px] top-0 text-opacity-20">
                      +38
                    </span>
                  )}
                </div>
              ) : (
                <input
                  className="h-[24px] w-full border-white bg-input px-[8px] text-[13px] leading-[185%] text-opacity-20 outline-none focus:border xl:text-[20px] xl:leading-[120%]"
                  {...register(field.name, {
                    pattern: field.pattern,
                    required: field.requiredMessage,
                  })}
                  type={field.type}
                  id={field.name}
                  placeholder={field.placeholder}
                />
              )}

              {/* */}
              <div className="h-[16px] xl:h-[24px]">
                {errors?.[field.name] && (
                  <p className="text-right text-[12px] leading-[200%] tracking-[0.2em] text-incorrectField">
                    {errors?.[field.name]?.message}
                  </p>
                )}
              </div>
            </label>
          ))}
        </div>

        <label
          htmlFor="message"
          className="mb-[16px] md:mb-0 md:w-[222px] xl:w-[292px]"
        >
          <span className="mb-1 block text-[12px] leading-[200%] tracking-[0.2em]">
            Message
          </span>
          <textarea
            className="h-[196px] w-full resize-none bg-input px-[8px] py-[6px] outline-none focus:border"
            {...register('message')}
            id="message"
            name="message"
            cols={30}
            rows={10}
          />
        </label>

        <label
          htmlFor="checkbox"
          className="flex flex-col md:w-[222px] xl:w-[290px]"
        >
          <div className="flex items-start gap-[8px]">
            <input
              {...register('checkbox')}
              type="checkbox"
              id="checkbox"
              className="hidden"
            />
            {isChecked ? (
              <div className="h-[24px] w-[24px]">
                <SvgIcon
                  height={24}
                  width={24}
                  iconPath="/sprite.svg#icon-checkbox-checked"
                />
              </div>
            ) : (
              <div className="h-[24px] w-[24px]">
                <SvgIcon
                  height={24}
                  width={24}
                  iconPath="/sprite.svg#icon-checkbox"
                />
              </div>
            )}
            <span className="text-[12px] leading-[183%] xl:leading-[200%]">
              I confirm my consent to the processing of personal data.
            </span>
          </div>
          <div className="h-[16px] xl:h-[24px]">
            {errors?.checkbox && (
              <p className="text-[12px] leading-[200%] tracking-[0.2em] text-incorrectField">
                {errors?.checkbox?.message}
              </p>
            )}
          </div>
        </label>

        {/*  */}
        <button
          className="ml-auto w-[82px] text-[30px] font-medium hover:text-gold focus:text-gold xl:w-auto xl:text-[32px]"
          type="submit"
        >
          SEND
        </button>
      </form>
    </>
  );
};

export default Form;
