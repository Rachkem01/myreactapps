
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import AkubeDark from './AkubeDark.jpg'

function Sidebar ({handleChange}){
   
return <>
<section className='sidebar'>
    <div className='logo-container'>
        <h1>
            {/* <FiShoppingCart /> */}
            <img src={AkubeDark} style={{width:150, height:150}} className='Logo' alt= "logo"></img>
         
        </h1>
    </div>
    <Category handleChange ={handleChange} />
    <Price handleChange ={handleChange} />
   <Colors handleChange={handleChange} />
</section>
</>
}
export default Sidebar