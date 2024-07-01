import React, { useState, useRef } from 'react'
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";



const Navbar = () => {

  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () =>{
     setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
   
    {title: "Jewelry & Accessories", path: "/Jewelry"},
    {title: "Clothing & Shoes", path: "/cloths"},
    {title: "Home & Living", path: "/house"},
    {title: "Wedding & Party", path: "/party"},
    {title: "Toys & Entertainment", path: "/toys"},
    {title: "Art & Collectables", path: "/arts"},
    {title: "Craft supplies & Tools", path: "/craft"}


  ]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
        <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block'/>
        <a href="/"><img src="" alt="" /></a>
        <div className='text-lg text-black sm:flex items-center gap-4 hidden'>

        <Button onClick={() => setOpenModal(true)} className='flex items-center gap-2'><FaUser /> Login</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <a href="/" className='flex items-center gap-2'><FaShoppingBag /> Shoping</a>
        </div>

        {/* navbar for sm devices */}

        <div className='sm:hidden'>
          <button onClick={toogleMenu }>
               {
          isMenuOpen ? <FaTimes className='w-5 h-5 text-Black'/> :  <FaBars className='w-5 h-5 text-Black'/>

               }
                        
               </button>
        </div>
        </nav>

        
        <hr />

        {/* categoty items */}
<div className='pt-4'>
  <ul className='lg:flex items-center justify-between text-Black hidden'>
        {
          navItems.map(({title, path}) => (
            <li key={title} className='hover:text-red-900'>
           <Link to={path}>{title}</Link>
            </li>
          ))
        }
  </ul>
</div>

{/* only mobile menu */}

<div>
<ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
        {
          navItems.map(({title, path}) => (
            <li key={title} className='hover:text-red-900 my-3 cursor-pointer'>
           <Link to="/">{title}</Link>
            </li>
          ))
        }
  </ul>
</div>
    </header>
  )
}

export default Navbar
