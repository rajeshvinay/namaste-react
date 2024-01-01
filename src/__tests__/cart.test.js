import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../components/RestaurantMenu"
import MOCK_DATA from '../mocks/ResMenu.json';
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import CartView from "../components/CartView";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    })
})

it('should load restaurant menu component',async()=>{
    await act(async()=>render(<RestaurantMenu />));
    expect(screen.getByText(/for two/)).toBeInTheDocument()
})

it('should chack any oif the cards',async()=>{
    await act(async()=>render(<RestaurantMenu/>))
    const chizza = screen.getByText('CHICKEN CHIZZA (5)')
    expect(chizza).toBeInTheDocument()
})

it('should expand the accordion',async()=>{
    await act(async()=>render(<Provider store={appStore}><RestaurantMenu/></Provider>))
    const cc = screen.getByText("CHICKEN CHIZZA (5)")
    fireEvent.click(cc)

    expect(screen.getAllByTestId('foodItems').length).toBe(5)
})

it('should be able to add items to the cart',async()=>{
    await act(async()=>render(<BrowserRouter><Provider store={appStore}><Header /><RestaurantMenu/></Provider></BrowserRouter>))
    const cc = screen.getByText("CHICKEN CHIZZA (5)")
    fireEvent.click(cc)
    const addBtn = screen.getAllByTestId('add-btn');
    fireEvent.click(addBtn[0])

    const cartValue = screen.getByText('Cart 1')
    expect(cartValue).toBeInTheDocument()
    fireEvent.click(addBtn[0])
    expect(screen.getByText('Cart 2')).toBeInTheDocument()

})

it('should get the data from cart view as well',async()=>{
    await act(async()=>render(<BrowserRouter><Provider store={appStore}><Header /><CartView></CartView><RestaurantMenu/></Provider></BrowserRouter>))
    const cc = screen.getByText("CHICKEN CHIZZA (5)")
    fireEvent.click(cc)
    const addBtn = screen.getAllByTestId('add-btn');
    fireEvent.click(addBtn[0])

    const cartValue = screen.getByText('Cart 3')
    expect(cartValue).toBeInTheDocument()
    fireEvent.click(addBtn[0])
    expect(screen.getByText('Cart 4')).toBeInTheDocument()

    const cartView = screen.getAllByTestId('det-cart')
    expect(cartView.length).toBe(4) 

    const delBtn = screen.getByTestId('cart-delete-btn')
    fireEvent.click(delBtn)

    expect(screen.getByTestId('cartEmpty')).toBeInTheDocument()

})



