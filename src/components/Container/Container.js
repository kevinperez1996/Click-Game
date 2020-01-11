import React from "react";
import "./Container.css";

//stateless component
const Container = props => <div className="Container">{props.children}</div>;

export default Container;