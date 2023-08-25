import styled from 'styled-components'

import decorationHeader from '../../assets/header-decoration.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;

  display: grid;
  grid-template-columns: 41.2% 58.8%;

  & > img {
    margin: auto 16.44rem auto auto;
  }

  background-image: url(${decorationHeader});
  background-repeat: no-repeat;
`

export const Nav = styled.nav`
  padding-left: 9.87rem;

  background-color: ${(props) => props.theme['yellow-700']};

  border-radius: 9.375rem 0 0 9.375rem;

  display: flex;
  align-items: center;
  gap: 1.88rem;

  & > a,
  & > div > a {
    color: ${(props) => props.theme['blue-800']};

    text-decoration: none;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &.active {
      border-bottom: 3px solid ${(props) => props.theme.white};
      font-weight: 500;
    }
  }

  & > div > ul {
    display: none;
  }

  & > div:hover > ul {
    display: inherit;
  }

  & > div {
    position: relative;
  }

  & a {
    cursor: pointer;
  }
`

export const ContactButton = styled.button`
  padding: 0.92rem 2.25rem;

  background-color: ${(props) => props.theme['blue-800']};

  font-weight: 700;
  color: ${(props) => props.theme.white};
  line-height: 0.7;

  border: 0;
  border-radius: 0.63rem;

  cursor: pointer;
`

export const Dropdown = styled.ul`
  width: max-content;
  padding: 2.53rem 1.87rem;
  position: absolute;
  left: calc(-50% - 4.65rem);
  top: 2.5rem;
  background-color: ${(props) => props.theme.white};

  border-radius: 0.9375rem;

  filter: drop-shadow(0px 20px 30px #000);

  & * {
    text-decoration: none;
  }

  & > li:not(:last-child) {
    margin-bottom: 1.25rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 20px solid ${(props) => props.theme.white};
  }
`

export const DropdownItemContainer = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }

  & > a > div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    gap: 1.25rem;

    & > span {
      font-size: 1.125rem;
      font-weight: 500;
      color: ${(props) => props.theme['blue-800']};
    }
  }
`

export const ItemImage = styled.div`
  width: 4.25rem;
  height: 4.25rem;

  background-color: ${(props) => props.theme['yellow-700']};

  border-radius: 0.9375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    max-width: 3.75rem;
    max-height: 3.75rem;
  }
`
