import React, { Component } from 'react';
import '../css/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/fetchData'

const mapStateToProps = (state) => {
    return {
        data: state.fetch.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ fetchData }, dispatch)
    }
}

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        a: 25,
      }
    }
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        const news = this.props.data.map((i, key) => {
          let t1 = i.publishedAt.split('T');
          let t = t1[0].split('-');
          let tm = t1[1].split('Z')
          let year = t[0];
          let month = t[1];
          let day = t[2];
          let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
          console.log(t);
            return (
        <a key={key} href={i.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'#010101'}}>
        <div className="news_box">
          <div className="news_image"><img src={i.urlToImage} alt="" /></div>
          <div className="content-box">
            <div className="content_title">{i.title}</div>
            <div className="content_description">{i.description}</div>
            <div className="content_author">{i.author}</div>
            <div className="content_publishtime">{t[2]+" "+months[month-1]+", "+year+" "+tm[0]}</div>
          </div>
          <div className="clearleft"></div>
        </div>
        </a>
        )
        })
        return (
      <div className="App">
        <div className="heading">Top Headline</div>
        <div>{news}</div>
        
      </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);