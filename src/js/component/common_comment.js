import React from 'react'
import { Card, Row, Col, Input, Tabs, Form, Button, notification, message } from 'antd'
import {Router, Route, Link, browserHistory} from 'react-router-dom'


const FormItem = Form.Item
const TabPane = Tabs.TabPane

class CommonComment extends React.Component {
    constructor(){
        super();
        this.state = {
            comments:'',
        }
    }
    componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({comments: json});
		});
    };
    
	handleSubmit(e) {
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formdata = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		})
    };
    
    addUserCollection() {
		var myFetchOptions = {
			method: 'GET'
		};
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=${localStorage.userid}&uniquekey=${this.props.uniquekey}`, myFetchOptions)
        .then(response => response.json())
        .then(json => {
			//收藏成功以后进行一下全局的提醒
			notification.success({message: 'ReactNews提醒', description: '收藏此文章成功'});
		});
    };
  

    render(){
        let {getFieldDecorator} = this.props.form
        const {comments} = this.state
        const commentList = comments.length
        ? comments.reverse().map((comment,index)=>(
                <Card key={index} title={comment.UserName} extra={<a href="#"> 发表于 {comment.datetime} </a>}>
                    <p>{comment.Comments}</p>
                </Card>
            )
        )
        :
        "没有加载评论";
        return (
            <div class="comment">
                <Row>
                    <Col span={24}>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                             {getFieldDecorator('remark', {
										rules: [{
											required:true,
											message:'请输入您的评论',
										}]
									})(
										<Input type="textarea" placeholder="请输入您的评论" />
									)}
                            </FormItem> 
                            <FormItem>
                                <Button type="primary" htmlType="submit"> 提交评论</Button>
                                <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
                            </FormItem>                          
                        </Form>
                        {commentList}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CommonComment = Form.create({})(CommonComment)