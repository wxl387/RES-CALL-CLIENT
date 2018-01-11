import React, { Component } from "react";
import API from "../../utils/API";
import { Panel, PanelHeading, PanelBody, PanelBtn } from "../../components/Panel";

// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Redirect,
//     withRouter
//   } from 'react-router-dom';
// import MainPage from "../MainPage";



class LoginPage extends Component {
    state = {
        username: "",
        password: "",
        validation: "bad",
    };


    checkUser = () => {
        API.checkpwd(
            {
                username: this.state.username,
                password: this.state.password
            }
        )
            .then(res => {
                // console.log("loginPage");
                // console.log(res.data);
                this.setState({ validation: res.data });
                // console.log(this.state.validation);
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
            console.log("fix problems");
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
                <form>
                    <p>Username: {this.state.username}</p>
                    <p>{this.state.validation}</p>

                    <input
                        type="text"
                        placeholder="abc123"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />

                    <p>Password: {this.state.password}</p>

                    <input
                        type="password"
                        placeholder="Abc12#"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />

                    <hr />

                    <button onClick={this.handleFormSubmit}>Login</button>

                </form>

                <div>

                    <Panel>
                        <PanelHeading />
                        <PanelBody
                            type="text"
                            placeholder="abc123"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                        <PanelBody
                            type="password"
                            placeholder="Abc12#"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />

                        <PanelBtn
                            disabled={!(this.state.username && this.state.password)}
                            onClick={this.handleFormSubmit}
                        >Log in </PanelBtn>
                    </Panel>
                </div>
            </div>
        );
    }
}

export default LoginPage;