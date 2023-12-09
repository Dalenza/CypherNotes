import React, { useState } from "react";

export type Field = {
  value: any;
  error: boolean;
};
export type DefaultFields = {
  [key: string]: Field;
};

export type Form = {
  [key: string]:
    | Field
    | ((key: string, condition: (value: any) => boolean) => void)
    | ((key: string, value: any) => void);
  validate: (key: string, condition: (value: any) => boolean) => void;
  updateValue: (key: string, value: any) => void;
};

const isField = (x: string): x is Field => {
  return;
};

function useForm(defaultFields: DefaultFields) {
  const validate = (key: string, condition: (value: any) => boolean) => {
    if (condition(form[key].value)) {
      form[key].error = false;
    } else {
      form[key].error = true;
    }
  };
  const updateValue = (key: string, value: any) => {
    form[key].value = value;
  };
  const [form, setForm] = useState<Form>({
    ...defaultFields,
    validate,
    updateValue,
  });

  return form;
}

export default useForm;
