
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Blogs from './components/Bloogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Banner from './components/Header/Banner/Banner'
import Header from './components/Header/Header'

function App() {
  const [cook, setCook] = useState([])
  // reading time


  const handaleToAddCook = (cooki) => {
    const isExist = cook.find(item=>item.recipe_id === cooki.recipe_id);
    if(!isExist){
      setCook([...cook,cooki]);
    }
    else{
      toast('Already Exist')
    }
  }
  

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className=''>
        <div className='text-center'>
          <h3 className='text-4xl text-center mt-10'>Our Recipes</h3>
          <p className='mt-5'>Perfectly cooked spaghetti noodles tossed in a decadent sauce made from eggs, crispy bacon, Parmesan cheese,  <br /> This classic dish is quick to prepare and guaranteed to satisfy your cravings for comfort food. <br /> Serve it up for a cozy dinner at home or impress your guests with a taste of Italian culinary delight.</p>
        </div>
        <div className=' grid grid-cols-12  mt-10 gap-5'>
          <Blogs handaleToAddCook={handaleToAddCook}> </Blogs>
          <Bookmarks cook={cook} ></Bookmarks>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>

  )
}
export default App
