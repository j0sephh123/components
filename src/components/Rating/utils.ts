import { Rating, StarSize } from "../../types";

export const findItemIndex = <T extends { id: number }>(
  itemArg: T,
  id: number
) => itemArg.id === id;

export const resetActive = <T>(item: T) => ({
  ...item,
  active: false,
});

export const resetClickedAndActive = <T>(item: T) => ({
  ...item,
  active: false,
  clicked: false,
});

export const setClickedItems = <T extends { id: number }>(
  item: T,
  id: number,
  active: boolean
) => ({
  ...item,
  active,
  clicked: id === item.id,
});

export const countActiveItems = <T extends { active: boolean }[]>(array: T) =>
  array.filter((itemArg) => itemArg.active).length - 1;

export const sliceItems = (prev: Rating[], index: number, id: number) => [
  ...prev.slice(0, index + 1).map((item) => setClickedItems(item, id, true)),
  ...prev.slice(index + 1).map((item) => setClickedItems(item, id, false)),
];

export const mouseEnterSlice = (prev: Rating[], index: number, id: number) => [
  ...prev.slice(0, index + 1).map((item) => setClickedItems(item, id, true)),
  ...prev.slice(index + 1),
];

export const defaults = {
  fill: "#EFCE4A",
  size: StarSize.medium
}