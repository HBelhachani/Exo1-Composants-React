import './App.css'
import WelcomeBanner from './WelcomeBanner/WelcomeBanner.jsx'

import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'
import SensorStatus from './SensorStatus/SensorStatus.jsx'
import RoomAvailability from './RoomAvailability/RoomAvailability.jsx'
import ListeDeCours from './ListeDeCours/ListeDeCours.jsx'
import VehicleProfile from './VehicleProfile.jsx/VehicleProfile.jsx'
import ModeButton from './ModeButton/ModeButton.jsx'
import TaskList from './TaskList/TaskList.jsx'
import WeatherCard from './WeatherCard/WeatherCard.jsx'
import ParkingSpot from './ParkingSpot/ParkingSpot.jsx'

import { use, useState } from 'react'

const coursDisponibles = ["Mathématiques", "Informatique", "Histoire"];

const vehicles = [
  { brand: "Toyota", model: "Corolla", year: 2022 },
  { brand: "Honda", model: "Civic", year: 2021 },
  { brand: "Ford", model: "Mustang", year: 2020 },
  { brand: "Chevrolet", model: "Camaro", year: 2019 },
  { brand: "BMW", model: "M3", year: 2023 },
  { brand: "Mercedes", model: "C-Class", year: 2022 },
  { brand: "Audi", model: "A4", year: 2021 },
  { brand: "Volkswagen", model: "Golf", year: 2020 },
  { brand: "Nissan", model: "Altima", year: 2019 },
  { brand: "Hyundai", model: "Elantra", year: 2023 }
];

const tasks = [
  {
    title: 'Faire les courses',
    done: true
  },
  {
    title: 'Manger au restaurant',
    done: false
  },
  {
    title: 'Finir le projet',
    done: true
  },
  {
    title: 'Appeler un ami',
    done: false
  },
  {
    title: 'Nettoyer la maison',
    done: true
  },
  {
    title: 'Faire du sport',
    done: false
  }
];

const weatherData = [
  { temperature: "15°C", condition: "Sunny" },
  { temperature: "10°C", condition: "Cloudy" },
  { temperature: "5°C", condition: "Rainy" },
  { temperature: "-5°C", condition: "Snowy" },
  { temperature: "20°C", condition: "Clear" },
];

function App() {
  
  const [disponible, reserve] = useState(true)

  return (
    <>

      {/* <WelcomeBanner name="Haroune"/>
      <SensorStatus actif={false} />
      <SensorStatus actif={true} />
      <RoomAvailability dispo={true} />
      <RoomAvailability dispo={false} />

      Cours Diponibles:
      <ListeDeCours liste={coursDisponibles} />

      Autres cours:
      <ListeDeCours liste={["Biologie", "Physique", "Philosophie"]} /> */}

      {vehicles.map((obj) => <VehicleProfile vehicle={obj} />)}

      <ModeButton fn={() => alert('Mode activé !')} />

      <TaskList tasks={tasks} />

      {weatherData.map(weather => <WeatherCard weather={weather} />)}

      <ParkingSpot dispo={disponible} onReserve={()=> reserve(false)}/>

      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
