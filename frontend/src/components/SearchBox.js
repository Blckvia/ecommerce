import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function SearchBox() {
  const navigate = useNavigate();
  const location = useLocation();

  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}`);
    } else {
      navigate(location.pathname);
    }
  };

  return (
    <Form onSubmit={submitHandler} style={{ display: 'flex' }}>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>

      <Button
        type='submit'
        variant='outline-success'
        className='p-2'
        style={{ marginLeft: '0.5rem' }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
