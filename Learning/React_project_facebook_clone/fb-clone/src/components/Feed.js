import React, { useState, useEffect } from 'react';
import '../css/feed.css';
import MessageSender from './MessageSender';
import StoryReel from './Storyreel';
import Post from './Post';
import { useStateValue } from './StateProvider';
import db from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      {/*StoryReel*/}
      <StoryReel />
      {/*MessageSender*/}
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
