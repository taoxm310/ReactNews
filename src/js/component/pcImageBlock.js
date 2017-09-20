import React from 'react'
import { Card } from 'antd'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

export default class PCImageBlock extends React.Component {
    constructor(){
        super();
        this.state={
            news:''
        }
    }
    componentWillMount(){
        

        let myFetchOptions = {
            method:'GET',
        }

        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`, myFetchOptions)
        .then(response => response.json())
        .then(json => this.setState({news: json}));
    }


	render(){
        const styleImage = {
            display:"block",
            width:this.props.imageWidth,
            height:90 +'px'
        }

        const styleH3 = {
             width:this.props.imageWidth,
             whiteSpace:"nowrap",
             overflow:"hidden",
             textOverflow:"ellipsis"
        }

        const {news} = this.state
        const newsList = news.length 
        ?
        news.map((newsItem,index) => (

                <div key={index}>
                    <Link to={`details/${newsItem.uniquekey}`} target="">
                       <div class="custom-image">
                           <img src={newsItem.thumbnail_pic_s} alt="" style={styleImage}/>
                        </div> 
                        <div class="custom-class">
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p style={styleH3}>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </div>
            
        ))
        : "没有加载任何图片"

		return (
			<div class="topNewsList">
             <Router>
                <Card title={this.props.cardTitle} bordered={true} style={{width:this.props.width}}>
                        {newsList}
                </Card>
            </Router>
			</div>
		)
	}
}