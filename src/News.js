import news from './images/News.png';
const News = () => {
    return ( 
    <div className="news">
        <h2 className="newsTitle">What's New in the Hockey World?</h2> 
        <img className="newsImg" src={news} alt="news" />
    </div>
    
    );
}
 
export default News;