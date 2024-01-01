import { Provider } from "react-redux"
import Header from "../components/Header"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import {fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'



it('should render the login button in the header component',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button',{name:'Login'});     
    expect(loginButton).toBeInTheDocument()
})

it('should render header component with the cart items 0',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
  const cartItems0 = screen.getByText('Cart 0')  
  expect(cartItems0).toBeInTheDocument()
})

it('Check if Cart with any number of items is there with regex',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cart = screen.getByText(/Cart/)
    expect(cart).toBeInTheDocument()
})

it('Check if logout comes in the UI on button click ',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginBut = screen.getByRole('button',{name:'Login'})
    fireEvent.click(loginBut)
    const logoutBut = screen.getByRole('button',{name:'Logout'})
    expect(logoutBut).toBeInTheDocument()
})