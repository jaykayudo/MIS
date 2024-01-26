import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Form, Button, Input, message,} from "antd";
import { Link } from "react-router-dom";
import Paths from "../../navigation/constant";
import "./login.css";

import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate()
    const onFinish = ()=>{ 
       
        authContext.logUserIn("user");
        message.success("Login Successful");
        navigate(Paths.home)
    }
    const onFinishFailed = ()=>{

    }

    return ( <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
          <h1 style={{textAlign:"center"}}>MIS Login</h1>
        <div className="form-group">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
                type:"email",
                required: true,
                message: 'Please input a valid email',
            },
          ]}
        >
          <Input className="form-input" />
        </Form.Item>
        </div>
        <div className="form-group">
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password className="form-input" />
        </Form.Item>
        <Link to={Paths.forgotpassword}>
            Forgotpassword?
        </Link>
        </div>  
        <Form.Item>
          <Button type="primary" className="form-button" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form> );
}
 
export default Login;