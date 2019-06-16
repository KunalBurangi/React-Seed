import * as types from "../../../utilActions/actionTypes";

const initialState = {
  UserName: ""
};

export default function HomeReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case types.USER_NAME:
      return {
        UserName: action.payload
      };

    default:
      return initialState;
  }
}
