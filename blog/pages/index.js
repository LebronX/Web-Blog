import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Row,Col,List} from 'antd'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {CalendarOutlined,FireOutlined,FolderOutlined} from '@ant-design/icons'
import '../static/style/components/index.css'
import servicePath from '../config/apiURL'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'


const Home = (list) => {

  const [mylist,setMylist] = useState(list.data)
  const renderer = new marked.Renderer()

  marked.setOptions({
    renderer:renderer,
    gfm:true,
    pedantic:false,
    sanitize:false,
    tables:true,
    breaks:false,
    smartLists:true,
    highlight:function(code){
      return hljs.highlightAuto(code).value
    }
  })

  return(
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} >
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
              </div>
              <div className="list-icon">
                <span> <CalendarOutlined /> {item.addTime}</span>
                <span> <FolderOutlined /> {item.typeName}</span>
                <span> <FireOutlined /> {item.view_content} views</span>
              </div>
              <div className="list-context" 
                dangerouslySetInnerHTML={{__html:marked(item.introduction)}}
              ></div>
            </List.Item>
          )}
        />
        

      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} >
        <Author />
        <Advert />
      </Col>
    </Row>

    <Footer />  
    </div>
)
}

// getInitialProps 从sql获取数据给前端
Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        resolve(res.data)
      }
    )
  })

  return await promise
}

export default Home
