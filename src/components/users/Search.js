import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Enter something', 'light');
    }
    githubContext.searchUser(text);
    setText('');
  };
  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search User'
          value={text}
          onChange={onChange}
          
        ></input>
        <input
          type='submit'
          className='btn btn-dark btn-block'
          value='search'
        ></input>
        {githubContext.users.length > 0 && (
          <button
            className='btn btn-light btn-block'
            onClick={githubContext.clearUser}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
