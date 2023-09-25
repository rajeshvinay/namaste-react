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