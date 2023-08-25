import styled from 'styled-components'

import footerDecoration from '../../assets/footer-decoration.png'

export const FooterContainer = styled.footer`
  width: 100%;

  background-color: ${(props) => props.theme['blue-800']};
  background-image: url(${footerDecoration});
  background-repeat: no-repeat;
  background-position: right center;

  & > div {
    max-width: 1140px;
    padding: 2.88rem 0 1.56rem 0;
    margin: 0 auto;
  }
`

export const FooterContent = styled.div`
  margin-bottom: 5.56rem;

  font-size: 1rem;
  line-height: 2.375rem;

  display: flex;
  justify-content: space-between;

  & > div {
    max-width: 23.5rem;

    & > div {
      display: flex;
      gap: 1.62rem;
      justify-content: center;

      & > * {
        cursor: pointer;
      }
    }
  }
`

export const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${(props) => props.theme['yellow-700']};
  padding: 0;
`

export const BrandFooter = styled.div`
  margin-top: 2.31rem;

  font-size: 0.9375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    font-size: 1rem;
  }
`
