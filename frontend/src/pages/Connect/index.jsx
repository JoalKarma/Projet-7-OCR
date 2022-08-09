import React from "react";
// import jwt_decode from 'jwt-decode';

import styled from "styled-components";
import { useState } from 'react';

import logoGroupo from '../../assets/icon-left-font-monochrome-white.png';
import colors from '../../utils/style/colors';

const media = {
      phone: '@media(max-width:850px)',
      tablette: '@media(max-width:900px)',
      landscape: '@media(max-height:450px)'
};
const StyledContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 60%;
      width: 100%;
      border-top: 4px solid ${colors.primary};
      border-bottom: 4px solid ${colors.primary};
      ${media.phone}{
            flex-direction: column-reverse;
            align-content: space-around;
            height: 100%;

      } 
      ${media.landscape}{
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
      }   
`;
const StyledSousContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-item: center;
      height: 50%;
      ${media.phone}{
            height:20%;
      }
      ${media.landscape}{
            height: 30%;
            width: 40%;
      }    
`;
const StyleCache = styled.div`
      background-color: ${colors.primary};
      position: absolute;
      height: 60%;
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      left: 50%;
      right: 0%;
      transition: all 0s;
      ${media.phone}{
            top: 0%;
            bottom: 50%;
            left: 0%;
            right: 0%;
            width: 100%;
            height: 50%;
      }
      ${media.landscape}{
            left: 50%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            height: 100%;
            width: 50%;
      }  
`;
const StyledConnectContainer = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 30px;
      padding-bottom: 30px;
      margin: auto;
      // box-shadow: 7px 7px 10px #c1c1c1;
      border-radius: 20px;
      border: 1px solid ${colors.primary};
      background-color: rgba(255, 215, 215, 0.7)

`;
const StyledTitleContainer = styled.h3`
      font-size: 2rem;
      color: ${colors.primary};
`;
const StyledInfoContainer = styled.form`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
`;
const StyledInput = styled.input`
      margin: 5px;
      padding: 5px;
      border-radius: 5px;
      border: none;
      &:focus{
            outline: none;
            border: 2px solid #fd2d01;  
      }
`;
const ConnectButton = styled.input`
      margin-top: 15px;
      width: 50%;
      border: 1px solid ${colors.tertiary};
      background-color: white;
      padding: 5px;
      transition: all 0.5s;
      &:hover{
            background-color: #fd2d01;
            color: white;
      }
`;
const Styledh2 = styled.h2`
      font-size: 1.5rem;
      font-weight: 100;
      margin-top: 0px;
      color: white;
      text-align: center;
      padding: 0px 10px 0px 10px;
`;
const ChangeButton = styled.button`
      color: black;
      font-size: 1.rem;
      width: 40%;
      margin: auto;
      border: none;
      // background-color: rgba(0,0,0,0);
`;
const StyledLogo = styled.img`
      width: 60%;
      ${media.phone}{
            width: 90%
      }
