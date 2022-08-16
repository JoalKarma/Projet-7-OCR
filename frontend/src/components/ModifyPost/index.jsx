import React from "react";
import styled from "styled-components";
import {useState} from 'react';

import axios from "axios";

import { useParams } from 'react-router-dom';

import SendPost from '../../assets/paper-plane-solid.svg';
import colors from '../../utils/style/colors';
import DefaultPicture from '../../assets/default-placeholder.png';

const media ={
      desktop: '@media(max-width: 1100px)',
      phone: '@media(max-width:400px)'
};
const StyledForm = styled.form`
      min-height: 500px;
      max height: 1000px;
      margin: auto;
      margin-top: 50px;
      margin-bottom: 50px;
      padding: 30px;
      border: 1px solid ${colors.primary};
      border-radius: 20px;
      width: 50%;
      background-color: rgba(255, 215, 215, 0.85);
      ${media.phone} {
            width: 70%
      }
`;
const StyledDiv = styled.div`::-webkit-scrollbar{
      width: 10px;
}
::-webkit-scrollbar-track {
      background: hsl(183 71% 100% / 1);
      border-radius: 60px;
      margin-block: 10px;
}
::-webkit-scrollbar-thumb {
      background: hsl(3 71% 0% / 1);
      border-radius: 60px;
}
      display: flex;
      flex-direction: column;
      margin-top: 30px;
`;
const StyledTitle = styled.input`
      height: 50px;
      padding-left: 20px;
      background-color: rgba(255, 215, 215, 0.7);
      border: none;
      border-bottom: 1px solid ${colors.primary};
      &:focus {
            outline: none;
            border-bottom: 3px solid ${colors.tertiary} 
      }     
      
`;
const StyleButtonDiv = styled.div`
      display: flex;
      justify-content: center;
`;
const StyledText = styled.textarea`
      border: none;
      // border-radius: 30px;
      padding: 20px;
      border-left: 1px solid ${colors.primary};
      border-bottom: 1px solid ${colors.primary};
      background-color: rgba(255, 215, 215, 0.7);
      &:focus {
            outline: none;
            border-left: 3px solid ${colors.tertiary};
            border-bottom: 3px solid ${colors.tertiary};
      }
`;
const StyledImgDiv = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin: auto;
      margin-top: 50px;
      background-color: rgba(255, 255, 255, 0);
      border-radius: 20px;
      min-height: 50px;
      max-height: 400px;
      padding: 10px;
      width: 50%;
      color: ${colors.primary};
      font-weight: 700;

      ${media.desktop} {
            width: 80%;
            padding: 10px 20px 10px 20px;
      }
`;
const StyledButton = styled.button`
      display: flex;
      flex-direction: row;
      font-weight: 700;
      align-items: center;
      justify-content: space-around;
      height: 40px;
      width: 70px;
      cursor: pointer;
      transition: all 0.2s;
      border-radius: 20px;
      border: 1px solid ${colors.tertiary};
      margin-top: 50px;
      background-color: rgba(255, 255, 255, 0);
      &:hover {
            background-color: ${colors.primary};
            border: 1px solid ${colors.primary};
            color: white;
      }
`;

function ModifyPostForm(e){
      const postId = useParams('');

      const [newTitle, setNewTitle] = useState('');
      const [newPost, setNewPost] = useState('');
      const [newImageLoad, setNewImageLoad] = useState(DefaultPicture);
      const [ancienPostFetch, setAncienPostFetch] = useState(false);
      const [file, setFile] = useState(null);

      const user = JSON.parse(localStorage.getItem('actualUser'));
      const userId = user.userId;
      const token = user.token;

      async function fetchPostData(e) {
            if(ancienPostFetch === false){
             await fetch(`http://localhost:8000/api/post/${postId.postId}`, {
            method: "GET",
            headers: {
                  "Content-Types" : "application/json",
                  "Authorization" : `Bearer ${token}`
            }
            })
            .then((res) => {
                  if(res.ok){
                        console.log('ok ca passe');
                        return (res = res.json());
                  }else{
                        window.location='/403-forbidden';
                  }
            })
            // .then((response) => response.json())
            .then((data) => {
                        console.log('test', data.post);
                        console.log('data', data);
                        setNewPost(data.post);
                        setNewTitle(data.title);
                        setNewImageLoad(data.imageUrl);
            })
            .catch(error => console.log(error));
            setAncienPostFetch(true);     
            }     
      }
      fetchPostData();

      const handlePicture = (event) => {
            setNewImageLoad(URL.createObjectURL(event.target.files[0]));
            setFile(event.target.files[0]);
      };

      const onFormSubmit = (e) => {
            e.preventDefault();

            const formData = new FormData();
            if (file) formData.append('image', file);
            formData.append('post', newPost);
            formData.append('title', newTitle);
            formData.append('userId', userId);

            const config = {
                  headers: {
                        "Content-Type" : "multipart/form-data",
                        "Authorization" : `Bearer ${token}`,
                  }
            };
            const url = `http://localhost:8000/api/post/${postId.postId}`;
            axios.put(url, formData, config)
            .then((response) => console.log(response))
            .catch(err => console.log(err));

            window.location='/';
      };

      // function modifyValidation(e){
      //       e.preventDefault();

      //       let postContenu = {
      //             title: newTitle, 
      //             post: newPost, 
      //             imageUrl: newImageLoad,
      //       };

      //       if(newTitle && newPost){
      //             e.preventDefault();

      //             fetch(`http://localhost:8000/api/post/${postId.postId}`, {
      //                   method: "PUT",
      //                   headers: {
      //                         "Content-Type" : "application/json",
      //                   },
      //                   body: JSON.stringify(postContenu),
      //             })
      //             .then((res) => {
      //                   if(res.error){
      //                         console.log("le post n'a pas etait créé");
      //                   }else{
      //                        console.log("else etape");
                             
      //                   }
      //             })
      //             .catch((err) => {
      //                   console.log(err);
      //             });
      //       }
      //       window.location='/';
      // }
      return(
            <StyledForm id="postForm" onSubmit={onFormSubmit}>

                  <StyledDiv>
                        <StyledTitle 
                        type='text' 
                        name='title' 
                        id="post" 
                        value={newTitle}
                        onChange={(e) => {setNewTitle(e.target.value)}}
                        />            
                  </StyledDiv>
                  <StyledDiv>
                        <StyledText
                        placeholder="Quelle est votre histoire?"
                        rows='15'
                        resize='both'
                        name='post'
                        id='post'
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}/>   
                  </StyledDiv>
                  <StyledImgDiv>
                        <label>Ajouter une image</label>
                        {/* <img src={newImageLoad} id="output" alt='telechargement de fichier' width='100'/> */}
                        {newImageLoad !== "NULL"&& (
                          <img src={newImageLoad} id="output" alt='telechargement de fichier' width='300'/>    
                        )}
                        <input 
                              name='file' 
                              type='file' 
                              id="file" 
                              accept='image/*'
                              onChange={handlePicture}
                        />
                  </StyledImgDiv>  
                  <StyleButtonDiv>
                  <StyledButton type='submit' value='poster'><img src={SendPost} alt='button post' width='25'/></StyledButton>
                  </StyleButtonDiv>
            </StyledForm>
      )
}

export default ModifyPostForm

// .then((response) => {
//       if(response.ok){
//             const data = response.json();
//             console.log('test', data.post);
//             console.log('data', data);
//             console.log(response);
//             setNewPost(response.post);
//             setNewTitle(response.title);
//             setNewImageLoad(response.imageUrl);
//       }else{
//             window.location ='403-forbidden';
//       }
// })