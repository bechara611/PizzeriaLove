import styled from "styled-components"
import { NavLink } from "react-router-dom"
const BotonTipoNavLink = styled(NavLink)`
    &:hover
    {
      text-decoration: underline;
      color: black;
    }
    `

const BotonTipoNavLinkA = styled(BotonTipoNavLink)`
    text-decoration: none;
      color: black;
      cursor:pointer;
    `
export { BotonTipoNavLink, BotonTipoNavLinkA }