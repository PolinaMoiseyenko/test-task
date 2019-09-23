import React, { Component } from 'react';
import { Modal, Button, Table, Icon, Form } from 'antd';
import { AddCar } from './AddCar';
import { tsImportEqualsDeclaration } from '@babel/types';

export class CarsModal extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }


  

  showModal = () => {
    this.setState({
      modalVisible: true
    })
  };

  hideModal = () => {
    this.setState({
      modalVisible: false
    })
  };


render() {

  const carColumns = [
    {
      title: 'Make',
      dataIndex: 'make',
    },
    {
      title: 'Model',
      dataIndex: 'model',
    },
    {
      title: 'Year',
      dataIndex: 'year',
    },
    {
      title: 'VIN',
      dataIndex: 'vin',
    }
  ];

  const { hideModal, selectedClient } = this.props;
  return (
    <div>
      <Modal
        title="Cars"
        visible={this.props.visible}
        footer={[
          <Button onClick={() => this.showModal()}><Icon type="plus-circle" theme="filled" />Add new car</Button>,
        ]}
        onOk={() => hideModal()}
        onCancel={() => hideModal()}
      >
        {selectedClient &&
          <div>
            {selectedClient.cars ?
              <Table
                dataSource={selectedClient.cars}
                columns={carColumns}
                size="small"
                pagination={false}
              ></Table>
              : <span>Please, add a car.</span>
            }
            <AddCar visible={this.state.modalVisible} hideModal={this.hideModal} clientId={selectedClient.id} addNewCar={this.props.addNewCar}/>
          </div>
        }

      </Modal>
    </div>
  )
}
}
export default CarsModal