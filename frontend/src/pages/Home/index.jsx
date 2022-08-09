import React from "react";

import Post from "../../components/Post";
import { useFetch } from '../../utils/hooks';

function Home() {

const actualUser = JSON.parse(localStorage.getItem('actualUser'));
const token = actualUser.token;
// const userId = actualUser.userId;

const { data }  = useFetch(
  'http://localhost:8000/api/post',
  token
);

const sortedPost = data.sort(function(a, b){
  return b.date.localeCompare(a.date);
});
  return (
    <div>
      {sortedPost?.map((post, index) => (
        <Post
          key={`${post._id}-${index}`}
          title={post.title}
          post={post.post}
          like={post.likes}
          id={post._id}
          userPostId={post.userId}
          picture={post.imageUrl}
          usersLiked={post.usersLiked}
          data={post}
        />    
      ))}
    </div>
  );       
}

export default Home;
