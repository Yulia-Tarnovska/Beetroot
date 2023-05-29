import Blog from "./Blog/Blog";
import News from "./News/News";
import './Main.scss'

function Main() {
    return (
        <div className="main-wrapper">
            <Blog></Blog>
            <News></News> 
        </div>
    )
}

export default Main;