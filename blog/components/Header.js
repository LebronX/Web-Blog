import React from 'react'
import '../static/style/components/header.css'
import {Row,Col,Menu} from 'antd'
import {HomeOutlined, SmileOutlined, YoutubeOutlined} from '@ant-design/icons'


// Arrow function (anonymous functions, es6)
// 24 Grids in a page
const Header=()=>(
    <div className="header"> 
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">
                    Xuan's blog
                </span>
                <span className="header-text">
                    Study as if you were to live forever, live as if you were to die tomorrow
                </span>
            </Col>

            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined />
                            Home
                    </Menu.Item>

                    <Menu.Item key="video">
                        <YoutubeOutlined />
                            Video
                    </Menu.Item>

                    <Menu.Item key="life">
                        <SmileOutlined />  
                            Life
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)


export default Header