import React, { Component } from 'react';
import { Button, Icon, Input } from 'antd';
import ClientsModal from './ClientsModal';

const { Search } = Input;

class Menu extends Component {
    render() {
        return (
            <div style={{ width: "100%", padding: "10px 0" }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <Search
                            placeholder="input search name"
                            onChange={(value) => this.props.updateSearch(value.target.value)}
                            style={{ width: 200 }} />
                    </div>
                    <Button shape="round"
                        onClick={() => this.props.showModal()}
                    ><Icon type="plus-circle" theme="filled" />Add client</Button>
                </div>
                <ClientsModal visible={this.props.visible}
                    hideModal={this.props.hideModal}
                    addNewClient={this.props.addNewClient}></ClientsModal>
            </div>
        )
    }
}

export default Menu