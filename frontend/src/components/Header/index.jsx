import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../utils/style/colors';
import logoGroupomania from '../../assets/groupomania-black.png';

const media = {
      desktopHeader: "@media(max-width: 700px)"
};
const StyledHeader = styled.header`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      background-color: ${colors.primary};
      padding: 20px 50px 20px 50px;
      box-shadow: 3px 3px 7px #c1c1c1;
      border-bottom: 10px solid ${colors.primary}
      

      ${media.desktopHeader} {
            padding: 25px;
      }
`;
// const StyledHeader2 = styled.header`
//       display: flex;
//       flex-direction: row;
//       justify-content: center;
//       align-items: center;
//       height: 100px;
//       background-color: ${colors.secondary};
//       padding: 20px 50px 20px 50px;
//       box-shadow: 3px 3px 7px #c1c1c1;
//       border-bottom: 10px solid ${colors.primary}

//       ${media.desktopHeader} {
//             padding: 25px;
//       }
// `;
const StyledNav = styled.nav`
      display: flex;
      flex-direction: row;

      ${media.desktopHeader} {
            display: flex;
            flex-direction: column;
      }
`;
const StyledLink = styled(Link)`
      padding-right: 15px;
      text-decoration: none;
      color: black;

      ${media.desktopHeader} {
            padding-bottom: 5px;
      }
`;
const StyledImg = styled.img`
      width: 20%;

      ${media.desktopHeader} {
            width: 40%
      }
`;

function Header(){
      const url = 'http://localhost:3000/';

      function disconnect(){
            const actualUser = localStorage.getItem('actualUser');

            if(actualUser){
                  localStorage.removeItem('actualUser');
            }
            window.location='/connect';
      }

      return (window.location.href !== `${url}connect`) ? (
            <StyledHeader>
            <StyledImg src={logoGroupomania} alt='Soyons serieux 30 seconde' />
            <StyledNav>
                  <StyledLink to='/'> Home </StyledLink>
                  <StyledLink to='/createpost'>Créer un post</StyledLink>
                  {/* <StyledLink to='/connect'>Connexion</StyledLink> */}
                  <StyledLink to='/' onClick={disconnect}>Deconnexion</StyledLink>
            </StyledNav>
            </StyledHeader> 
      )
      : 
      (
             // <StyledHeader2>
            //       <StyledImg src={logoGroupomania} alt='Soyons serieux 30 seconde' />
            // </StyledHeader2>   
            null   
      )     
};

export default Header