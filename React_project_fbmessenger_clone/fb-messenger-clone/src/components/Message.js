import React, { forwardRef } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import '../css/Message.css';

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      {/*${isUser} only the person who is currently logged in gets message__user class*/}

      <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});
export default Message;
