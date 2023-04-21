import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer } from '../../components';
import { textOutline } from '../../utils';

const Nav = styled(FlexContainer).attrs({
    as: 'nav',
})`
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    gap: 0.2rem;
    transform: skewY(var(--skew-deg));
    margin-top: -2rem;
    transition: all 0.2s ease-in-out;
    z-index: 11;
    @media (max-width: 1280px) {
        margin-top: -1rem;
    }
    `;

const NavButton = styled(NavLink)`
    font-size: 0.7em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-primary);
    ${textOutline('var(--color-background)')}
    background-color: var(--color-background);
    border: var(--border) var(--color-secondary);
    outline: var(--border) var(--color-background);
    padding: 0.35em 0.1em;
    border-radius: 1px;
    flex: 1;
    transition-property: border, padding;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
    
    &:hover, &:focus-visible {
        border-width: 0.3em;
        padding: 0.25em 0;
    }
    
    &.active {
        border-color: #43FFFF;
    }

    @media (max-width: 1280px) {
        flex-direction: column;
        font-size: 0.5em;

    }
`;

export const NavBar = () => {
    return(
        <Nav>
            <NavButton to="/" activeclassname='active'>Sobre mi</NavButton>
            <NavButton to="/Habilidades" >Hablilidades</NavButton>
            <NavButton to="/Educacion" >Educación</NavButton>
            <NavButton to="/Proyectos" >Proyectos</NavButton>
            <NavButton to="/Contacto" >Contacto</NavButton>
        </Nav>
    );
};