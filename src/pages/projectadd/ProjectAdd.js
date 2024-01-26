import "./projectadd.css"
import {Form, Button, Input, DatePicker, message, Select} from "antd";
import Paths from "../../navigation/constant";
import { useNavigate } from "react-router-dom";
const ProjectAdd = () => {
    const navigate = useNavigate();
    const onFinish =()=>{
        message.success("Project Added");
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
          <h1 style={{textAlign:"center"}}>MIS Project Add</h1>
        <div className="form-group">
        <Form.Item
          label="Project Name"
          name="projectname"
          rules={[
            {
                required: true,
                message: 'Please input a project name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        </div>
        <div className="form-group">
        <Form.Item
          label="Project Description"
          name="projectdescription"
          rules={[
            {
                required: true,
                message: 'Please input a project desciption',
            },
          ]}
        >
          <Input />
        </Form.Item>
        </div>
        <div className="form-group">
        <Form.Item
          label="Project Cost"
          name="projectcost"
          rules={[
            {
                type: "number",
                required: true,
                message: 'Please input a project cost',
            },
          ]}
        >
          <Input />
        </Form.Item>
        </div>
        
        <div className="form-group">
        <Form.Item label="Project Plan" name={"projectplan"}
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
        <Form.Item label="State" name={"state"}
            rules={[
                {
                    required: true,
                    message: 'Select a State',
                },
            ]}>
            <Select>
                <Select.Option value="">----</Select.Option>
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
            </Select>
        </Form.Item>
        </div>
        </div>
        <div className="form-group">
        <Form.Item
          label="Actual Project Location"
          name="location"
          rules={[
            {
                required: true,
                message: 'Please input the location',
            },
          ]}
        >
          <Input />
        </Form.Item>
        </div>
        <div className="side-form-group">
          <div style={{paddingRight: 10}}>
                <Form.Item label="Source of Funding" name={"source_of_funding"}>
                    <Input />
                </Form.Item>
          </div>
          <div style={{paddingLeft: 10}}>
                <Form.Item label="Currency" name={"currency"}>
                <Select>
                    <Select.Option value="naira">NGN</Select.Option>
                    <Select.Option value="us dollar">USD</Select.Option>
                    <Select.Option value="britain pounds">GBP</Select.Option>
                    <Select.Option value="euros">EUR</Select.Option>
                </Select>
                </Form.Item>
          </div>
        </div>
        <div className="side-form-group">
          <div style={{paddingRight: 10}}>
                <Form.Item label="Level of Completion" name={"level_of_completion"}
                rules={[
                    {
                        type:"number"
                    }
                ]}
                >
                    <Input />
                </Form.Item>
          </div>
          <div style={{paddingLeft: 10}}>
                <Form.Item label="Current Status" name={"status"}>
                <Select>
                    <Select.Option value={1}>Not Started</Select.Option>
                    <Select.Option value={2}>In Progress</Select.Option>
                    <Select.Option value={3}>Completed</Select.Option>
                    <Select.Option value={4}>Cancelled</Select.Option>
                </Select>
                </Form.Item>
          </div>
        </div>
        <div className="side-form-group">
          <div style={{paddingRight: 10}}>
                <Form.Item label="Longitude" name={"longitude"}>
                <DatePicker />
                </Form.Item>
          </div>
          <div style={{paddingLeft: 10}}>
                <Form.Item label="Latitude" name={"latitude"}>
                    <DatePicker />
                </Form.Item>
          </div>
        </div>
        <div className="side-form-group">
          <div style={{paddingRight: 10}}>
                <Form.Item label="Start Date" name={"start"}>
                <DatePicker />
                </Form.Item>
          </div>
          <div style={{paddingLeft: 10}}>
                <Form.Item label="End Date" name={"end"}>
                    <DatePicker />
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
 
export default ProjectAdd;