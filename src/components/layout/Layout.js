import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {FaInfo, FaMap, FaRocket, FaSignOutAlt} from "react-icons/fa";
import {MdDashboard, MdSettings} from "react-icons/md";
import { Layout, Menu, message } from 'antd';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Paths from "../../navigation/constant";
import { AuthContext } from "../../contexts/AuthContext";
import "./layout.css"

const { Header, Sider, Content } = Layout;
  const CustomLayout = (props) => {
    const authContext = useContext(AuthContext);
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const styles = {
        paddingTop: 30, paddingBottom: 30,
        display: "flex",
        alignItems:"center",
        justifyContent:"center"
    }
    const navItem = [
      {
        key: '1',
        icon: <MdDashboard />,
        label: 'Dashboard',
        onClick: ()=>(navigate(Paths.dashboard)),
        style: styles
      },
      {
        key: '2',
        icon: <FaInfo />,
        label: 'Indicator Management',
        onClick: ()=>(navigate(Paths.indicator)),
        style: styles,
      },
      {
        key: '3',
        icon: <FaRocket />,
        label: 'Project Component',
        onClick: ()=>(navigate(Paths.projectmanagment)),
        style: styles,
      },
      {
        key: '4',
        icon: <FaMap />,
        label: 'GIS Map',
        onClick: ()=>(navigate(Paths.gismap)),
        style: styles,
      },
      {
        key: '5',
        icon: <MdSettings />,
        label: 'Settings',
        onClick: ()=>(navigate(Paths.settings)),
        style: styles,
      },
    ]
    const logUserOut = ()=>{
        message.success("Logout Successful");
        authContext.logUserOut();
    }
    return (
      <Layout style={{minHeight:'100vh'}}>
        <Sider trigger={null} 
        breakpoint="md"
        collapsedWidth="0"
        width={250} collapsible collapsed={collapsed}>
        <div className="logo" style={{padding: 20, color:"white",fontSize: 20}}>
            MIS
        </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={navItem}
            className="menu"
            
          />
        </Sider>
        <Layout >
          <Header
            style={{
              padding: "0 10px",
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style:{color:"white",fontSize:"18px"},
              onClick: () => setCollapsed(!collapsed),
            })}
            {
                collapsed && (
                    <div className="logo" style={{padding: 20, color:"white",fontSize: 20}}>
                        MIS
                    </div>
                )
            }
            <div onClick={logUserOut}>
                <FaSignOutAlt color="white" size={18} />
            </div>
          </Header>
          <Content

            style={{
              margin: '16px',
              padding: 24,
              minHeight: 280,
              maxHeight: "85vh",
              overflowY: "auto"
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default CustomLayout;