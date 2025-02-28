export default function SensorStatus(props){
    return <h3> Le senseur est {props.actif ? 'actif' : 'inactif'} </h3>
}