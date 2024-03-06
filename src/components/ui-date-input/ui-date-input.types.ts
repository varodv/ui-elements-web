import type { UiInputProps } from '../ui-input';

export interface UiDateInputProps extends UiInputProps {
  min?: string;
  max?: string;
  step?: number;

  required?: boolean;
  pattern?: string;
}
