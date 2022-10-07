import React, { useState, useEffect } from "react";

this.state = {
  a,
  b,
  c,
};

const [Object, setObject] = useState({});
const [user, setUsers] = useState("");
const [isLoading, setisLoading] = useState(false);

useEffect(() => {
  console.log("Component is mounted"); //componentDidMount()
  return () => { //componentWillUnmount()
    console.log("Component is unmounted");
  };
}, []) 



useEffect(() => {
  console.log("Component is mounted");
  // return () => {
  //   console.log("Component is unmounted");
  // };
}, [Object]);

useEffect(() => {
  console.log("Component is mounted");
  // return () => {
  //   console.log("Component is unmounted");
  // };
}, [user, isLoading]);



useEffect(() => {
  first

  return () => {
    second
  }
}, [third])


callApi;

setisLoading(true);
setUsers(apiResponse); //Each state has to updated individually
setisLoading(false); //3 Renderings

export const About = () => {
  return <div>About</div>;
};

// lifecycle method = useEffect Hook
// state = useState
