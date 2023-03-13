import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import Employees from './Employees'
import Users from './Users'

export default function AdminDashborad() {
    return (
        <>
            <AdminHeader />
            <Container>
                <Tabs justify>
                    <Tab title="List of Users" eventKey="users">
                        <Users />
                    </Tab>
                    <Tab title="List of Employees" eventKey="emps">
                        <Employees />
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}
