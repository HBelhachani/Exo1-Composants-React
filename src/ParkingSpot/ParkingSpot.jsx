export default function ParkingSpot(props){
    return <li> Place {props.dispo ? 'Disponible' : 'Réservée'} {props.dispo && <button onClick={props.onReserve}>Réserver</button>}</li>
}