import type { UiElementProps } from '../ui-element';

export interface UiInputProps<ValueType = string> extends UiElementProps {
  value?: ValueType;
  readonly?: boolean;
  disabled?: boolean;
  autofocus?: boolean;
  list?: string;

  form?: string;
  name?: string;
}

export interface Autocomplete {
  autocomplete?: string;
}

export interface Rangeable<Type> {
  min?: Type;
  max?: Type;
  step?: number;
}

export interface Required {
  required?: boolean;
}

export interface Patternable {
  pattern?: string;
}
