import { BrandFooter, Divider, FooterContainer, FooterContent } from './styles'

import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

import logoEletricaJSantos from '../../assets/logo-eletrica-j-santos-negativo.svg'
import logoNoweb from '../../assets/logo-noweb.svg'

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterContent>
          <div>
            <img src={logoEletricaJSantos} alt="" />
            <p>
              Venha na Elétrica J. Santos e garanta a melhor opção para sua
              casa!
            </p>
          </div>

          <div>
            <span>NOS SIGA NAS REDES</span>
            <div>
              <a aria-label="Whatsapp">
                <FaWhatsapp size={22} />
              </a>
              <a aria-label="Instagram">
                <FaInstagram size={22} />
              </a>
              <a aria-label="Facebook">
                <FaFacebook size={22} />
              </a>
            </div>
          </div>
        </FooterContent>

        <Divider />

        <BrandFooter>
          <span>
            © Copyright 2021 - Elétrica J. Santos - Todos os Direitos
            Reservados
          </span>
          <div>
            <span>Desenvolvido por</span>
            <img src={logoNoweb} alt="" />
          </div>
        </BrandFooter>
      </div>
    </FooterContainer>
  )
}
