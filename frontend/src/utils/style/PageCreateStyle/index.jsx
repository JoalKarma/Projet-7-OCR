import { createGlobalStyle } from 'styled-components';
import CreateBackground from '../../../assets/createpage.jpg';
import colors from '../colors';

const StyledPageCreate = createGlobalStyle`
      *{
            margin: 0;
            font-family: 'Lato', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
      }
      body{
            background-image: url('${CreateBackground}');
            background-attachment: fixed;
            background-size: cover;
            background-repeat: no-repeat;
            background-color: ${colors.tertiary};
      }
      
`;

export default StyledPageCreate;