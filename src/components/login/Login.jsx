import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form, Card, Input, Button, Col } from 'antd';

class Login extends Component {
    render() {
        return (
            <Card style={{ width: 300, margin: "100px auto" }}>
                <h2>Please, log in!</h2>
                <Form className="login-form">
                    <Form.Item>
                        <Input
                            placeholder="Username"

                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Col span={12} offset={8}><Link to="/clients"><Button>Login</Button></Link></Col>

                </Form>
            </Card>

        );
    }
}

export default Login