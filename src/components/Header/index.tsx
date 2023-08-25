import { NavLink } from 'react-router-dom'

import { DropdownItem } from './DropdownItem'

import logoEletricaJSantos from '../../assets/logo-eletrica-j-santos.svg'
import image1 from '../../assets/category/image1.png'

import { ContactButton, Dropdown, HeaderContainer, Nav } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoEletricaJSantos} alt="" />
      <Nav>
        <NavLink to="/" title="Home">
          Home
        </NavLink>
        <div>
          <NavLink to="/categorias" title="Categorias">
            Categorias
          </NavLink>
          <Dropdown>
            <DropdownItem
              imageUrl={image1}
              url="/categorias/lampadas"
              title="Lâmpadas"
            />
            <DropdownItem
              imageUrl={image1}
              url="/categorias/lustres"
              title="Lustres"
            />
            <DropdownItem
              imageUrl={image1}
              url="/categorias/luminarias"
              title="Luminárias"
            />
            <DropdownItem
              imageUrl={image1}
              url="/categorias/decoracoes"
              title="Decorações"
            />
            <DropdownItem
              imageUrl={image1}
              url="/categorias/acessorios"
              title="Acessórios"
            />
            <DropdownItem
              imageUrl={image1}
              url="/categorias/ferramentas"
              title="Ferramentas"
            />
            <DropdownItem
              imageUrl={image1}
              url="/categorias/utensiliosdomesticos"
              title="Utensílios Domésticos"
            />
            <DropdownItem
              imageUrl={image1}
              url="/categorias/cabos"
              title="Cabos"
            />
          </Dropdown>
        </div>
        <NavLink to="/sobre" title="Sobre">
          Sobre
        </NavLink>
        <NavLink to="localizacao" title="Localização">
          Localização
        </NavLink>
        <ContactButton>Contato</ContactButton>
      </Nav>
    </HeaderContainer>
  )
}
