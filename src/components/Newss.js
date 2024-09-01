import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class Newss extends Component {
    static defaultProps={
      country:"in",
      pageSize:10,
      category:"general"
    }
    static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
    }
     capitaliseFirstLetter=(string) => {
        return string.charAt(0).toUpperCase()+string.slice(1);
    
    }
    
    constructor(props){
        super(props);
        this.state={
         articles:[],
         loading:false,
         page:1
        }
        document.title=`${this.capitaliseFirstLetter(this.props.category)}-NewsApp`;
    }
    
     async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5eac9ba3a384337bad88b43e104d2c0&page=1&pageSize=${this.props.pageSize} `;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
     }

     handlePrevClick=async()=>{
        console.log("Previous");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5eac9ba3a384337bad88b43e104d2c0&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
           page:this.state.page-1,
           articles:parsedData.articles
        })
        
     }

     handleNextClick=async()=>{
        console.log("Next");
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5eac9ba3a384337bad88b43e104d2c0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles
        
        })

    }
    
     }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsApp-Top {this.capitaliseFirstLetter(this.props.category)} Headlines </h1>      
        <div className="row">
            {this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url}>
               <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}
                imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
                date={element.publishedAt} source={element.source.name}/>
            
            </div>
            })}
            </div>
            < div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr;Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>
   
    )
  }
}

export default Newss
