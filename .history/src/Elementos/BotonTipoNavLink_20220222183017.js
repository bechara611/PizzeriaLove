import styled from "styled-components"
import { NavLink } from "react-router-dom"
    const BotonTipoNavLink = styled(NavLink)`
    &:hover
    {
      text-decoration: underline;
      color: black;
    }
    `

    const BotonTipoNavLinkA=styled.a`
    text-decoration: underline;
      color: black;
    `
    export {BotonTipoNavLink}