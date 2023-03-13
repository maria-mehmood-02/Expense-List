import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap'
import "./EmpHeader.css";

export default function EmpHeader() {
    const fname = "Employee";
    const lname = "Name";
  return (
    <>
        <Navbar color='light' light expand='md'>
            <NavbarBrand className="brand">Hi, {fname} {lname}</NavbarBrand>
            <Nav className='left-navbar justify-content-end'>
                <NavItem>
                    <NavLink to="/"><Button variant='outline-secondary'>Logout</Button></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </>
  )
}
