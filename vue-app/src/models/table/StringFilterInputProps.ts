import { StringFilter } from "./TableFilter";

export type StringFilterInputProps = {
    className: string;
    filterValue: StringFilter;
    handleChange: (e: Event) => void;
  };