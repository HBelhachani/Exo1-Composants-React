import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShowTime/>

    <App/>
    
  </StrictMode>,
)
function ShowTime() {
  const hours = new Date().getHours();
  let timeOfDay;

  timeOfDay = hours < 12 ? "morning" : (hours >= 12 && hours < 17) ? "afternoon" : (hours < 21) ? 'evening' : 'night'

  return (
    <h1>Good {timeOfDay}</h1>
  );
}