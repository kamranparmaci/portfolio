import { createGlobalStyle } from "styled-components";

export const Globaly = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.5;
  background-color: #fff;
}

a {
  text-decoration: none;
}

 .container {
  max-width: 84.4%;
  margin: 0 auto;
} 

@media screen and (max-width: 1324px) {
  .container {
    max-width: 93%;
  }
} 

`;
