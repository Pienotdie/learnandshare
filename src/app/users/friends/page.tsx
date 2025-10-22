"use client";

import {useState} from "react";

async function makePostReq() {
    const response = await fetch(`/api/hello`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: "John"})
    });
    const data = await response.json();
    return {data};
}

export default function Friends() {
    const [message, setMessage] = useState("");

    const onClick = async () => {
        const {data} = await makePostReq();
        setMessage(data.message);
    }
    return <h1> Hey friends, {message} <button onClick={onClick}>Click me</button> </h1>
}