import React from 'react';
import '../css/sidebarrow.css';
import { Avatar } from '@material-ui/core';

function Sidebarrow({ title, src, Icon }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default Sidebarrow;
