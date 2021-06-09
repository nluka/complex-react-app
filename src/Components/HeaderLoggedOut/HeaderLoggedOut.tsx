import axios from 'axios';
import React, { useContext, useState } from 'react';
import ExampleContext from '../../ExampleContext';

const HeaderLoggedOut = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setIsLoggedIn } = useContext(ExampleContext);

  interface LoginResponseData {
    token: string;
    username: string;
    avatar: string;
  }

  const updateLocalStorageValues = (data: LoginResponseData) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username);
    localStorage.setItem('avatar', data.avatar);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post('/login', {
        username,
        password,
      });
      if (res.data === false) {
        console.log('Invalid credentials.');
        return;
      }
      updateLocalStorageValues(res.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mb-0 pt-2 pt-md-0'>
      <div className='row align-items-center'>
        <div className='col-md mr-0 pr-md-0 mb-3 mb-md-0'>
          <input
            name='username'
            className='form-control form-control-sm input-dark'
            type='text'
            placeholder='Username'
            autoComplete='off'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='col-md mr-0 pr-md-0 mb-3 mb-md-0'>
          <input
            name='password'
            className='form-control form-control-sm input-dark'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='col-md-auto'>
          <button className='btn btn-success btn-sm'>Sign In</button>
        </div>
      </div>
    </form>
  );
};

export default HeaderLoggedOut;
