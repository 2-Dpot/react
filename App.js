/*jshint esversion: 11 */
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {class:'heading'}, "Some content");
// console.log(document.querySelector("#root"));
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);

//jsx
const Author = () => <div>The author is RARARARARAR</div>;
const authElem = (
    <React.Fragment>
<b>kakaroto vegeta</b>
<b>krillin bulma</b>
</React.Fragment>
);
const ladubaba = "fadubaba";
const jsxHeading = (
    <>
        {ladubaba}
<h1 id="heading" className="blueCol">How is  this valid</h1> 
<h2>asdasd</h2>
{authElem}
 <h1> nahiiiiiiiiii</h1>
<Author/>
    </>
);

//react functional component
const HeadingComponent = () => {
    return jsxHeading;
}
console.log('jsxHeading--', jsxHeading)
console.log('heading--', heading)
const root = ReactDOM.createRoot(document.querySelectorAll("#root")[1]);
// root.render(HeadingComponent());
root.render(<HeadingComponent/>)