`;


function Connect(){
      
      const [connexionEmail, setConnexionEmail] = useState('');
      const [connexionPassword, setConnexionPassword] = useState('');
      const [inscriptionEmail, setIncriptionEmail] = useState('');
      const [inscriptionPassword, setInscriptionPassword] = useState('');

      function cacheConnect(){
            const cacheConnect = document.getElementById('cacheconnect');
            cacheConnect.style.transition = 'all 0.5s';

            if(window.screen.width >= 800 && window.screen.height <= 450){
                  cacheConnect.style.left = '50%';
                  cacheConnect.style.right = '0%';
                  cacheConnect.style.bottom = '0%';
                  cacheConnect.style.top = '0%';
            }else if(window.screen.width >= 850){
                  console.log('case 1 cacheconnect');
                  cacheConnect.style.right = '0%';
                  cacheConnect.style.left = '50%';
            }else if(window.screen.width >= 350 && window.screen.height >= 401){
                  console.log('case 2 cacheconnect');
                  cacheConnect.style.right = '0%';
                  cacheConnect.style.left = '0%';
                  cacheConnect.style.top ='0%';
                  cacheConnect.style.bottom = '50%';
            }else if(window.screen.width <= 700 && window.screen.height <= 400){
                  console.log('case 3 cacheconnect');
                  cacheConnect.style.right = '0%';
                  cacheConnect.style.left = '50%';
                  cacheConnect.style.bottom = '0%';
                  cacheConnect.style.top = '0%';
            }
            
      }
      function cacheInscription(){
            const cacheInscription = document.getElementById('cacheconnect');
            cacheInscription.style.transition = 'all 0.5s';

            if(window.screen.width >= 800 && window.screen.height <= 450){
                  cacheInscription.style.left = '0%';
                  cacheInscription.style.right = '50%';
                  cacheInscription.style.bottom = '0%';
                  cacheInscription.style.top = '0%';

            }else if(window.screen.width >= 850){
                  console.log('case 1 cacheinscription');
                  cacheInscription.style.left = '0%';
                  cacheInscription.style.right = '50%';     
            }else if(window.screen.width >= 350 && window.screen.height >= 401){
                  console.log('case 2 cacheinscription');
                  cacheInscription.style.right = '0%';
                  cacheInscription.style.left = '0%';
                  cacheInscription.style.top ='50%';
                  cacheInscription.style.bottom = '0%';                
            }else if(window.screen.width <= 700 && window.screen.height <= 400){
                  console.log('case 3 cacheinscription');
                  cacheInscription.style.right = '50%';
                  cacheInscription.style.left = '0%';
                  cacheInscription.style.bottom = '0%';
                  cacheInscription.style.top = '0%';
            }
      }

      function connexion(e) {
            e.preventDefault();
            let donneesConnexion = {
                  email: connexionEmail.toLowerCase(),
                  password: connexionPassword
            };
            fetch('http://localhost:8000/api/auth/login', {
                  
                  method: "POST",
                  headers: {
                        "Content-Type" : "application/json",
                  },
                  body: JSON.stringify(donneesConnexion), 
            })
            .then(function(res){
                  if(res.ok){
                      return res.json();
                  }
            })
            .then((data) => {
                  
                  let donnees = {
                        userId: data.userId,
                        token: data.token,
                        isAdmin: data.isAdmin,
                  };
                  localStorage.setItem(`actualUser`, JSON.stringify(donnees));
                  window.location='/';     
            });

      }
      function inscription(e){
            e.preventDefault();
            let donneesInscription = {
                  email: inscriptionEmail.toLowerCase(),
                  password: inscriptionPassword
            };

            fetch('http://localhost:8000/api/auth/signup', {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify(donneesInscription),
            })
            .then((response) => response.json())
            .then((actualUser) => {
                  localStorage.setItem("actualUser", JSON.stringify(actualUser));
                  if (actualUser.error) {
                        console.log(actualUser.error);
                  } else {
                        window.location = "/";
                  }          
            })   
            .catch((error) => {
                  console.log(error);
            });      
      }
      return (
            <StyledContainer id='container'>
                  <StyledSousContainer id='sous container'>
                        <StyledConnectContainer>
                              <StyledTitleContainer>Connexion</StyledTitleContainer>
                              <StyledInfoContainer onSubmit={connexion} id='connexionForm' >
                                    <StyledInput
                                          value={connexionEmail}
                                          onChange={(e) => setConnexionEmail(e.target.value)}
                                          placeholder= 'Tapez votre e-mail'
                                          name='connexionEmail'
                                          id='connexionEmail'
                                          type='email'
                                          required='required'
                                          autoComplete="username"
                                    ></StyledInput>
                                    <StyledInput
                                          value={connexionPassword}
                                          onChange={(e) => setConnexionPassword(e.target.value)}
                                          placeholder= 'Mot de passe'
                                          name="connexionPassword"
                                          id='connexionPassword'
                                          type='password'
                                          required='required'
                                          autoComplete="current-password"
                                    ></StyledInput>
                                    <ConnectButton type='submit' id='connexionbutton' value='Valider'/>
                              </StyledInfoContainer>
                        </StyledConnectContainer>
                        <Styledh2>Vous n'avez pas de compte? </Styledh2>
                        <ChangeButton onClick={cacheInscription}>Inscrivez vous!</ChangeButton>    
                  </StyledSousContainer>

                  <StyledSousContainer>
                        <StyledConnectContainer onSubmit={inscription} id='inscriptionForm'>
                              <StyledTitleContainer>Inscription</StyledTitleContainer>
                              <StyledInfoContainer>
                                    <StyledInput
                                          value={inscriptionEmail}
                                          onChange={(e) => setIncriptionEmail(e.target.value)}
                                          placeholder= 'Tapez votre e-mail'
                                          name="inscriptionEmail"
                                          type='email'
                                          id='inscriptionEmail'
                                          autoComplete="username"
                                    ></StyledInput>
                                    <StyledInput
                                          value={inscriptionPassword}
                                          onChange={(e) => setInscriptionPassword(e.target.value)}
                                          placeholder= 'Mot de passe'
                                          name="inscriptionPassword"
                                          type="password" 
                                          id='inscriptionPassword'
                                          autoComplete="current-password"
                                    ></StyledInput>
                                    <ConnectButton type='submit' id="inscriptionbutton" value='Valider' />
                              </StyledInfoContainer>
                        </StyledConnectContainer>
                        <Styledh2>Vous avez deja un compte? </Styledh2>
                        <ChangeButton onClick={cacheConnect}>Connectez vous!</ChangeButton>    
                  </StyledSousContainer>
                  <StyleCache id='cacheconnect'><StyledLogo src={logoGroupo} alt='logo connection'/></StyleCache>
                  
                  
            </StyledContainer>
      )
}

export default Connect