import React from "react";
import { useState, useEffect } from 'react';

import StyleLike from "../../utils/style/ComponentLikeStyle";
import likePicture from '../../assets/thumbs-up-solid.svg';


function Like({id, data}){
      
      const actualUser = JSON.parse(localStorage.getItem('actualUser'));
      const actualUserId = actualUser.userId;
      const [like, setLike] = useState(0);
      const [likeActive, setLikeActive] = useState(false);
      const postLike = data.likes;
      const currentLike = like;
      const actualLike = `${postLike + currentLike}`;
      const token = actualUser.token;


      useEffect(() => {
            if(data.usersLiked.includes(actualUserId)){
                  setLikeActive(true);
            }     
      },[actualUserId, data.usersLiked]);

      function canceledLikePost(){
            let postLike = {
                  _id: id,
                  actualUserId: actualUserId,
                  likes: 0,
            };
            fetch(`http://localhost:8000/api/post/${id}/like`, {
                  method: "POST",
                  headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${token}`,
                  },
                  body: JSON.stringify(postLike),
            })
            .then((res) => console.log(res))
            .catch(error => console.log(error));
      }
      function newLikePost(){
            let postLike = {
                  _id: id,
                  actualUserId: actualUserId,
                  likes: 1,
            };
            
            fetch(`http://localhost:8000/api/post/${id}/like`, {
                  method: "POST",
                  headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${token}`,
                  },
                  body: JSON.stringify(postLike),
            })
            .then((res) => console.log(res))
            .catch(error => console.log(error));
      }

      function onLike(){
            if(likeActive){
                  setLikeActive(false);
                  setLike(like-1);
                  canceledLikePost();
            }else{
                  setLikeActive(true);
                  setLike(like+1);
                  newLikePost();
            }
      }
      return (
            <StyleLike.LikeStyledDiv>
                  <StyleLike.SpanStyled id={`likeToDisplay${id}`}>{actualLike}</StyleLike.SpanStyled> 
                  <StyleLike.ImageStyledLike src={likePicture} id={`buttonLike${id}`} alt='like this' width='20' onClick={()=>onLike()}/>
            </StyleLike.LikeStyledDiv>
      )
}

export default Like;
