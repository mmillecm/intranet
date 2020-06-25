
import React, { Component } from "react";
import { withRouter,} from "react-router-dom";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import api from "../services/api";
import { login } from "../services/auth";





class SignIn extends Component {
  
  state = {
    email: "",
    password: "",
    error: "",
  };
  
  handleSignIn = async e => {

    e.preventDefault();

    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      
     try {
      const response = await api.post("/sessions", { email, password });
      login(response.data.token);
      this.props.history.push("/app");
    } catch (err) {
      this.setState({
        error:
          "Houve um problema com o login, verifique suas credenciais. T.T"
      });
    }
      
    }
  };

  render() {
    return (
        <Form onSubmit={this.handleSignIn}>
	{this.state.error && <p>{this.state.error}</p>}
        <Form.Group controlId="user">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Coloque seu Email corporativo" onChange={e => this.setState({ email: e.target.value })}/>
        </Form.Group>

        <Form.Group controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" onChange={e => this.setState({ password: e.target.value })}/>
        </Form.Group>
        <Button variant="primary" type="submit" >
            Entrar
        </Button>
    </Form>


    )}} 
    export default withRouter(SignIn);
    