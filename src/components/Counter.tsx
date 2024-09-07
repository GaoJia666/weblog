import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../src/store/reducers';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>计数器: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>增加</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>减少</button>
    </div>
  );
};

export default Counter;