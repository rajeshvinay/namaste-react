/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *  </div>
*   <div id="child2">
*      <h1>I'm h1 tag</h1>
*      <h2>I'm h2 tag</h2>
*   </div>
 * </div>
 * 
 * 
 * 
 */

const heading1 = React.createElement('h1',{id:'heading1',key:'1'},"Hello Nested Block");
const heading2 = React.createElement("h2",{id:'heading1',key:'2'},"Sibling Tag")

const child1 = React.createElement("div",{id:'child',key:'c1'},[heading1,heading2])
const child2 = React.createElement("div",{id:'child2',key:'c2'},[heading1,heading2])

const parent = React.createElement("div",{id:"parent"},[child1,child2])





// const heading = React.createElement('h1',{className:"heading"},"Hello world from React!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)