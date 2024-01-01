import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("contact component tcs",()=>{
    it("Should contain the heading data in the contact component",()=>{
        render(<Contact />)
    
        const heading = screen.getByRole('heading');
        
        expect(heading).toBeInTheDocument();
    })
    
    
    it('should load button inside the component',()=>{
        render(<Contact />);
    
        const button = screen.getByRole('button');
    
        expect(button).toBeInTheDocument()
    })
    
    it("should load two input boxes in the component",()=>{
        render(<Contact />)
    
        const inputBoxes = screen.getAllByRole('textbox')
    
        expect(inputBoxes.length).toBe(2)
    })
})
