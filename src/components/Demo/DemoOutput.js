import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log('DEMO')
    return <MyParagraph>{props.show ? "This is new " : ""}</MyParagraph>;
}

export default React.memo(DemoOutput)