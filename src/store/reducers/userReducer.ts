// 定义action类型
const SET_USER = 'SET_USER';

interface SetUserAction {
  type: typeof SET_USER;
  payload: string;
}

type UserActionTypes = SetUserAction;

const initialState = '';

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;