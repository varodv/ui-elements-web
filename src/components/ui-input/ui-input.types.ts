import type { UiElementProps } from '../ui-element';

export interface UiInputProps<ValueType = string> extends UiElementProps {
  value?: ValueType;
  readonly?: boolean;
  disabled?: boolean;
  autofocus?: boolean;
  autocomplete?: string;

  form?: string;
  name?: string;
}
