import React, { useState, useEffect } from "react"
import BioDataForm from "./bio-data-form"
import BioTable from './bio-data-table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { API_URL, USER_SUBMIT_ERROR, USER_DELETE_ERROR, USER_FETCH_ERROR } from '../shared/constant-values'
const BioData = () => {
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error(USER_FETCH_ERROR, error);
        }
    };

    const handleSave = async (formData) => {
        try {
            if (formData.id) {
                await fetch(`${API_URL}/${formData.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
            } else {
                await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
            }
            fetchData();
            setCurrentData(null);
        } catch (error) {
            console.error(USER_SUBMIT_ERROR, error);
        }
    };

    const handleEdit = (item) => {
        setCurrentData(item);
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            fetchData();
        } catch (error) {
            console.error(USER_DELETE_ERROR, error);
        }
    };

    const handleView = (item) => {
        alert(JSON.stringify(item, null, 2));
    };
    return (
        <Container>
            <Row xs={1} md={2}>
                <Col><BioDataForm saveFormData={handleSave} currentData={currentData} /></Col>
                <Col><BioTable userData={data} onEdit={handleEdit} onView={handleView} onDelete={handleDelete} /></Col>
            </Row>
        </Container>
    )
}

export default BioData
