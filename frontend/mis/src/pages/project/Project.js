import { Button, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import Paths from "../../navigation/constant";
import "./project.css"
const Project = () => {
    const navigate = useNavigate()
    const columns = [
        {
            key: "name",
            title:"Project Name",
            dataIndex:"name"
        },
        {
            key: "cost",
            title:"Project Cost",
            dataIndex:"cost"
        },
        {
            key: "status",
            title:"Project Status",
            dataIndex:"status"
        },
        {
            key: "start",
            title:"Project Start",
            dataIndex:"start"
        },
        {
            key: "end",
            title:"Project End",
            dataIndex:"end"
        },
        {
            key: "action",
            title:"Action",
            render:(_,{id})=><Link to={Paths.projectdetails(id)}>View</Link>
        },
    ]
    const data = [
        {
            id: 1,
            key: '1',
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },
        {
            id: 2,
            key: '2',
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },{
            id: 3,
            key: '3',
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },{
            id: 4,
            key: '4',
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },{
            id: 5,
            key: '5',
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },{
            id: 6,
            key: '6',
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },{
            id: 7,
            key: '7',
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },{
            id: 8,
            key: '8',
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },{
            id: 9,
            key: '9',
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },{
            id: 10,
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },{
            id: 11,
            name:"School Chairs",
            cost: "5000000",
            status:"Started",
            start:"12/01/2024",
            end:"24/01/2024"
        },
    ]
    return ( 
        <div>
            <h2 className="header">Project Component</h2>
            <h2 className="header">Analytics</h2>
        <div className="box">
            <div className="section-metrics">
                <div className="section-metrics-box">
                <div class="metrics-box" style={{backgroundColor:"#fce76273"}}>
                    <div>
                        <p>Number of Projects</p>
                        <h2>3</h2>
                    </div>
                    <div>
                        <FaRocket color="#fce762" />
                    </div>
                </div>
                </div>
                <div className="section-metrics-box">
                <div className="metrics-box" style={{backgroundColor:"#69fff06f"}}>
                    <div>
                        <p>On Track</p>
                        <h2>10</h2>
                    </div>
                    <div>
                        <FaRocket color="#69fff0" />
                    </div>
                </div></div>
                <div className="section-metrics-box">
                <div className="metrics-box" style={{backgroundColor:"#5465ff6c"}}>
                    <div>
                        <p>In Progress</p>
                        <h2>5</h2>
                    </div>
                    <div>
                        <FaRocket color="#5465ff" />
                    </div>
                </div></div>
                <div className="section-metrics-box">
                <div className="metrics-box" style={{backgroundColor:"#f45b6876"}}>
                    <div>
                        <p>Below Target</p>
                        <h2>6</h2>
                    </div>
                    <div>
                        <FaRocket color="#f45b68" />
                    </div>
                </div></div>
                
                </div>
            </div>
            <h2 className="sub-header">List of Projects</h2>
            <div className="box">
                <div className="flex-end pv-2">
                    <Button style={{marginLeft: 10}} onClick={()=>navigate(Paths.projectadd)}>Add Project</Button>
                    <Button style={{marginLeft: 10}} onClick={()=>navigate(Paths.planadd)}>Add Plan</Button>
                    <Button style={{marginLeft: 10}} onClick={()=>navigate(Paths.uploadproject)}>Upload Project</Button>
                </div>
                <div>
                    <Table scroll={{
                        y: 500
                    }} columns={columns} dataSource={data} />
                </div>
            </div>
        </div>
     );
}
 
export default Project;