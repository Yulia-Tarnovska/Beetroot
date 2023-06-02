import './Header.scss';
import Contact from '../assets/Contact.svg'

function Header () {
    return (
    <div className='header-wrapper'>
         <div>
        <p>Зв'язатися з нами </p>
        <span>Залиш нам повідомення, а ми відповімо якнайшвидше</span>
        </div>
        <img src = {Contact}  alt="image" />
    </div>
    )
}

export default Header;