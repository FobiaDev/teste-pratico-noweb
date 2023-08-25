import { Button } from '../../components/Button'

import { FaArrowDown } from 'react-icons/fa'

import { BannerContainer, BannerInfo } from './styles'

export const BannerSection = () => {
  return (
    <BannerContainer>
      <div>
        <BannerInfo>
          <h2>ILUMINE O SEU DIA A DIA!</h2>
          <p>
            Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a
            dia! Temos produtos para toda sua casa com a melhor qualidade e
            atendimento da região!
          </p>

          <div>
            <Button>veja nossos produtos</Button>
            <Button solid={false}>veja nossos produtos</Button>
          </div>

          <span>
            <FaArrowDown size={35} />
            Role para ver mais
          </span>
        </BannerInfo>
      </div>
    </BannerContainer>
  )
}
