let poll = new Map();
function addOption(option){
  if(!option){return "Option cannot be empty."}
  if(!poll.has(option)){
    poll.set(option, new Set()) 
    return `Option "${option}" added to the poll.`
    }
  else if(poll.has(option)){return `Option "${option}" already exists.`}
}

function vote(option, voterId){
  if(!poll.has(option)){return `Option "${option}" does not exist.`}
  let voters = poll.get(option);
  if(voters.has(voterId)){return `Voter ${voterId} has already voted for "${option}".`}
  
  voters.add(voterId);
  console.log(voters)
  return `Voter ${voterId} voted for "${option}".`;
  
}

function displayResults(){
  let finalString = "Poll Results:";
  poll.forEach((value, option) => finalString += `\n${option}: ${value.size} votes`);
  return finalString; 
} 

addOption("gato");
addOption("perro");
addOption("lobo");
vote("gato", 1);
vote("perro", 0);
vote("lobo", 2); 

displayResults()
