import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ExampleContext from '../../ExampleContext';

const HeaderLoggedIn = () => {
  const { setIsLoggedIn } = useContext(ExampleContext);

  const getAvatar = () => {
    const avatar = localStorage.getItem('avatar');
    if (avatar === null) {
      return '';
    }
    return avatar;
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('avatar');
    setIsLoggedIn(false);
  };

  return (
    <div className='flex-row my-3 my-md-0'>
      <a href='#' className='text-white mr-2 header-search-icon'>
        <i className='fas fa-search'></i>
      </a>
      <span className='mr-2 header-chat-icon text-white'>
        <i className='fas fa-comment'></i>
        <span className='chat-count-badge text-white'> </span>
      </span>
      <a href='#' className='mr-2'>
        <img className='small-header-avatar' src={getAvatar()} />
      </a>
      <Link className='btn btn-sm btn-success mr-2' to='/create-post'>
        Create Post
      </Link>
      <button onClick={handleLogOut} className='btn btn-sm btn-secondary'>
        Sign Out
      </button>
    </div>
  );
};

export default HeaderLoggedIn;
