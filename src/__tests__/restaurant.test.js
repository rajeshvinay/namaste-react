import { screen,render } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard"
import MOCKDATA from '../mocks/restaurantData.json';
import '@testing-library/jest-dom'
import Body from "../components/Body";

// it('should render restaurant card component with props data',()=>{
//     render(<RestaurantCard resData={MOCKDATA} />)

//     const kfcPresence = screen.getByText('KFC');

//     expect(kfcPresence).toBeInTheDocument()
// })

it('should check if ⭐ renders in the res card component',()=>{
    render(<RestaurantCard resData={MOCKDATA} />)
})