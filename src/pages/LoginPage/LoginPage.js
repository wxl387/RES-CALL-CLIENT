import React, { Component } from "react";
import API from "../../utils/API";
import { Panel, PanelHeading, PanelBody, PanelBtn } from "../../components/Panel";

class LoginPage extends Component {
    state = {
        username: "",
        password: "",
        validation: ""

    };

    checkUser = () => {
        API.checkpwd(
            {
                username: this.state.username,
                password: this.state.password
            }
        )
            .then(res => {
                this.setState({ validation: res.data });
                this.setState({ username: "", password: "" });
                this.checkLogin();
            }
            )
            .catch(err => console.log(err));
    };

    checkLogin = () => {
        console.log(this.state.validation);
        if (this.state.validation === "login successfully") {
            console.log("go to next page");
            this.goToNextPage();
        } else {
            console.log(this.state.validation);
        }
    };

    goToNextPage = () => {
        const path = "/MainPage";
        this.props.history.push(path);
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        this.checkUser();
        this.setState({ username: "", password: "" });
    };

    render() {
        return (
            <div>
                <Panel>
                    <PanelHeading />
                    <PanelBody
                        type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <PanelBody
                        type="password"
                        placeholder="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <p>{this.state.validation}</p>
                    <br />
                    <PanelBtn
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >Log in </PanelBtn>
                    <a href="/RegisterPage">Register</a>

                </Panel>
            </div>
        );
    }
}

export default LoginPage;