import React, { Suspense, lazy, useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
// import About from './components/About';
// import About  from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import Demo from './components/Demo';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import CartView from './components/CartView';
// import Grocery from './components/Grocery';

//unique key(best practice) >>> index as key >>> not using keys(not acceptable)

//Code splitting , Lazy loading , dynamic bundling , on demand loading , chunking 

const Grocery = lazy(()=>import('./components/Grocery'))
const About = lazy(()=>import('./components/About'))

const AppLayout = () =>{
    const userInfo = useContext(UserContext);
    const [userName,setUserName] = useState(userInfo.name)
    return (
        // to override the value anywhere in the children comps of Context, we can use setUserName to set the new value inside the child comps of context in use Context
        <Provider store={appStore}>
            <UserContext.Provider value={{name:userName , setUserName}}>
                <div className='app'>
                    <Header/>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const routes = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/about',
                element:(
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu />
            },
            {
                path:'/demo',
                element:<Demo />
            },
            {
                path:'/cart',
                element:<CartView/>
            },
            {
                path:'/grocery',
                element:(
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery />
                </Suspense>
                )
            }
        ],
        errorElement:<Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />)