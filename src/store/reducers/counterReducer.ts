// 定义action类型
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 定义action接口
interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

type CounterActionTypes = IncrementAction | DecrementAction;

// 初始状态
const initialState = 0;

// reducer
const counterReducer = (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;