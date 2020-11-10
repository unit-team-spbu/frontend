import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';


function lenta() {
  return (
    <Blog />
  );
}

ReactDOM.render(<lenta />, document.getElementById('root'));
export default lenta;