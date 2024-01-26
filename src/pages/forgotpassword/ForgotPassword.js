import { useContext } from "react";
import {Form, Button, Input,message} from "antd";
import { Link } from "react-router-dom";
import Paths from "../../navigation/constant";
import "../login/login.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const onFinish = ()=>{
        message.success("A 6 digit code has been sent to your email.");
        navigate(Paths.createpassword);
        
    }
    const onFinishFailed = ()=>{
        message.error("Fill the fields properly");
    }

    return ( <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
          <h1 style={{textAlign:"center"}}>MIS Forgot Password</h1>
        <div className="form-group">
        <Form.Item
          label="Your Email"
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
        <Link to={Paths.login}>
            Remember Password?
        </Link>
        <Form.Item>
          <Button type="primary" className="form-button" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> );
}
 
export default ForgotPassword;