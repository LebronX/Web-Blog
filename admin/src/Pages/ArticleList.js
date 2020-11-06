import React,{useState, useEffect} from 'react'
import {List, Row, Col, Button, Modal, message} from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl.js'
const {confirm} = Modal

function ArticleList(props){
    const [list, setList] = useState([])
    return (
        <div>
            <List 
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>Title</b>
                        </Col>
                        <Col span={4}>
                            <b>Type</b>
                        </Col>
                        <Col span={4}>
                            <b>Release Time</b>
                        </Col>
                        <Col span={4}>
                            <b>View Count</b>
                        </Col>
                        <Col span={4}>
                            <b>Operation</b>
                        </Col>
                    </Row>
                }
                bordered
                dataSource = {list}
                renderItem = {item=>{
                    <List.item>
                        <Row className="list-div">
                            <Col span={8}>
                                {item.title}
                            </Col>
                            <Col span={4}>
                                {item.typeName}
                            </Col>
                            <Col span={4}>
                                {item.addTime}
                            </Col>
                            <Col span={4}>
                                {item.view_count}
                            </Col>
                            <Col span={4}>
                                <Button type="primary">Edit</Button>
                                <Button>Delete</Button>
                            </Col>
                        </Row>
                    </List.item>
                }}
            />
        </div>
    )
}

export default ArticleList