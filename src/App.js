import React, { useEffect} from 'react'

import CoverTimeout from './components/CoverTimeout';

function App() {
  useEffect(() => {
    const favicon = document.getElementById("favicon");

    
    if (!favicon) return
    
    console.log(favicon)
    const updateFavicon = () => {
      console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        console.log('dark theme, change to light icon')
        favicon.href = "/favicon-light.png";
      } else {
        console.log('dark theme, change to dark icon')
        favicon.href = "/favicon-dark.png";
      }
    };

    // Run initially
    updateFavicon();

    // Add a listener for theme changes
    const themeChange = window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateFavicon);

    return () => {
      themeChange?.removeEventListener("change", updateFavicon);
    };
  }, []);

  return (
    <div className="App font-helvetica">
      <CoverTimeout />
    </div>
  );
}

export default App;
