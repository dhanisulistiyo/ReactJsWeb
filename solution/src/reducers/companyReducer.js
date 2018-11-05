import * as types from "../actions/actionTypes";

const initialState = {
  company: []
};

const companyReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.POST_COMPANY:
      return {
        ...state,
        company: action.data
      };

    default:
      return state;
  }
};

export default companyReducer;
