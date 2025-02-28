let names = ["alice", "bob", "charlie", "dave", "eve"];

let capitalizedNames = names.map(x => x.charAt(0).toUpperCase() + x.slice(1))

console.log(capitalizedNames)