import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface ProductModalProp {
    isOpen: boolean;
    onClose: () => void;
}

function ProductModal({ isOpen, onClose }: ProductModalProp) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        quantity: '',
        price: '',
        category: '',
        status: 'active',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSave = () => {
        console.log('Product Data:', formData);
        onClose();
    }

    return (
        <Modal show={isOpen} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter product name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="archived">Archived</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Product
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProductModal;
