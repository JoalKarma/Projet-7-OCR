import { createGlobalStyle } from 'styled-components';
import HomeBackground from '../../../assets/homepage.jpg';
import colors from '../colors';

const StyledPageHome = createGlobalStyle`
      *{
            margin: 0;
            font-family: 'Lato', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
      }
      body{
            background-image: url('${HomeBackground}');
            background-attachment: fixed;
            background-size: cover;
            background-repeat: no-repeat;
            background-color: ${colors.tertiary};
      }
      
`;

export default StyledPageHome;