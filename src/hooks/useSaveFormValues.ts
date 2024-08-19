import { useCallback, useEffect } from 'react';
import {
  UseFormReset,
  UseFormSetValue,
  UseFormGetValues,
  Path,
} from 'react-hook-form';

export const useSaveFormValues = <
  T extends Record<string, string | undefined | boolean>,
>({
  isSubmitSuccessful,
  reset,
  setValue,
  getValues,
}: {
  isSubmitSuccessful: boolean;
  reset: UseFormReset<T>;
  setValue: UseFormSetValue<T>;
  getValues: UseFormGetValues<T>;
}) => {
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
        setValue(key as Path<T>, storedValues[key]);
      });
    }
  }, [setValue]);

  const handleChange = useCallback(() => {
    localStorage.setItem('contactFormValues', JSON.stringify(getValues()));
  }, [getValues]);

  return handleChange;
};
