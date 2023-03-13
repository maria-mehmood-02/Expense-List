import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap'
import './AdminHeader.css';

export default function AdminHeader() {
    return (
        <>
            <Navbar color='light' light expand='md'>
                <NavbarBrand className="brand">Hi, Admin</NavbarBrand>
                <Nav className='left-navbar justify-content-end'>
                    <NavItem>
                        <NavLink to="/"><Button variant='outline-secondary'>Logout</Button></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )
}
