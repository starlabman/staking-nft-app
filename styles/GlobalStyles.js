import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"
import "@fontsource/ubuntu"
import "@fontsource/roboto"


const GlobalStyles = createGlobalStyle`

${'' /* *{
    outline: 1px solid purple !important;
} */}

*,*::before, *::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Ubuntu', sans-serif;
    overflow-x: hidden;
}

img{
    margin: 5px;
    max-width: 180px;
    /*max-height: 180px;*/
    height: auto;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
`

export default GlobalStyles;