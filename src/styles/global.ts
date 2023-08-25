import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
  }

  body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.white};
  }

  body, input, text-area, button {
    font-family: 'Gotham', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
  }
`
