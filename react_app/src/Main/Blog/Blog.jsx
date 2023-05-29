import './Blog.scss'
import Blog_item from './Blog_item/Blog_item';

function Blog() {
    return (
        <div className='blog-wrapper'>
            <p>Blog</p>
            <div className='blog-item-wrapper'>
                <Blog_item></Blog_item>
                <Blog_item></Blog_item>
                <Blog_item></Blog_item>
                <Blog_item></Blog_item>
            </div>
        </div>
    )
}

export default Blog;