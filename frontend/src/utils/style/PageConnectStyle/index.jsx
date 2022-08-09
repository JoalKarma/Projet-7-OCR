import { createGlobalStyle } from 'styled-components';
import ConnectBackGround from '../../../assets/connectpage.jpg';
import colors from '../colors';


const StylePageConnect = createGlobalStyle`
      #root{
            height: 100%;
            margin: auto;
            & >div {
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
            }
            
      }
      *{
            height: 100%;
            margin: 0;
            font-family: 'Lato', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;   
      }
      body{
            background-image: url('${ConnectBackGround}');
            background-attachment: fixed;
            background-size: cover;
            background-repeat: no-repeat;
            background-color: ${colors.tertiary};
      }
      
`;

export default StylePageConnect;