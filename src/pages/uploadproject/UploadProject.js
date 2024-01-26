import {Form, Button, message, Upload} from "antd";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Paths from "../../navigation/constant";
const UploadProject = () => {
    const navigate = useNavigate();
    const onFinish =()=>{
        message.success("Project Added");
        navigate(Paths.projectmanagment);
    }
    const onFinishFailed = ()=>{
        message.error("An Error Occurred");
    }
    const fileprops = {
        name: 'file',
        action: '',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
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
        <p>
            Select Project XLSX file to Upload
        </p>
        <div className="form-group">
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload listType="picture-card" {...fileprops}>
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <FaPlus />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
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
 
export default UploadProject;