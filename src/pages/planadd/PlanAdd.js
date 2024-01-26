import {Form, Button, Input, DatePicker, message, Select} from "antd";
import { Province } from "../../assets/statelga";
import { useNavigate } from "react-router-dom";
import Paths from "../../navigation/constant";
const PlanAdd = () => {
    const navigate = useNavigate();
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
                message: 'Please input a plan name',
            },
          ]}
        >
          <Input />
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