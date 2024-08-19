export interface IFormField<T> {
  name: T;
  label: string;
  type: string;
  placeholder: string;
  pattern: {
    value: RegExp;
    message: string;
  };
  requiredMessage?: string;
}
