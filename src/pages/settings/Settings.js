import { Tabs } from 'antd';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Form, Button, Input, message,} from "antd";
import { Link } from "react-router-dom";
import Paths from "../../navigation/constant";
const Profile = ()=>{
    const onFinish =()=>{

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
      <h1 style={{textAlign:"center"}}>Profile Details</h1>
      <div className="side-form-group">
        <div style={{paddingRight: 10}}>
        <Form.Item
            label="First Name"
            name="first_name"
            rules={[
                {
                required: true,
                message: 'Please input your first name!',
                },
            ]}
            >
      <Input className="form-input" defaultValue={"John"} />
    </Form.Item>
        </div>
    <div style={{paddingLeft: 10}}>
    <Form.Item
      label="Last Name"
      name="last_name"
      rules={[
        {
          required: true,
          message: 'Please input your last name!',
        },
      ]}
    >
      <Input defaultValue={"Doe"}  className="form-input" />
    </Form.Item>
    </div>
    </div>
      
    <div className="form-group">
    <Form.Item
      name="email"
      label="Email"
      rules={[
        {
            type:"email",
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input className="form-input" value={"johndoe@gmail.com"} disabled />
    </Form.Item>
    </div>  
    <Form.Item>
      <Button type="primary" className="form-button" htmlType="submit">
        Update
      </Button>
    </Form.Item>
  </Form>
        </div>
    </div>
    )
}
const Password = ()=>{
    const onFinish =()=>{

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
          <h1 style={{textAlign:"center"}}>Change Password</h1>
          <div className="form-group">
        <Form.Item
          label="Current Password"
          name="currentpassword"
          rules={[
            {
              required: true,
              message: 'Please input your current password!',
            },
          ]}
        >
          <Input.Password className="form-input" />
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

const Settings = () => {
    const tabItems = [
        {
            key: '1',
            label: 'Profile',
            children: <Profile />,
          },
          {
            key: '2',
            label: 'Password',
            children: <Password />,
          },
    ]
    return ( 
        <>
        <h2 className='header'>Settings</h2>
        <Tabs defaultActiveKey="1" items={tabItems} centered  tabBarGutter={300}/>
        </>
     );
}
 
export default Settings;