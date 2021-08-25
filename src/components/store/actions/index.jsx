
// add information
export const ADD_INFO = "ADD_INFO"
export const ADD_TAG = "ADD_TAG"
export const REMOVE_INFO = "REMOVE_INFO"
// register
export const ADD_USER = "ADD_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT = "LOGOUT";

// list
export const ADD_LIST = "ADD_LIST"


export const add_info = (inf) => {
  return {
    type: ADD_INFO,
    inf,
    }
}

export const remove_info = (id) => ({
  type: REMOVE_INFO,
  id,
})

// register
export const add_user = (user) => ({
  type: ADD_USER,
  user,
});

export const login_user = (obj) => ({
  type: LOGIN_USER,
  obj,
});

export const log_out = (obj) => ({
  type: LOGOUT,
  obj,
})

export const add_list = (value) => ({
  type: ADD_LIST,
  value 
})