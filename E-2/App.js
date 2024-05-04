import React from "react";
import ReactDOM from "react-dom";


//React Element

const heading = React.createElement("h1",{id:"heading"},"React Element"); //creates an object

const jsxHeading = <h1 id= "heading">This is JSX</h1>;

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

//React Component
// Class Based Component
// Functional Component

// React Functional Component
const Title = () => (
    <h1>This is injected Heading</h1>
)

const HeadingComponent = () => {
    return <h1>React Functional Component</h1>
}

const HeadingComponent1 = () => <h1>React Functional Component</h1>


//component composition
const HeadingComponent2 = () => ( 
    <div>
<Title />
{Title()}
<h1>React Functional Component</h1>
</div>)

root.render(<HeadingComponent2 />);
//Render React Component like this

// JSX -  is not html in javascript, it is HTML like syntax