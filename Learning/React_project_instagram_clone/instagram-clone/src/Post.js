//Components for Post
import React, { useState, useEffect } from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase';
import firebase from 'firebase';

function Post({ postId, user, username, caption, imgUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);
  const postComment = (event) => {
    event.preventDefault();

    db.collection('posts').doc(postId).collection('comments').add({
      comment: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment('');
  };
  return (
    <div className="post">
      {/*header => avatar + username */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      {/*image */}
      <img src={imgUrl} alt="" className="post__image" />
      {/*username + caption */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>

      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong> {comment.comment}
          </p>
        ))}
      </div>

      {user?.displayName ? (
        <form className="post__commentBox">
          <input
            type="text"
            className="post__input"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
      ) : (
        <h3 className="app__notSignedIn"></h3>
      )}
    </div>
  );
}
export default Post;
