import { IntFilter } from "./TableFilter";

export type NumericFilterTabProps = {
    currentFilter: IntFilter;
    activeTab: string;
    handleIsOpenChange: (e: Event) => void;
    handleNumericInputChange: (e: Event) => void;
};