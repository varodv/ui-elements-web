import type {
  Autocomplete,
  Patternable,
  Rangeable,
  Required,
  UiInputProps,
} from '../ui-input';

export interface UiDateInputProps
  extends UiInputProps<Date | string>,
    Rangeable<Date | string>,
    Autocomplete,
    Required,
    Patternable {}
