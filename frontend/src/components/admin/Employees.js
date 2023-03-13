import React from 'react'
import { Table } from 'react-bootstrap'

export default function Employees() {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Contact Number</th>
                    <th>Expense Title</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark Otto</td>
                    <td>mdo@gmail.com</td>
                    <td>05574873930</td>
                    <td>Hard Disk</td>
                    <td>25000</td>
                    <td>2023-03-07</td>
                    <td>Pending</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob Thornton</td>
                    <td>fat@gmail.com</td>
                    <td>SSD</td>
                    <td>05954884930</td>
                    <td>2500</td>
                    <td>2023-03-03</td>
                    <td>Pending</td>
                </tr>
            </tbody>
        </Table>
    )
}
