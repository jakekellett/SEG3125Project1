import twitterImg from './images/TwitterFeed.png';

const TwitterFeed = () => {
    return ( 
        <div className="twitterFeed">
            <h2 className="twitterTitle">Trending Now</h2> 
            <img className="twitterImg" src={twitterImg} alt="news" />
    </div>
    );
}
 
export default TwitterFeed;