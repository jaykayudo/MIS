import "../login/login.css";
import {Form, Button, Input,message} from "antd";
import Paths from "../../navigation/constant";
import { useNavigate } from "react-router-dom";
const CreatePassword = ()=>{
    const navigate = useNavigate();
    const onFinish =()=>{
        message.success("New password created");
        navigate(Paths.login);

    }
    const onFinishFailed = ()=>{

    }
    return (
        <div>
            <div className='form-box'>
            <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
          <h1 style={{textAlign:"center"}}>Create New Password</h1>
          <div>
            <p style={{color:"black", textAlign:"center", marginBottom: 10, marginTop: 10}}>
                A 6-digit code was sent to your email.
            </p>
          </div>
          <div className="form-group">
        <Form.Item
          label="Code"
          name="code"
          rules={[
            {
                type:"number",
              required: true,
              maxLength: 6,
              message: 'Please input the code!',
            },
          ]}
        >
          <Input className="form-input" />
        </Form.Item>
        </div>
          <div className="form-group">
        <Form.Item
          label="New Password"
          name="newpassword1"
          rules={[
            {
              required: true,
              message: 'Please input your new password!',
            },
          ]}
        >
          <Input.Password className="form-input" />
        </Form.Item>
        </div>
        <div className="form-group">
        <Form.Item
          name="newpassword2"
          label="Confirm Password"
          dependencies={['newpassword']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered does not match!'));
              },
            }),
          ]}
        >
          <Input.Password className="form-input" />
        </Form.Item>
        </div>  
        <Form.Item>
          <Button type="primary" className="form-button" htmlType="submit">
            Change Password
          </Button>
        </Form.Item>
      </Form>
            </div>
        </div>
    )
}
export default CreatePassword;