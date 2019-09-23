import React, { Component } from 'react';

import { Table, Button, Icon, Modal } from 'antd';
import { clientsData, deleteClient, addClient } from '../../data.jsx';
import Menu from './Menu';
import CarsModal from './CarsModal';


class Clients extends Component {

    constructor() {
        super();
        this.state = {
            modalVisible: false,
            clientsModalVisible: false,
            selectedClient: null,
            search: ''
        };
        this.showCarsModal = this.showCarsModal.bind(this);
        this.hideCarsModal = this.hideCarsModal.bind(this);
        this.showClientsModal = this.showClientsModal.bind(this);
        this.hideClientsModal = this.hideClientsModal.bind(this);
        this.handleDeleteClient = this.handleDeleteClient.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.addNewClient = this.addNewClient.bind(this);
        this.addNewCar = this.addNewCar.bind(this);
    }

    componentDidMount() {
        this.setState({ clientsData })
    }

    showCarsModal = (index) => {
        this.setState({
            modalVisible: true,
            selectedClient: index
        });
    }

    hideCarsModal = () => {
        this.setState({
            modalVisible: false
        });
    }

    showClientsModal = () => {
        this.setState({
            cllientsModalVisible: true
        });
    }

    hideClientsModal = () => {
        this.setState({
            cllientsModalVisible: false
        });
    }

    handleDeleteClient = (id) => {
        this.setState({
            clientsData: deleteClient(id)
        });
    }

    addNewClient = (client, e) => {
        e && e.preventDefault();
        const newClientsData = this.state.clientsData;
        newClientsData.push(client);
        this.setState((prevState) => ({ clientsData: newClientsData }));
        this.hideClientsModal();
    }

    addNewCar = (car, e, clientId) => {
        debugger
        e && e.preventDefault();
        const newClientsData = this.state.clientsData;
        const editableClient = newClientsData.filter(client => client.id === clientId)
        editableClient[0].cars.push(car);
        this.setState((prevState) => ({ clientsData: [...prevState.clientsData, ...editableClient] }));
        console.log(this.state)
    }

    updateSearch = (value) => {
        this.setState({ search: value })
    }

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                children: [
                    {
                        title: 'First',
                        dataIndex: 'name.first'
                    },
                    {
                        title: 'Last',
                        dataIndex: 'name.last'
                    }
                ]
            },
            {
                title: 'Date of birth',
                dataIndex: 'dob',
                render: dob => dob.date
            },
            {
                title: 'Adress',
                dataIndex: 'location',
                render: location => location.street
            },
            {
                title: 'Email',
                dataIndex: 'email'
            },
            {
                title: 'Phone',
                dataIndex: 'phone'
            },
            {
                title: 'Cars',
                render: (index) => <Button onClick={() => this.showCarsModal(index)} shape="circle">
                    <Icon type="car" />
                </Button>,
                align: "center"
            },
            {
                render: (index) => <Button shape="circle" onClick={() => this.handleDeleteClient(index)}><Icon type="delete" style={{ color: "red" }} /></Button>,
                align: "center"
            }
        ];

        let filteredData = this.state.clientsData;
        if (this.state.search !== '') {
            filteredData = this.state.clientsData.filter(
                (item) => {
                    let result;
                    const name = item.name.first + ' ' + item.name.last;
                    result = name.indexOf(this.state.search);
                    if (result !== -1) {
                        return item
                    }
                }
            );
        }
        return (
            <div style={{ backgroundColor: "white", height: "100vh" }}>
                <Menu updateSearch={this.updateSearch}
                    showModal={this.showClientsModal}
                    hideModal={this.hideClientsModal}
                    visible={this.state.cllientsModalVisible}
                    addNewClient={this.addNewClient} />
                <CarsModal visible={this.state.modalVisible}
                    hideModal={this.hideCarsModal}
                    selectedClient={this.state.selectedClient}
                    addNewCar={this.addNewCar} />
                <Table
                    dataSource={filteredData}
                    columns={columns}
                    bordered
                    size="middle">
                </Table>
            </div>
        )
    }
}

export default Clients