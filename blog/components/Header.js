import React, {useState, useEffect} from 'react'
import '../static/style/components/header.css'
import {Row,Col,Menu} from 'antd'
import {HomeOutlined, SmileOutlined, YoutubeOutlined} from '@ant-design/icons'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiURL'

// Arrow function (anonymous functions, es6)
// 24 Grids in a page
const Header=()=>{
    const [navArray, setNavArray] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    },[])

    const handleClick = (e)=>{
        if(e.key==0){
            // maybe buggy
            Router.push('')
        }
        else{
            Router.push('/list?id='+e.key)
        }
    }

    return (
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
                <Menu mode="horizontal" onClick={handleClick}>
                    <Menu.Item key="0" onClick={handleClick}>
                        <HomeOutlined />
                            Home
                    </Menu.Item>
                    {
                        navArray.map((item)=>{
                            return (
                                <Menu.Item key={item.Id}>
                                    <YoutubeOutlined />
                                    {item.typeName}
                                </Menu.Item>
                            )
                        })
                    }
                    <Menu.Item key="video">
                        <YoutubeOutlined />
                            Video
                    </Menu.Item>

                </Menu>
            </Col>
        </Row>
    </div>
    )
}

export default Header