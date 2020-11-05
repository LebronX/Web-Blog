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
                </Col>
                <Col span={6}>

                </Col>
            </Row>
        </div>
    )
}

export default AddArticle