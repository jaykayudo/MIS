import {Form, Button, Input, DatePicker, message, Select} from "antd";
import { Province } from "../../assets/statelga";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Paths from "../../navigation/constant";
const PlanAdd = () => {
    const navigate = useNavigate();
    const states = Province.getStates();
    const [lgas,setLgas] = useState([]);
    const onStateInputChange = (key)=>{
        setLgas(Province.getLocalGovtByName(key));
    }
    const onFinish =()=>{
        message.success("Plan Added");
        navigate(Paths.projectmanagment);
    }
    const onFinishFailed = ()=>{

    }
    return (<div className="box">
        <div className="form-box">
        <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
          <h1 style={{textAlign:"center"}}>MIS Plan Add</h1>
        <div className="form-group">
        <Form.Item
          label="Plan Name"
          name="planname"
          rules={[
            {
                required: true,
                message: 'Please input a plan name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        </div>
        <div className="form-group">
        <Form.Item
          label="Plan Description"
          name="plandescription"
          rules={[
            {
                required: true,
                message: 'Please input a plan description',
            },
          ]}
        >
          <Input />
        </Form.Item>
        </div>
        <div className="form-group">
        <Form.Item
          label="Objective"
          name="objective"
          rules={[
            {
                required: true,
                message: 'Please input the objective',
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        </div>
        <div className="form-group">
        <Form.Item
          label="Describe Priority Areas"
          name="priority_areas"
          rules={[
            {
                required: true,
                message: 'Please input the priority areas',
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        </div>     
        <div className="form-group">
        <Form.Item label="Plan" name={"projectplan"}
        rules={[
            {
                required: true,
                message: 'Select a project plan',
            },
          ]}>
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        </div>
        <div className="side-form-group">
        <div style={{paddingRight: 10}}>
        <Form.Item  label="School Code" name={"school_code"}
            rules={[
                {
                    required: true,
                    message: 'Select a State',
                },
            ]}>
           <Input />
        </Form.Item>
        </div>
        <div style={{paddingLeft: 10}}>
        <Form.Item label="Select SBMS User" name={"user"}
            rules={[
                {
                    required: true,
                    message: 'Select a User',
                },
            ]}>
            <Select>
                <Select.Option value="">----</Select.Option>
            </Select>
        </Form.Item>
        </div>
        </div>
        <div className="side-form-group">
        <div style={{paddingRight: 10}}>
        <Form.Item  label="Grant Amount" name={"grant_amount"}
            rules={[
                {
                    required: true,
                    message: 'Input a Grant Amount',
                },
            ]}>
           <Input />
        </Form.Item>
        </div>
        <div style={{paddingLeft: 10}}>
        <Form.Item label="Currency" name={"currency"}
            rules={[
                {
                    required: true,
                    message: 'Select a Currency',
                },
            ]}>
            <Select>
                <Select.Option value="">----</Select.Option>
                <Select.Option value="naira">NGN</Select.Option>
                <Select.Option value="usd dollar">USD</Select.Option>
                <Select.Option value="britain pounds">GBP</Select.Option>
            </Select>
        </Form.Item>
        </div>
        </div>
        
        <div className="side-form-group">
        <div style={{paddingRight: 10}}>
        <Form.Item  label="State" name={"state"}
            rules={[
                {
                    required: true,
                    message: 'Select a State',
                },
            ]}>
            <Select onChange={onStateInputChange}>
                <Select.Option value="">----</Select.Option>
                {
                    states.map((data,index)=>(
                         <Select.Option key={index} value={data.slug}>{data.name}</Select.Option>
                    ))
                }
               
            </Select>
        </Form.Item>
        </div>
        <div style={{paddingLeft: 10}}>
        <Form.Item label="LGA" name={"lga"}
            rules={[
                {
                    required: true,
                    message: 'Select a Local Government Area',
                },
            ]}>
            <Select>
                <Select.Option value="">----</Select.Option>
                {
                    lgas.map((data,index)=>(
                         <Select.Option key={index} value={data.name}>{data.name}</Select.Option>
                    ))
                }
            </Select>
        </Form.Item>
        </div>
        </div>
        <div className="form-group">
        <Form.Item
          label="Community"
          name="community"
          rules={[
            {
                required: true,
                message: 'Please input a Community',
            },
          ]}
        >
          <Input />
        </Form.Item>
        </div>
        <div className="side-form-group">
          <div style={{paddingRight: 10}}>
                <Form.Item label="Longitude" name={"longitude"}>
                <Input />
                </Form.Item>
          </div>
          <div style={{paddingLeft: 10}}>
                <Form.Item label="Latitude" name={"latitude"}>
                    <Input />
                </Form.Item>
          </div>
        </div>
        <Form.Item>
          <Button type="primary" className="form-button" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
        </div>
    </div>);
}
 
export default PlanAdd;