'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { IFormField } from '@/interfaces/IFormField';
import { emailRegExp, textRegExp } from '@/constants/regExp';
import { useSaveFormValues } from '@/hooks/useSaveFormValues';
import SvgIcon from '../common/SvgIcon';

type FieldNames = 'fullName' | 'email' | 'message';

const contactsInputFormFields: IFormField<FieldNames>[] = [
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
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  });

  const handleChange = useSaveFormValues({
    reset,
    isSubmitSuccessful,
    setValue,
    getValues,
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log('data sended', data);
  };

  return (
    <>
      <form
        className="md:grid-two-rows-auto md:grid-two-cols-auto xl:grid-three-rows-auto flex flex-col md:grid md:h-[301px] md:w-[704px] md:grid-cols-2 md:grid-rows-2 xl:ml-[231px] xl:h-[361px] xl:w-[607px] xl:grid-rows-3"
        action="/path"
        onSubmit={handleSubmit(onSubmit)}
        onChange={handleChange}
      >
        <div className="md:order-1 md:mr-[20px] md:w-[222px] xl:col-span-2 xl:mb-[40px] xl:mr-[0px] xl:flex xl:w-[607px] xl:flex-row xl:gap-[28px]">
          {contactsInputFormFields.map(field => (
            <label
              key={field.name}
              htmlFor={field.name}
              className="w-full md:h-[68px]"
            >
              <span className="mb-[4px] block text-[12px] leading-[200%] tracking-[0.2em]">
                {field.label}
              </span>

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

              <div className="flex h-[16px] items-center justify-end gap-[4px] xl:h-[24px]">
                {errors?.[field.name] && (
                  <>
                    <SvgIcon
                      className="stroke-incorrectField"
                      width={9.25}
                      height={9.25}
                      iconPath="/sprite.svg#icon-cross"
                    />
                    <p className="text-right text-[12px] leading-[200%] tracking-[0.2em] text-incorrectField">
                      {errors?.[field.name]?.message}
                    </p>
                  </>
                )}
              </div>
            </label>
          ))}
        </div>

        <label
          htmlFor="message"
          className="mb-[16px] md:order-2 md:w-[463px] xl:order-3 xl:mb-[24px] xl:w-[607px]"
        >
          <span className="mb-[4px] block text-[12px] leading-[200%] tracking-[0.2em]">
            Message
          </span>

          <textarea
            className="h-[193px] w-full resize-none bg-input px-[8px] py-[6px] outline-none focus:border md:h-[221px] md:w-full xl:h-[174px]"
            {...register('message')}
            id="message"
            name="message"
            cols={30}
            rows={10}
          />
        </label>

        <div className="h-min md:order-3"></div>

        <button
          className="hover:custom-text-shadow focus:custom-text-shadow custom-transition-all ml-auto h-min w-[82px] text-[30px] font-medium hover:text-gold focus:text-gold md:order-4 xl:w-auto xl:text-[32px]"
          type="submit"
        >
          SEND
        </button>
      </form>
    </>
  );
};

export default ContactsForm;
