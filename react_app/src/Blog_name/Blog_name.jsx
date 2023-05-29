import './Blog_name.scss'
import Blog_name_item from './Blog_name_item/Blog_name_item';

function Blog_name () {
    return(
    <div className='blog-name-wrapper'>
        <div className="logo"></div>
        <div><p>Blog name</p></div>
        <div className="blog-name-item-wrapper">
            <Blog_name_item></Blog_name_item>
            <Blog_name_item></Blog_name_item>
            <Blog_name_item></Blog_name_item>
            <Blog_name_item></Blog_name_item>
            <Blog_name_item></Blog_name_item>
        </div>
    </div>
    )
};


export default Blog_name;