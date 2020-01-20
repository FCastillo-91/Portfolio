import React from "react";
// import { Route, NavLink, HashRouter } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import { tsConstructorType } from "@babel/types";


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Fiona Castillo",
            headerLinks: [
                { title: 'Home', path: "/" },
                { title: 'About', path: "/About" },
                { title: 'Contact', path: "/Contact" }
            ],
            home: {
                title: "Be Bold, Think Differently",
                subtitle: "My Journey through Tech",
                text: "Check out my projects below"
            },
            about: {
                title: "About Me"
            },
            contact: {
                title: "Let's Talk"
            }
        }
    }

    render() {
        return (
            <div>Hello from React</div>
        );
    }
}

export default Main;