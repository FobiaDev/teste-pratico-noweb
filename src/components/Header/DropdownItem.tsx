import { NavLink } from 'react-router-dom'

import { DropdownItemContainer, ItemImage } from './styles'

interface DropdownItemProps {
  url: string
  imageUrl: string
  title: string
  alt?: string
}

export const DropdownItem = ({
  url,
  imageUrl,
  title,
  alt = '',
}: DropdownItemProps) => {
  return (
    <DropdownItemContainer>
      <NavLink to={url}>
        <div>
          <span>{title}</span>
          <ItemImage>
            <img src={imageUrl} alt={alt} />
          </ItemImage>
        </div>
      </NavLink>
    </DropdownItemContainer>
  )
}
