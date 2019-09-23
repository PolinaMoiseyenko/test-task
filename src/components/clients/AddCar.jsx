import React, { Component } from 'react';
import {
    Modal, Button, Form,
    Input,
} from 'antd';

export class AddCar extends Component {
    constructor() {
        super();
        this.state = {
            car: {}
        };
    }

    

    handleChange = (key, value) => {
        const car = this.state.car;        
        car[key] = value; 
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
                    title="Add new car"
                    visible={visible}
                    footer={false}
                    style={{ top: 20 }}
                    width={300}
                    onCancel={() => hideModal()}
                >
                    <Form {...formItemLayout} onSubmit={(e) => (this.props.addNewCar(this.state.car, e, this.props.clientId))}>
                        <Form.Item label="Make">
                            <Input onChange={(value) => (this.handleChange('make', value.target.value))}
                                required={true} />
                        </Form.Item>
                        <Form.Item label="Model">
                            <Input onChange={(value) => (this.handleChange('model', value.target.value))}
                                required={true} />
                        </Form.Item>
                        <Form.Item label="Year">
                            <Input onChange={(value) => (this.handleChange('year', value.target.value))}
                                required={true} />
                        </Form.Item>
                        <Form.Item label="VIN">
                            <Input onChange={(value) => (this.handleChange('vin', value.target.value))}
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

export default AddCar