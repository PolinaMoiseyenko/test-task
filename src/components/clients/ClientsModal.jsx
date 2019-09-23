import React, { Component } from 'react';
import {
    Modal, Button, Form,
    Input,
    DatePicker,
} from 'antd';

export class ClientsModal extends Component {
    constructor() {
        super();
        this.state = {
            client: {
                id: '',
                name: {},
                location: {},
                email: '',
                dob: {},
                phone: ''
            }
        };
    }

    handleChange = (key, value) => {
        const client = this.state.client;
        if (key === 'first' || key === 'last') {
            client.name[key] = value;
        } else if (key === 'street') {
            client.location[key] = value;
        } else if (key === 'date') {
            debugger
            client.dob[key] = value.format('YYYY-MM-DD')
        } else {
            client[key] = value;
        }
        client.id = Math.floor((Math.random() * (9999 - 999) + 999)).toString();

        this.setState({ value });
    }


    render() {

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        const { hideModal, visible } = this.props;

        return (
            <div>
                <Modal
                    title="Add new client"
                    visible={visible}
                    footer={false}
                    style={{ top: 20 }}
                    onCancel={() => hideModal()}
                >
                    <Form {...formItemLayout} onSubmit={(e) => (this.props.addNewClient(this.state.client, e))}>
                        <Form.Item label="First name">
                            <Input onChange={(value) => (this.handleChange('first', value.target.value))}
                                required={true} />
                        </Form.Item>
                        <Form.Item label="Last name">
                            <Input onChange={(value) => (this.handleChange('last', value.target.value))}
                                required={true} />
                        </Form.Item>
                        <Form.Item label="Adress">
                            <Input onChange={(value) => (this.handleChange('street', value.target.value))}
                                required={true} />
                        </Form.Item>
                        <Form.Item label="E-mail">
                            <Input onChange={(value) => (this.handleChange('email', value.target.value))}
                                required={true} />
                        </Form.Item>
                        <Form.Item label="Date of birth">
                            <DatePicker style={{ width: '100%' }}
                                onChange={(value) => (this.handleChange('date', value))}
                                required={true} />
                        </Form.Item>
                        <Form.Item label="Phone Number">
                            <Input style={{ width: '100%' }}
                                onChange={(value) => (this.handleChange('phone', value.target.value))}
                                required={true} />
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                                </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default ClientsModal