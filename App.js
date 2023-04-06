import React, { useState } from 'react';

export default function App() {

  const [isClicked, setIsClicked] = useState(false)

  function myFunction() {
  
    let element = document.body;

    element.classList.toggle("dark");

    setIsClicked(isClicked => !isClicked);
  }

  return (
  <>
    <button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</button>
    <header>
        <h1 className="center">Dark Mode Test</h1>
    </header>
  </>
  );
}