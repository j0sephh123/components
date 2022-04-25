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

export const setClickedItems = <T extends { id: number }>(item: T, id: number, active:boolean) => ({
  ...item,
  active,
  clicked: id === item.id,
});
