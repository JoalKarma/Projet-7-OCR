import React from "react";
import PropTypes from 'prop-types';

import Like from "../Like";

import { Link } from 'react-router-dom';

import trashCan from '../../assets/trash-can-solid.svg';
import colors from '../../utils/style/colors';
import styled from "styled-components";


const media ={
      desktop: '@media(max-width: 1100px)',
      phone: '@media(max-width:400px)'
};
const PostContainer = styled.div`
      width: 50%;
      overflow: hidden;
      margin: auto;
      margin-top: 50px;
      margin-bottom: 50px;
      padding: 30px;
      border-radius: 40px;
      background-color: rgba(255, 215, 215, 0.5);
      transition: all 0.5s;
      &:hover {
            background-color: rgba(253, 45, 1, 0.8);
      }
      ${media.desktop} {
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
      }
      ${media.phone} {
            width: 70%;
      }
      
`;
const PostTitle = styled.div`
      padding-bottom: 10px;
      margin-bottom: 25px;
      color: ${colors.tertiary};
      font-size: 2rem;
      text-align: center;
      &:after{
            display: block;
            content: '';
            border-bottom: 2px solid ${colors.tertiary};
            padding-top: 15px;
            width: 50%;
            margin: auto;
      }
`;

const PostStyled = styled.div`
margin: 5px;
`;

const PostPicture = styled.img`
max-width: 850px;
min-width: 150px;
margin: auto;
padding: 20px;
border-radius: 30px;
${media.phone} {
      padding: 0px;
      margin-top: 15px;
      border-radius: 5px;
}
`;
const PictureContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const StyledLikeetmodifier = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
`;
const ModifyDeleteButton = styled.button`
      font-size: 0.9rem;
      padding: 10px;
      margin-right: 15px;
      border: none;
      background-color: rgba(255, 215, 215, 0.5);
      color: black;
      border-radius: 10px;
      transition: all 0.5s;
      cursor: pointer;
      &:hover{
            color: white;
            background-color: rgba(78, 81, 102, 0.7);
      }
`;
const ModifyDeleteButtonLink = styled(Link)`
      font-size: 0.9rem;
      text-decoration: none;
      padding: 10px;
      margin-right: 15px;
      border: none;
      background-color: rgba(255, 215, 215, 0.5);
      color: black;
      border-radius: 10px;
      transition: all 0.5s;
      cursor: pointer;
      &:hover{
            color: white;
            background-color: rgba(78, 81, 102, 0.7);
      }
`;

function Post({post, picture, title, id, userPostId, usersLiked, data}){
      
      const actualUser = JSON.parse(localStorage.getItem('actualUser'));
      const userIsAdmin = actualUser.isAdmin;
      const actualUserId = actualUser.userId;
      const token = actualUser.token;
      

      function deletePost(){
            fetch(`http://localhost:8000/api/post/${id}`, {
                  method: "DELETE",
                  headers: {
                        "Content-Type" : "multipart/form-data",
                        "Authorization" : `Bearer ${token}`,
                  },
                  body: JSON.stringify({"userId" : `${actualUserId}`})                       
            });
            window.location='/';
      }
      
      if(actualUserId === userPostId || userIsAdmin){
            return(
                  <PostContainer>
                        <PostTitle>{title}</PostTitle>
                        <PostStyled>{post}</PostStyled>
                        <PictureContainer>
                          {picture !== "NULL" && (
                          <PostPicture src={picture} alt='post img' />    
                        )}    
                        </PictureContainer>
                        <StyledLikeetmodifier>
                              <Like 
                                    key={id}
                                    id={id}
                                    usersLiked={usersLiked}
                                    data={data}
                              />
                              <div>
                              <ModifyDeleteButtonLink to={`/${id}`} id={id} >Modifier</ModifyDeleteButtonLink>
                              <ModifyDeleteButton id={id} onClick={deletePost}><img src={trashCan} alt='supprésion de post' width='15'/></ModifyDeleteButton>
                              </div>
                        </StyledLikeetmodifier>
                  </PostContainer>
            )
      }else{
            return(
                  <PostContainer>
                        <PostTitle>{title}</PostTitle>
                        <PostStyled>{post}</PostStyled>
                        <PictureContainer>
                          {picture !== "NULL" && (
                          <PostPicture src={picture} alt='post img' />    
                        )}    
                        </PictureContainer>
                        <StyledLikeetmodifier>
                        <Like 
                              key={id}
                              id={id}
                              usersLiked={usersLiked}
                              data={data}
                        />
                        </StyledLikeetmodifier>
                  </PostContainer>
            )
      } 
}
Post.propTypes = {
      post: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired, 
}
Post.defaultProps = {
      title: 'Titre non defini',
}

export default Post

// function refresh(){
            //       let scroll = document.body.scrollTop;
            //       let uri = document.location.href;
            //       uri = uri.replace(/scroll=[\d]+/, "scroll="+scroll);
            //       console.debug(uri);
            //       document.location=uri;
            // }
            // refresh()
            // function goScrollPos(){
            //       var uri = document.location.href;
            //       /scroll=([\d]+)/.exec(uri);
            //       console.debug(RegExp.$1);
            //       window.scrollTo(RegExp.$1);
            // }
            //       setTimeout(refresh,3000);
            // goScrollPos();
            // window.location ='/';