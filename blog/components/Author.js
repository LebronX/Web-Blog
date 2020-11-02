import {Avatar,Divider} from 'antd'
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons'
import '../static/style/components/author.css'


const Author = ()=>{
    return(
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src='https://lebronx.github.io/img/img.jpg' />
            </div>
            <div className="author-introduction">
                Software Testing
                <Divider>Social Account</Divider>
                <Avatar size={28} icon = {<GithubOutlined />} className="account" />
                <Avatar size={28} icon = {<QqOutlined />} className="account" /> 
                <Avatar size={28} icon = {<WechatOutlined />} className="account" /> 
            </div>
        </div>
    )
}

export default Author