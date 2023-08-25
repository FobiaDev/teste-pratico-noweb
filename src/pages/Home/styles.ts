import styled from 'styled-components'

import telesalesBackground from '../../assets/telesales-background.png'
import telesalesDecoration from '../../assets/footer-decoration.png'
import aboutBackground from '../../assets/about-background.png'
import categoryBackground from '../../assets/category-background.png'
import spotlightedItemsBackground from '../../assets/spotlighted-items-background.png'
import bannerBackground from '../../assets/banner-background.png'
import bannerWoman from '../../assets/banner-woman.png'

export const BannerContainer = styled.div`
  background-image: url(${bannerWoman}), url(${bannerBackground});
  background-repeat: no-repeat;
  background-position:
    right 17.62rem bottom,
    center center;

  & > div {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
  }
`

export const BannerInfo = styled.div`
  padding-top: 5rem;
  padding-bottom: 10rem;

  max-width: 34.6875rem;

  & > h2 {
    font-size: 4.375rem;
    font-weight: 700;
  }

  & > p {
    margin-top: 1.88rem;

    line-height: 2.375rem;
  }

  & > div {
    margin-top: 1.38rem;
    margin-bottom: 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.44rem;
  }

  & > span {
    display: flex;
    align-items: center;
    gap: 0.94rem;
  }
`

export const BannerHighlight = styled.div`
  padding-top: 26.12rem;
  padding-bottom: 5rem;

  display: flex;

  & > div {
    padding: 1.56rem 2.44rem;
    width: max-content;
    height: max-content;

    border-radius: 0.9375rem;

    background-color: ${(props) => props.theme.white};

    color: ${(props) => props.theme['yellow-700']};

    display: flex;
    gap: 0.5rem;
  }
`

export const SpotlightedItemsContainer = styled.div`
  margin-top: 3.12rem;

  background-image: url(${spotlightedItemsBackground});
  background-repeat: no-repeat;
  background-position-x: 14.12rem;

  & > div {
    padding-top: 17.38rem;
    margin: 0 auto;

    max-width: 1140px;

    display: flex;
    flex-direction: column;
    gap: 1.56rem;

    & > h2 {
      margin-left: 14rem;
      font-size: 2.1875rem;
      font-weight: 700;

      max-width: max-content;
    }

    & > div {
      display: flex;
      flex-wrap: wrap;
      gap: 1.8rem;
    }
  }
`

export const ItemPrice = styled.div`
  margin-top: 1.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span:first-of-type {
    padding-left: 0.75rem;

    color: ${(props) => props.theme['blue-800']};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.375rem;
    text-decoration: line-through;
  }

  & > span:last-of-type {
    padding: 1.06rem 0.94rem;

    background-color: ${(props) => props.theme['yellow-700']};

    border-radius: 0.9375rem 0rem 0rem 0.9375rem;

    color: ${(props) => props.theme['gray-600']};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
  }
`

export const FractionalPrice = styled.span`
  margin: 1.5rem auto 0 auto;
  padding: 0.6rem 0.9rem;
  width: max-content;

  border-radius: 0.9375rem 0.9375rem 0rem 0rem;

  display: block;

  background-color: ${(props) => props.theme['gray-200']};

  color: ${(props) => props.theme['gray-600']};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
`

export const ItemCard = styled.div`
  width: 16.4375rem;
  height: 28.125rem;

  border-radius: 0.9375rem;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);

  overflow: hidden;
`

export const TitleCard = styled.span`
  margin: 2.31rem auto 0 auto;
  width: 13rem;

  display: flex;
  justify-content: center;

  color: ${(props) => props.theme['gray-600']};
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  text-align: center;
`

export const ImageCard = styled.div`
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > span {
    padding: 0.5rem 0.94rem;
    background-color: ${(props) => props.theme['gray-300']};

    border-radius: 0rem 3.875rem 3.875rem 0rem;

    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1.0625rem;
    color: ${(props) => props.theme['gray-600']};

    position: absolute;
    top: 0.94rem;
  }

  &::before {
    content: '';

    width: 13.5625rem;
    height: 1.1875rem;

    background-color: ${(props) => props.theme['blue-800']};

    position: absolute;
    bottom: 0;
    left: 1.44rem;

    border-radius: 0.9375rem;
  }
`

export const CategoryContainer = styled.section`
  padding-top: 4.69rem;
  margin-top: 3.75rem;

  background-image: url(${categoryBackground});
  background-repeat: no-repeat;

  & > h2 {
    margin-bottom: 8.81rem;

    font-weight: 700;
    font-size: 2.1875rem;
    text-align: center;
  }

  & > div {
    margin: 0 auto;

    max-width: 1140px;

    display: flex;
    flex-wrap: wrap;
    gap: 2.81rem 1.88rem;
  }
`

export const CategoryItemContainer = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  gap: 1.25rem;

  & > span {
    color: ${(props) => props.theme['yellow-700']};
    font-weight: 700;
    font-size: 1.375rem;

    text-transform: uppercase;
  }
`

export const CategoryImage = styled.div`
  width: 15.4375rem;
  height: 15.4375rem;

  background-color: ${(props) => props.theme['yellow-700']};

  border-radius: 4.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const AboutContainer = styled.section`
  margin-top: 3.75rem;
  padding: 6.13rem 0 8.81rem 0;

  background-color: ${(props) => props.theme['gray-200']};
  background-image: url(${aboutBackground});
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: 4.44rem;

  & > h2 {
    margin-bottom: 2.12rem;

    font-weight: 700;
    font-size: 2.1875rem;
    color: ${(props) => props.theme['blue-800']};
    text-align: center;
  }

  & > div {
    max-width: 1140px;
    margin: 0 auto;

    display: flex;
    align-items: end;
    gap: 1.44rem;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 3.13rem;

      & > article {
        max-width: 34.6875rem;

        color: ${(props) => props.theme['gray-600']};
        line-height: 2.375rem;
      }
    }
  }
`

export const TelesalesContainer = styled.section`
  margin-top: 2.12rem;

  background-image: url(${telesalesBackground});
  background-repeat: no-repeat;
  background-position: bottom;

  & > div {
    max-width: 1140px;
    margin: 0 auto;

    display: flex;
    align-items: end;
    justify-content: center;
    gap: 1.37rem;

    & > div {
      padding-left: 6rem;

      display: flex;
      align-items: center;

      background-image: url(${telesalesDecoration});
      background-position: center left;
      background-repeat: no-repeat;
    }

    & > button {
      margin-bottom: 3.5rem;
    }
  }
`
