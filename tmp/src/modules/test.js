
const initialState = {
  text: "hello",
  altText: "",
};

export default (state = initialState, action) => {
  console.log('test reducer ', action)
  switch (action.type) {
    case "CHANGE_TEXT":
      return {
        ...state,
        text: action.text
      };

    case "CHANGE_ALT_TEXT":
      return {
        ...state,
        altText: action.text
      };

    default:
      return state;
  }
};

export const changeText = (text) => ({
  type: "CHANGE_TEXT",
  text
});

export const changeAltText = (text) => ({
  type: "CHANGE_ALT_TEXT",
  text
});
