import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import {Row,Col,List,Breadcrumb} from 'antd'
import {CalendarOutlined,FireOutlined,FolderOutlined} from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import axios from 'axios'
import servicePath from '../config/apiURL'
import Link from 'next/link'

const MyList = (list) => {

  const [mylist,setMylist] = useState(list.data)
  useEffect(()=>{
    setMylist(list.data)
  })


  return(
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} >

        <div className="bread-div">
          <Breadcrumb>
            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>Video</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <List 
          header={<div>  New Blogs</div>}
          itemLayout="vertical"
          dataSource={mylist}
          renderItem={item=>(
            <List.Item>
              <div className="list-title">
                <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                  <a>{item.title}</a>
                </Link>
                {item.title}
              </div>
              <div className="list-icon">
                <span> <CalendarOutlined />{item.addTime}</span>
                <span> <FolderOutlined />{item.typeName}</span>
                <span> <FireOutlined /> {item.viewCount}</span>
              </div>
              <div className="list-context">{item.introduction}</div>
            </List.Item>
          )}
        />
        

      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} >
        <Author />
        <Advert />
      </Col>
    </Row>

    <Footer></Footer>
  </div>
)
}

MyList.getInitialProps = async (context)=>{
  let id = context.query.id

  const promise = new Promise((resolve)=>{
    axios(servicePath.getListById+id).then(
      (res)=>{
        console.log('----->', res.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}

export default MyList
