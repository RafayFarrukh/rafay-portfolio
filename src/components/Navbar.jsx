import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import useResizeObserver from '../hooks/useResizeObserver';
import { useNavigate } from 'react-router-dom';
import {
  Navbar as BootstrapNavbar,
  Nav as BootstrapNav,
} from 'react-bootstrap';
import { mainBody, repos, about, skills } from '../editable-stuff/config.js';
import styled from 'styled-components';

const StyledNavbar = styled(BootstrapNavbar)`
  background-color: ${(props) => (props.isTop ? 'transparent' : '#808080')};
  border-bottom: ${(props) => (props.isTop ? 'none' : '2px solid #3E8E41')};
  transition: background-color 0.5s ease;
`;

const StyledNavbarBrand = styled(BootstrapNavbar.Brand)`
  font-family: 'Courier New', Courier, monospace;
  color: #fff;
  font-size: 1.5rem;
`;

const StyledNavLink = styled.div`
  color: #fff;
  margin: 0 20px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: #d5d5d5;
  }
`;
const StyledAnchor = styled.a`
  color: #fff;
  margin: 0 20px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #d5d5d5;
  }
`;
const Navigation = forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  const navigate = useNavigate();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom],
  );

  useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref?.current?.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  const handleNavClick = (hash) => {
    navigate(`/${hash}`);
    const element = document.getElementById(hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledNavbar
      ref={navbarMenuRef}
      isTop={isTop}
      className='px-3 fixed-top'
      expand='lg'
    >
      <StyledNavbarBrand onClick={() => handleNavClick('#home')}>
        {`<${mainBody.firstName} />`}
      </StyledNavbarBrand>
      <BootstrapNavbar.Toggle
        aria-controls='basic-navbar-nav'
        className='toggler'
      />
      <BootstrapNavbar.Collapse id='basic-navbar-nav'>
        <BootstrapNav className='navbar-nav mr-auto'>
          {repos.show && (
            <StyledNavLink onClick={() => handleNavClick('#projects')}>
              Projects
            </StyledNavLink>
          )}
          <StyledAnchor
            href={about.resume}
            target='_blank'
            rel='noreferrer noopener'
          >
            Resume
          </StyledAnchor>
          {about.show && (
            <StyledNavLink onClick={() => handleNavClick('#aboutme')}>
              About
            </StyledNavLink>
          )}
          {skills.show && (
            <StyledNavLink onClick={() => handleNavClick('#skills')}>
              Skills
            </StyledNavLink>
          )}
        </BootstrapNav>
      </BootstrapNavbar.Collapse>
    </StyledNavbar>
  );
});

export default Navigation;
