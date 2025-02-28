export default function WeatherCard(props){
    return <li>Temperature: {props.weather.temperature} - Condition : {props.weather.condition}</li>
}