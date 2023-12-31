# Important JS basic
   1. NaN , '' , undefined , 0 , false , null --- these are all falsy values in JS


# Namaste React



# Namaste Food
/**
 * Header
 *  - Logo 
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Cards
 *      -- Img
 *      -- Name of Res, Start Rating, Cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


 # There are two types of Exports/Imports
 # 1. Default Export/Import 
    -- export default <Component-name>
    -- import <Component-name> from <file-name>

 # 2. Named Export/Import : when we want to export multiple things from one single file we use named export
    -- export const variable,function
    -- import {variable, function} from file-name

# React Hooks
    Normal JS utility function and two of the most imp. hooks are,
    - useState() -- Super powerful State variables in react
    - useEffect()

# Lazy loading
   Code splitting , Lazy loading , dynamic bundling , on demand loading , chunking all are lazy loading

   So when we do initial bundle and if we dont have any lazy loading components, the bundle happens for all the components and that makes the bundle size large and takes loading time high and this comes bottle neck if we have large number of components. if we do lazy loading then the performance in terms of loading the page increases and gives better UX.

   implementation,
   const Grocery = lazy(()=>import('./grocery'))

   and also if we do lazy loading we need to wrap the component call around Suspense component with a fallback prop in Suspense component

   <Suspense fallback={<h1>Loading</h1>}>
      <Grocery>
   </Suspense>


# Redux toolkit
   1. Install @reduxjs/toolkit and react-redux
   2. Build or store
   3. Connect our store with our App( using Provider)
   4. Create Slice(s) (cart slice)
   5. Dispatch (action)
   6. Selector

# Testing Setup
   1. Install React testing library
   2. Install jest library
   3. Install babel dependencies (get them from jest docs)
   4. Configure babel (create babel.config.js file and copy paste the content we get from jest docs)
   5. Configure parcel file (create .parcelrc file and copy paste the content from jest docs)
   6. Run npx jest --init (it will ask few questions, answer them and it will create a config file)
   7. Install jsdom library (if jest version is >= 28)
   8. Install @babel/preset-react (to let jsx works in the test case environment)
   9. Include the above lib in babel config file and add runtime:'automatic'
   10. Install @testing-library/jest-dom (to get access to dom/document)

   Create __tests__ (dunder method) folder. This is the folder that holds all the test cases. When we run npm jest, the f/w looks for this folder and execute each test file as a suite and each test/it function as an individual tests.

   It requires to be __tests__ and inside that we can have file extentoin as .test.j(t)s or .spec.j(t)s , because the regex is written in such a way for the jest framework.

   We can write each test as a test function ,
      
      eg. test("some meaningful description that describes the following test",()=>{

         //Assertion
         expect(<>).toBe or toBeEqualTo etc..
      })

      we can also wrap the multiple tests inside a describe function like,

         describe('group multiple related tests',()=>{
            test('test1',()=>{})
            test('test2',()=>{})
            etc..
         })

      Also we can interchangebly use test and it, they are one and the same .

      Also using describe is completely optional.(ofcourse testing it self is optional, pun intended)


