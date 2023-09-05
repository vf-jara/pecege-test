import {createGlobalStyle} from 'styled-components'
import PoppinsRegular from './assets/fonts/Poppins-Regular.ttf'
import PoppinsSemiBold from './assets/fonts/Poppins-SemiBold.ttf'
import PoppinsBold from './assets/fonts/Poppins-Bold.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular});
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsSemiBold});
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsBold});
        font-weight: 700;
        font-style: normal;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: Poppins;
        font-size: 16px;
    }
`