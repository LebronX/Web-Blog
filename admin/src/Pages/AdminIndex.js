import React,{useState} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../static/css/AdminIndex.css'
import {Route} from 'react-router-dom'
import AddArticle from './AddArticle.js'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex() {

    const [collapsed,setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Work Space
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Add Article
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Article Management">
              <Menu.Item key="3">Add Article</Menu.Item>
              <Menu.Item key="4">Article List</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Comment Management
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Backend Management System</Breadcrumb.Item>
              <Breadcrumb.Item>Work Space</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div>
                <Route path="/index/" exact component={AddArticle} />
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Xuan</Footer>
        </Layout>
      </Layout>
    );
}

export default AdminIndex