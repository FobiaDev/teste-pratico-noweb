import { CategoryItem } from './CategoryItem'

import { CategoryContainer } from './styles'

import image1 from '../../assets/category/image1.png'

export const CategorySection = () => {
  return (
    <CategoryContainer>
      <h2>CATEGORIAS</h2>
      <div>
        <CategoryItem imageUrl={image1} title="lâmpada" />
        <CategoryItem imageUrl={image1} title="lâmpada" />
        <CategoryItem imageUrl={image1} title="lâmpada" />
        <CategoryItem imageUrl={image1} title="lâmpada" />
        <CategoryItem imageUrl={image1} title="lâmpada" />
        <CategoryItem imageUrl={image1} title="lâmpada" />
        <CategoryItem imageUrl={image1} title="lâmpada" />
        <CategoryItem imageUrl={image1} title="lâmpada" />
      </div>
    </CategoryContainer>
  )
}
