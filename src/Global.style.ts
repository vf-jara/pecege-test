import {createGlobalStyle} from 'styled-components'
import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'PoppinsRegular';
        src: url(${PoppinsRegular});
        font-weight: 400;
        font-style: normal;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: PoppinsRegular;
        font-size: 16px;
    }
`