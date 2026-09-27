"use client"
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const e = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await e.json();
    setData(data);
    console.log(data);
  };
  getData();
  return (
    <div >
      <main >
        <h1>Home</h1>
        <p>
          {data.url}
        </p>
      </main>
    </div>
  );
}
