import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const StyledComponent = styled.div`
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      
`;
const StyledDiv = styled.div`
      height: 30%;
      width: 50%;
      background-color: ${colors.primary};
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 30px;
      border-radius: 20px;


`;
const StyledText = styled.div`
      text-align: center;
      height: 30%
`;
const StyledLink = styled(Link)`
      height: 10%;
      text-decoration: none;
`;


function PageForbidden(){
      return (
            <StyledComponent>
                  <StyledDiv>
                        <StyledText>
                              Erreur 403 Forbidden <br/> <br/>
                              L'action que vous essayer d'effectuer vous ai interdite.
                        </StyledText>
                        <StyledLink to='/'>
                              Home
                        </StyledLink>
                  </StyledDiv>
            </StyledComponent>
      )
}

export default PageForbidden;