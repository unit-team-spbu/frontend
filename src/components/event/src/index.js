import React from 'react';
import ReactDOM from 'react-dom';
import Blogs from './Blogs';


function event() {
  return (
    <Blogs />
  );
}

ReactDOM.render(<event />, document.getElementById('root'));
export default event;