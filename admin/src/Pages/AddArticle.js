import React,{useState,useEffect} from 'react'
import marked from 'marked'
import '../static/css/AddArticle.css'
import {Row,Col,Input,Select,Button,DatePicker, message} from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl.js'
const {Option} = Select
const {TextArea} = Input

function AddArticle(props){

    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('Preview') //html内容
    const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('Waiting for editing') //简介的html内容
    const [showDate,setShowDate] = useState()   //发布日期
    const [updateDate,setUpdateDate] = useState() //修改日志的日期
    const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType,setSelectType] = useState('Choose article type') //选择的文章类别

    useEffect(()=>{
        getTypeInfo()
    },[])

    marked.setOptions({
        renderer:marked.Renderer(),
        gfm:true,
        pedantic:false,
        sanitize:false,
        tables:true,
        breaks:false,
        smartLists:true,
        smartypants:false,
    })

    const changeContent = (e)=>{
        setArticleContent(e.target.value)
        let html = marked(e.target.value)
        setMarkdownContent(html)
    }

    const changeIntroduce = (e)=>{
        setIntroducemd(e.target.value)
        let html = marked(e.target.value)
        setIntroducehtml(html)
    }

    const getTypeInfo = ()=>{
        axios({
            method:'get',
            url:servicePath.getTypeInfo,
            withCredentials:true
        }).then(
            res=>{
                if(res.data.data === "nologin"){
                    console.log('hello world')
                    localStorage.removeItem('openId')
                    props.history.push('/')
                }else{
                    setTypeInfo(res.data.data)
                }
            }
        )
    }
    
    const selectTypeHandler = (value) =>{
        setSelectType(value)
    }
    
    const saveArticle=()=>{
        if(!selectedType){
            message.error('Choose Article Type!')
            return false
        }else if(!articleTitle){
            message.error('Article Title can not be empty!')
            return false
        }else if(!articleContent){
            message.error('Article Content can not be empty!')
            return false
        }else if(!introducemd){
            message.error('Article Introduce can not be empty!')
            return false
        }else if(!showDate){
            message.error('Release Date can not be empty!')
            return false
        }
        message.success('Release!')
    }

    return(
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input 
                                value={articleTitle}
                                placeholder="Blog Title"
                                size="large"
                                onChange={e=>{setArticleTitle(e.target.value)}}
                            />
                        </Col>
                        <Col span={4}>
                            <Select defaultValue={selectedType} size="large" onChange={selectTypeHandler}>
                                {
                                    typeInfo.map((item,index)=>{
                                        return (<Option key={index} value={item.Id}>{item.typeName}</Option>)
                                    })
                                }                       
                            </Select> 
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea
                                className="markdown-content"
                                rows={20}
                                placeholder= "ArticleContent"
                                onChange={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div className="show-html"
                                dangerouslySetInnerHTML={{__html:markdownContent}}
                            ></div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span="24">
                            <Button size="large">Temp Article</Button>
                            &nbsp;
                            <Button type="primary" size="large" onClick={saveArticle}>Release Article</Button>
                            <br/>
                        </Col>
                        <Col span="24">
                            <br/>
                            <TextArea
                                rows={4}
                                placeholder="Article Abstract"
                                onChange={changeIntroduce}
                            >
                            </TextArea>
                            <br/><br/>
                            <div className="introduce-html"
                                dangerouslySetInnerHTML={{__html:introducehtml}}
                            ></div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker 
                                    onChange={(date, dateString)=>{setShowDate(dateString)}}
                                    placeholder="Release Date"
                                    size="large"
                                />
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker 
                                    placeholder="Change Date"
                                    size="large"
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AddArticle
