import { SpotlightedItem } from './SpotlightedItem'

import image1 from '../../assets/spotlighted-items/image1.png'
import image2 from '../../assets/spotlighted-items/image2.png'
import image3 from '../../assets/spotlighted-items/image3.png'
import image4 from '../../assets/spotlighted-items/image4.png'
import image5 from '../../assets/spotlighted-items/image5.png'
import image6 from '../../assets/spotlighted-items/image6.png'
import image7 from '../../assets/spotlighted-items/image7.png'
import image8 from '../../assets/spotlighted-items/image8.png'

import { SpotlightedItemsContainer } from './styles'

export const SpotlightedItemsSection = () => {
  return (
    <SpotlightedItemsContainer>
      <div>
        <h2>PRODUTOS EM DESTAQUE</h2>
        <div>
          <SpotlightedItem
            category="Lustre"
            imgUrl={image1}
            title="Lustre suspenso rústico"
            oldValue="1.500,00"
            newValue="1.000,00"
            fractionalPrice="3x de R$ 333,33"
          />
          <SpotlightedItem
            category="Lâmpadas"
            imgUrl={image2}
            title="Lâmpada"
            oldValue="1.500,00"
            newValue="1.000,00"
            fractionalPrice="3x de R$ 333,33"
          />
          <SpotlightedItem
            category="Acessórios"
            imgUrl={image3}
            title="Lustre suspenso rústico"
            oldValue="1.500,00"
            newValue="1.000,00"
            fractionalPrice="3x de R$ 333,33"
          />
          <SpotlightedItem
            category="Ferramentas"
            imgUrl={image4}
            title="Kit de ferramentas"
            oldValue="1.500,00"
            newValue="1.000,00"
            fractionalPrice="3x de R$ 333,33"
          />
          <SpotlightedItem
            category="Utensílios domésticos"
            imgUrl={image5}
            title="Lustre suspenso rústico"
            oldValue="1.500,00"
            newValue="1.000,00"
            fractionalPrice="3x de R$ 333,33"
          />
          <SpotlightedItem
            category="Acessórios"
            imgUrl={image6}
            title="Garfos de mesa inox"
            oldValue="1.500,00"
            newValue="1.000,00"
            fractionalPrice="3x de R$ 333,33"
          />
          <SpotlightedItem
            category="Utensílios domésticos"
            imgUrl={image7}
            title="Ventilador 2 em 1, mesa e parede"
            oldValue="1.500,00"
            newValue="1.000,00"
            fractionalPrice="3x de R$ 333,33"
          />
          <SpotlightedItem
            category="Acessórios"
            imgUrl={image8}
            title="Lustre suspenso rústico"
            oldValue="1.500,00"
            newValue="1.000,00"
            fractionalPrice="3x de R$ 333,33"
          />
        </div>
      </div>
    </SpotlightedItemsContainer>
  )
}
