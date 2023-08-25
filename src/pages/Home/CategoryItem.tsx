import { CategoryImage, CategoryItemContainer } from './styles'

interface CategoryItemProps {
  title: string
  imageUrl: string
  alt?: string
}

export const CategoryItem = ({
  title,
  imageUrl,
  alt = '',
}: CategoryItemProps) => {
  return (
    <CategoryItemContainer>
      <span>{title}</span>
      <CategoryImage>
        <img src={imageUrl} alt={alt} />
      </CategoryImage>
    </CategoryItemContainer>
  )
}
