import React, { Component } from "react";
import API from "../../utils/API";
import { Panel, PanelHeading, PanelBody, PanelBtn } from "../../components/Panel";

class RegisterPage extends Component {
    state = {
        username: "",
        password: "",
        validation: "",
        isValidUsername: false,
        isValidPassword: false
    };

    addUser = () => {
        API.add(
            {
                username: this.state.username,
                password: this.state.password
            }
        )
            .then(res => {
                this.setState({ validation: res.data });
                this.setState({ username: "", password: "" });
                this.checkRegistration();
            }
            )
            .catch(err => console.log(err));
    };

    checkRegistration = () => {
        if (this.state.validation === "Username has been added") {
            this.goToNextPage();
        } else {

            console.log("error on adding new user");
        }
    };

    goToNextPage = () => {
        const path = "/LoginPage";
        this.props.history.push(path);
    };

    handleUserNameChange = event => {
        const { name, value } = event.target;

        const isValid = value.length > 5
        this.setState({
            [name]: value
        });
        this.setState({ isValidUsername: isValid });
    };

    handlePWDChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

        const isValid = value.length > 5

        console.log("isValid", isValid);
        this.setState({ isValidPassword: isValid });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.addUser();
        this.setState({ username: "", password: "" })
    };

    render() {
        return (
            <div>
                <Panel>
                    <PanelHeading />
                    <PanelBody
                        type="text"
                        placeholder="abc123(at least 6)"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleUserNameChange}
                    />
                    <PanelBody
                        type="password"
                        placeholder="Abc12#(at least 6)"
                        name="password"
                        value={this.state.password}
                        onChange={this.handlePWDChange}
                    />

                    <PanelBtn
                        disabled={!(this.state.isValidUsername && this.state.isValidPassword)}
                        onClick={this.handleFormSubmit}
                    >Register </PanelBtn>
                    <a href="/LoginPage">Log in</a>
                </Panel>
            </div>
        );
    }
}

export default RegisterPage;