import './Nav.css'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai'
const Nav = ({handleInputChange,query}) => {
  return (
    <nav>
        <div className="nav-container">
            <input
            onChange={handleInputChange} 
            type="text"
            value={query}
            className='search-input'
            placeholder="Enter your search shoes." />
        </div>
        <div className="profile-container">
            <a href="#a">
                <FiHeart className='nav-icons'/>
            </a>
            <a href="#b">
                <AiOutlineShoppingCart className='nav-icons'/>
            </a>
            <a href="#c">
                <AiOutlineUserAdd className='nav-icons'/>
            </a>
            
        </div>
    </nav>
  )
}

export default Nav