import { Button } from '../../components/Button'

import womanTelesales from '../../assets/hospedagempro-faq-pessoa-bg.png'

import { TelesalesContainer } from './styles'

export const TelesalesSection = () => {
  return (
    <TelesalesContainer>
      <div>
        <div>
          <img src={womanTelesales} alt="mulher utilizando um celular" />
        </div>
        <Button>acione nosso televendas</Button>
      </div>
    </TelesalesContainer>
  )
}
