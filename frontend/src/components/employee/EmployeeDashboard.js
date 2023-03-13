import React, { useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import EmpHeader from './EmpHeader'
import './EmployeeDashboard.css';
import { Link } from 'react-router-dom';

export default function EmployeeDashboard() {

    const [isVisible, setisVisible] = useState(false);
    const [isAddExpVisible, setisAddExpVisible] = useState(true);
    const [formData, setformData] = useState({
        title: '',
        amount: '',
        date: ''
    });
    const [expense_data, setExpense_data] = useState([
        {
            id: 1,
            title: "Laptop Hard Disk",
            amount: 25000,
            date: "2023-03-25",
            status: "Pending"
        },
        {
            id: 2,
            title: "Laptop SSD",
            amount: 5000,
            date: "2023-03-25",
            status: "Pending"
        }
    ]);

    const handleInput = (e) => {
        e.target.value = e.target.value.replace("[^0-9]/g", "");
    };

    const handleSubmit = (e) => {
        console.log(formData.title + formData.amount + formData.date);
        if (formData.title === '' || formData.amount === '' || formData.date === '') {
            alert("Please fill all the required fields!");
        } else if (isVisible === true && isAddExpVisible === false) {
            setisVisible(!isVisible);
            setisAddExpVisible(!isAddExpVisible);
            const exp_data = [...expense_data, {
                id: expense_data.length + 1,
                title: formData.title,
                amount: formData.amount,
                date: formData.date,
                status: "Pending"
            }];
            setExpense_data(exp_data);
        }
    };

    const handleAddExpense = (e) => {
        if (isVisible === false && isAddExpVisible === true) {
            setisVisible(!isVisible);
            setisAddExpVisible(!isAddExpVisible);
        }
    };

    const handleInputChange = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleEdit = (id) => {
        // setisVisible(!isVisible);
        // setisAddExpVisible(!isAddExpVisible);
        if (isVisible === false && isAddExpVisible === true) {
            setisVisible(!isVisible);
            setisAddExpVisible(!isAddExpVisible);
            const exp_data = expense_data.filter(item => item.id === id)[0];
            // exp_data = exp_data[0];
            formData.title = exp_data.title;
            formData.amount = exp_data.amount;
            formData.date = exp_data.date;
            console.log(formData);
        }
    };

    const handleDelete = (id) => {
        const data = expense_data.filter(item => item.id !== id);
        setExpense_data(data);
        console.log(expense_data);
    };

    return (
        <>
            <EmpHeader />
            <Container>
                {isVisible &&
                    <div>
                        <Form id='edit'>
                            <Form.Group>
                                <Row className="row">
                                    <Col md={4}>
                                        <Form.Control name='title' value={formData.title} onChange={handleInputChange} type='text' placeholder='Enter title' />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control name='amount' value={formData.amount} onChange={handleInputChange} onInput={handleInput} type='number' placeholder='Enter amount' />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control name='date' value={formData.date} onChange={handleInputChange} type='date' />
                                    </Col>
                                    <Col md={1}>
                                        <Button onChange={handleInputChange} onClick={handleSubmit} variant='primary'>Submit</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </div>
                }
                {isAddExpVisible &&
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleAddExpense} variant='primary'> <AiOutlinePlus /> Add Expense</Button>
                    </div>
                }
                <Table striped>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expense_data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.amount}</td>
                                <td>{item.date}</td>
                                <td>{item.status}</td>
                                <td>
                                    <Link onClick={() => handleEdit (item.id)} to='#edit'> <FaPencilAlt /> </Link>
                                    <Link onClick={() => handleDelete(item.id)}> <ImCross /> </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
