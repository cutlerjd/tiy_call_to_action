import React, { Component } from 'react'
import axios from 'axios'
import {Label,Button} from 'semantic-ui-react'

class CampaignReg extends Component {

  constructor(){
    super()
    this.state={
      fname:"",
      lname:"",
      username:"",
      email:"",
      password:"",
      error:''
    }
  }

    handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    submitForm=(e)=>{
      e.preventDefault()
      axios.post('/api/CampaignerReg',{
        fname: this.state.fname,
        lname: this.state.lname,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }).then(resp => {
        this.props.history.push('/registered')
      }).catch(err => {
        console.log(err)
        this.setState({
          error:'Username already taken!'
        })
      })
    }

  render() {
    return(
      <div className="login_wrap wrapper">
        <div className="reg-box" className="inner">
          <div className="box">
            <div className="content">
              <form onSubmit={this.submitForm}>
                  <div className="login-name">
                    <div>
                      <label htmlFor="fname">First Name</label>
                      <input onChange={this.handleChange} type="text" value={this.state.fname} name="fname" placeholder="First Name"/>
                    </div>
                    <div>
                      <label htmlFor="lname">Last Name</label>
                      <input onChange={this.handleChange} type="text" value={this.state.lname} name="lname" placeholder="Last Name"/>
                    </div>
                   <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="email" value={this.state.email} name="email" placeholder="Email"/>
                  </div>
                  <div className="login-user">
                    <label htmlFor="username">Username</label>
                    {this.state.error !== '' ? <p>{this.state.error}</p> : ''}
                    <input onChange={this.handleChange} type="text" value={this.state.username} name="username" placeholder="Username"/>
                    <h6 id="p">Your organization's name may be used for the username</h6>
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" value={this.state.password} name="password"/>
                  </div>
                 </div>
                <Button compact type="submit">Register</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CampaignReg