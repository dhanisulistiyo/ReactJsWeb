import { POST_COMPANY, POST_OFFICE } from "./actionTypes";

const post_company = data => {
  return {
    type: POST_COMPANY,
    data
  };
};

const post_office = data => {
  return dispatch => {
    return dispatch({
      type: POST_OFFICE,
      data
    });
  };
};

export { post_company, post_office };
