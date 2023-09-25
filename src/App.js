import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
// import About from './components/About';
// import About  from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';

//unique key(best practice) >>> index as key >>> not using keys(not acceptable)

//Code splitting , Lazy loading , dynamic bundling , on demand loading , chunking 

const Grocery = lazy(()=>import('./components/Grocery'))
const About = lazy(()=>import('./components/About'))

const AppLayout = () =>{
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
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