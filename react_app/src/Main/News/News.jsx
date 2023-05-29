import './News.scss'
import News_item from './News_item/News_item';

function News () {
   return (
    <div className='news-wrapper'>
        <p>News</p>
        <div className='news-item-wrapper'>
        <News_item></News_item>
        <News_item></News_item>
        <News_item></News_item>
        </div>
    </div>
   )
}


export default News;