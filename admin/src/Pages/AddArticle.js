import React,{useState} from 'react'
import marked from 'marked'
import '../static/css/AddArticle.css'
import {Row,Col,Input,Select,Button,DatePicker} from 'antd'
const {Option} = Select
const {TextArea} = Input

function AddArticle(){
    return(
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input 
                                placeholder="Blog Title"
                                size="large"
                            />
                        </Col>
                        <Col span={4}>
                            <Select defaultValue="1" size="large">
                                <Option value="1">Video Tutorial</Option>
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
                            />
                        </Col>
                        <Col span={12}>
                            <div className="show-html"></div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span="24">
                            <Button size="large">Temp Article</Button>
                            &nbsp;
                            <Button type="primary" size="large">Release Article</Button>
                            <br/>
                        </Col>
                        <Col span="24">
                            <br/>
                            <TextArea
                                rows={4}
                                placeholder="Article Abstract"
                            >
                            </TextArea>
                            <br/><br/>
                            <div className="introduce-html"></div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker 
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
