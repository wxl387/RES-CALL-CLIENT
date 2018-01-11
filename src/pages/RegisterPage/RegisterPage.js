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
                console.log("registerPage");
                console.log(res.data);
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

        console.log("name", name);
        console.log("value", value);
        console.log("value.length", value.length);
        console.log("value type", typeof value);
        const isValid = value.length > 5
        this.setState({
            [name]: value
        });

        
        console.log("isValid", isValid);
        this.setState({isValidUsername: isValid});
    };

    handlePWDChange = event => {
        const { name, value } = event.target;

        console.log("name", name);
        console.log("value", value);
        console.log("value.length", value.length);

        this.setState({
            [name]: value
        });

        const isValid = value.length > 5
        
        console.log("isValid", isValid);
        this.setState({isValidPassword : isValid});

        

    };

    // handleInputChange = event => {
    //     const { name, value } = event.target;

    //     this.setState({
    //         [name]: value
    //     });

        // if (value.length >= 5) {
        //     this.setState({ validation: "good" });
        // }
        // else {
        //     this.setState({ validation: "bad" });
        // };

        // console.log("event.name", name);
        // console.log("event.value", value);
        // //this.checkInput();
        // console.log("username", this.state.username);
        // console.log("password", this.state.password);

    //     const isValid = this.state.username.length > 5
    //         && this.state.password.length > 5;
        
    //     this.setState({isValid: isValid});

    //     console.log("isValid", this.state.isValid);
    // };

    // checkInput = () => {
        // if (this.state.username.length>=5 && this.state.password.length >= 5) {
        //     this.setState({validation: "good"});
        // } else {
        //     this.setState({validation: "bad"});
        // };
        // console.log("username", this.state.username);
        // console.log("password", this.state.password);

        // const isValid = this.state.username.length > 5
            // && this.state.password.length > 5;
        
        // this.setState({isValid: isValid});

    //     console.log("isValid", this.state.isValid);

    // };

    handleFormSubmit = event => {
        event.preventDefault();
        this.addUser();
        this.setState({ username: "", password: "" })
    };

    render() {
        return (
            <div>
                {/* <form>
                    <p>Username: {this.state.username}</p>
                    <p>{this.state.validation}</p>

                    <div>
                        {this.state.message}
                    </div>
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

                    <button onClick={this.handleFormSubmit}>Register</button>
                </form> */}

                <div>

                    <Panel>
                        <PanelHeading />
                        <PanelBody
                            type="text"
                            placeholder="abc123"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleUserNameChange}
                        />
                        <PanelBody
                            type="password"
                            placeholder="Abc12#"
                            name="password"
                            value={this.state.password}
                            onChange={this.handlePWDChange}
                        />

                        <PanelBtn
                            disabled={!(this.state.isValidUsername && this.state.isValidPassword)}
                            onClick={this.handleFormSubmit}
                        >Register </PanelBtn>
                    </Panel>
                </div>
            </div>
        );
    }
}

export default RegisterPage;