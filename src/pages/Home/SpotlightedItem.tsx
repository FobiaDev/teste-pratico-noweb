import {
  FractionalPrice,
  ImageCard,
  ItemCard,
  ItemPrice,
  TitleCard,
} from './styles'

interface SpotlightedItemProps {
  title: string
  category: string
  imgUrl: string
  oldValue: string
  newValue: string
  fractionalPrice?: string
  alt?: string
}

export const SpotlightedItem = ({
  title,
  category,
  imgUrl,
  oldValue,
  newValue,
  fractionalPrice,
  alt = '',
}: SpotlightedItemProps) => {
  return (
    <ItemCard>
      <ImageCard>
        <span>{category}</span>
        <img src={imgUrl} alt={alt} />
      </ImageCard>
      <TitleCard>{title}</TitleCard>
      <ItemPrice>
        <span>R$ {oldValue}</span>
        <span>R$ {newValue}</span>
      </ItemPrice>
      <FractionalPrice>ou em {fractionalPrice}</FractionalPrice>
    </ItemCard>
  )
}
