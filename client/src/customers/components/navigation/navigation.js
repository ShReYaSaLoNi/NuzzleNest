import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Avatar, Button, Menu, MenuItem} from '@mui/material';
import {deepPurple} from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import AuthModal from '../../../Auth/authmodel';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../State/Auth/action';
import { logout } from '../../../State/Auth/action';

const navigation = {
  pages: [
    { name: 'Packages', href: '/packages' },
    { name: 'About', href: '#' },
    { name: 'My Orders', href: '/account/order' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [anchorEl,setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const {auth} = useSelector(store=>store);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleUserClick = (event) =>{
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = (event) =>{
    setAnchorEl(null);
  }

  const handleOpen = () =>{
    setOpenAuthModel(true);
  }

  const handleClose = () =>{
    setOpenAuthModel(false);
  }

  useEffect(()=>{
    if(jwt){
        dispatch(getUser(jwt))
    }
},[jwt,auth.jwt])

  useEffect(()=>{
    if(auth.user){
      handleClose();
    }

    if(location.pathname==='/login' || location.pathname==='/register'){
      navigate(-1);
    }
  },[auth.user])

  const handleLogout = () =>{
    dispatch(logout());
    handleCloseUserMenu();
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{backgroundColor:"#333A73"}}>
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user?.firstName?(
                    <div>
                      <Avatar
                      className='text-black' onClick={handleUserClick} aria-content={open?"basic-menu": undefined} aria-hashpopup="true" aria-expanded={open?"true":undefined} sx={{bgcolor: deepPurple[500], color:"white", cursor:"pointer",}}>
                         {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      <Menu id="basic-menu" anchorEl={anchorEl} open={openUserMenu} onClose={handleCloseUserMenu} MenuListProps={{"aria-labelledby":"basic-button",}}>
                    <MenuItem onClick={handleLogout}>
                        Logout
                    </MenuItem>
                    {/* <MenuItem onClick={handleCloseUserMenu}>
                        Register
                    </MenuItem> */}
                  </Menu>
                    </div>
                  ):(
                    <Button onClick={handleOpen} className="text-sm font-medium text-gray-700 hover:text-gray-800">SignIn</Button>
                  )}
                </div>
                
                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
             
                <div className="ml-4 flow-root lg:ml-2">
                  <a href="/bookings" className="group-m-2 flex items-center p-2">
                    <BookIcon
                      className="flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AuthModal handleClose={handleClose} open={openAuthModel}/>
    </div>
  )
}
