import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../src/store/reducers';

const User: React.FC = () => {
  const [name, setName] = useState('');
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleSetUser = () => {
    dispatch({ type: 'SET_USER', payload: name });
  };

  return (
    <div>
      <h1>用户: {user}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="请输入用户名"
      />
      <button onClick={handleSetUser}>设置用户名</button>
    </div>
  );
};

export default User;