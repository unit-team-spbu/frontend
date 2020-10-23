import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';


function event() {
  return (
    <Blog />
  );
}

ReactDOM.render(<event />, document.getElementById('root'));
export default event;