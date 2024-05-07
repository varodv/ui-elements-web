import type {
  Autocomplete,
  Patternable,
  Rangeable,
  Required,
  UiInputProps,
} from '../ui-input';

export interface UiDateInputProps
  extends UiInputProps,
    Rangeable<string>,
    Autocomplete,
    Required,
    Patternable {}
