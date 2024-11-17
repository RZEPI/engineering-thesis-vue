import { StringFilter, TableFilter } from "../models/table/TableFilter";
import { TableRowData } from "../models/table/TableRowData";

export const numberTable: number[] = [
  21, 32, 43, 54, 65, 76, 87, 89, 109, 110, 211, 312, 413, 514, 615,
];

export const namesTable: string[] = [
  "Marcel",
  "Tomek",
  "Agata",
  "Miłosz",
  "Damian",
  "Krzysiek",
  "Ola",
];

export function makeDefaultFilter():TableFilter {
  const nameFilters: StringFilter[] =  namesTable.map((name) => ({ value: name, isChecked: true }));
  return {
    id: { min: undefined, max: undefined, isOpen: false },
    name: nameFilters,
    level: { min: undefined, max: undefined, isOpen: false },
  };
};

export const tableDummyRow: TableRowData = {
  id: 0,
  name: "Name",
  level: 0,
};