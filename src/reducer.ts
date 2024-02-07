type actionType = "add" | "delete";
type listType = { title: string };
export const reducer = (
  state: listType[],
  action: { type: actionType; list?: listType; id?: number }
): listType[] => {
  switch (action.type) {
    case "add": {
      if (!action.list) {
        return [...state];
      }
      return [...state, action.list];
    }
    case "delete": {
      return state.filter((_, i) => i !== action.id);
    }
  }
};
