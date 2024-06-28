

import  {FiHeart} from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"
function Nav ({handleInputChange, query}){
    return( 
   <nav>
    <div className="nav-container">
        <input type="text" placeholder="Search..." className="search-input" onChange={handleInputChange} value={query}></input>
    </div>

    <div className="profile-container">
        <a href="nav-icons">
<FiHeart className="nav-icons"/>
        </a>
        <a href="shopping">
             <AiOutlineShoppingCart  className="nav-icons"/> 
            
        </a>
        <a href="user">
            <AiOutlineUserAdd  className="nav-icons"/>
        </a>
    </div>
   </nav>
    )
}
export default Nav