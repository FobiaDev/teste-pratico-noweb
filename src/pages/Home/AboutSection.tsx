import { Button } from '../../components/Button'
import { AboutContainer } from './styles'

import aboutImage from '../../assets/about-image.png'

export const AboutSection = () => {
  return (
    <AboutContainer>
      <h2>SUA MELHOR OPÇÃO</h2>

      <div>
        <img
          src={aboutImage}
          alt="fachada do estabelecimento elétrica j. santos"
        />
        <div>
          <article>
            <p>
              Desde 1970 somos especializados em materiais elétricos, sendo uma
              das principais distribuidoras do setor.
            </p>
            <p>
              Oferecemos os melhores produtos, com o preço que cabe no seu bolso
              e atende todas as necessidades do seu dia a dia.
            </p>
            <p>
              Aqui você irá encontrar lustres, luminárias, utilidades
              domésticas, ferramentas, acessórios, lâmpadas, fios e cabos,
              quadros de distribuição, caixas de entrada padrão Eletropaulo,
              materiais elétricos em geral, equipamentos de segurança e
              comunicação.
            </p>
          </article>
          <Button style="secondary">saiba mais sobre nós</Button>
        </div>
      </div>
    </AboutContainer>
  )
}
