import * as types from "../../../utilActions/actionTypes";
export function fetchName(data) {
  debugger;
  return function(dispatch) {
    dispatch(createActioncreaters(types.USER_NAME, data));
  };
}

export function createActioncreaters(type, payload) {
  return {
    type: type,
    payload: payload
  };
}
