export default function ListeDeCours(props){
    return props.liste.map((x, index) => <li key={index}>{x}</li>)
}