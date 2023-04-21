import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer } from '../../components';
import { Logo } from './Logo';
import { NavBar } from './NavBar';
import { motion } from "framer-motion";

const Container = styled(FlexContainer).attrs({
    as: 'header',
})`
    flex-direction: column;
    position: relative;
    width: 100%;
    font-size: 1.1rem;
    padding: 0 var(--space-lg);
    margin-bottom: calc(var(--skew-margin-factor) * 100vw);

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: calc(var(--skew-margin-factor) * 100vw);
        width: 100%;
        height: calc(100% + var(--skew-margin-factor) * 100vw);
        transform: skewY(var(--skew-deg)) translate(-50%);
        background-color: var(--color-secondary);
        background-image: 
            repeating-conic-gradient(var(--color-secondary) 0 9deg, transparent 9deg 18deg),
            radial-gradient(var(--color-secondary-dark) 28%, transparent 28%),
            radial-gradient(var(--color-secondary-dark) 28%, transparent 28%);
        background-position: 50% 0%, 0px 0px, 3px 3px;
        background-size: 100% 200%, 6px 6px, 6px 6px;
        border-bottom: var(--border) var(--color-secondary-dark);
    }
    `;

const Wrapper = styled(FlexContainer)`
    justify-content: space-between;
    align-items: stretch;
    position: relative;
    width: 100%;
    max-width: var(--max-width);
    padding: var(--space-sm) 0;
    z-index: 11;

    a:focus-visible {
        outline: none;
    }
    
    h1 {
        font-size: 0.7em;
        background-color: var(--color-background);
        padding: 0.1em;
        border-radius: var(--border-radius);
        transform: skewY(var(--skew-deg));
        margin-bottom: 0.4em;
    }

    & > *:last-child { // margin between Wrapper and Nav
        margin-bottom: calc(var(--skew-margin-factor) * min(100vw, var(--max-width)) * 2);
    }
    `;

const IconsContainer = styled(FlexContainer)`
    width: 50px;
`;

export const Header = () => {
    
    return(
        <Container>
            <Wrapper>
                <FlexContainer $direction='column' $justify='space-between' $align='flex-start'>
                    <Link to='/'><Logo/></Link>
                    <h1 style={{fontSize: "1.5rem"}}>Damian Andres Gonzalez</h1>
                </FlexContainer>
            </Wrapper>
            <NavBar />
        </Container>
    );
};