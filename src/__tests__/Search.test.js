import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../components/Body";
import MOCKDATA from '../mocks/mainData.json';
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCKDATA)
        }
    })
})

beforeEach(async()=>{
    await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>))
})



it('should render the body component with search',async ()=>{
//   await act(async()=> render(<BrowserRouter><Body /></BrowserRouter>))
    const search = screen.getByRole('button',{name:'Search Restaurant'})
    const searchInput = screen.getByPlaceholderText('Input');
    fireEvent.change(searchInput,{target:{value:'Burger'}})
    fireEvent.click(search);
    const restCards = screen.getAllByTestId('resCard')
    expect(restCards.length).toBe(1);
})

it("should test top rated restaurants features in the main component", async ()=>{
    

    const totalRes = screen.getAllByTestId('resCard')
    expect(totalRes.length).toBe(9)

    const filterBtn = screen.getByRole('button',{name:'Filter Top Rated Restaurants'})
    fireEvent.click(filterBtn)

    const totalRes2 = screen.getAllByTestId('resCard')
    expect(totalRes2.length).not.toBe(9)
})