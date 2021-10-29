import React from "react";
import EmployeesPage from "./EmployeesPage";
import {connect} from "react-redux";
import {
    addUserActionCreator,
    getUsers,
    onDeleteUser,
    updateNewUserNameActionCreator
} from "../../redux/employeesReducer";

class EmployeesContainerPage extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }


    render() {
        return <EmployeesPage
            users={this.props.users}
            onDeleteUser={this.props.onDeleteUser}
            updateText={this.props.updateNewUserNameActionCreator}
            addUser={this.props.addUserActionCreator}
        />
    }
}

let mapStateToProps = (state) => {
    return ({
        newTextUserName: state.employeesPage.newUserName,
        users: state.employeesPage.users,
    })
};

export default connect(mapStateToProps, {
    getUsers,
    updateNewUserNameActionCreator,
    onDeleteUser,
    addUserActionCreator
})(EmployeesContainerPage);