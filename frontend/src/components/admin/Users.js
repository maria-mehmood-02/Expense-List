import React from 'react'
import { Table } from 'react-bootstrap'

export default function Users() {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                    <th>Contact Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>mdo@gmail.com</td>
                    <td>05574873930</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>fat@gmail.com</td>
                    <td>05954884930</td>
                </tr>
            </tbody>
        </Table>
    )
}
