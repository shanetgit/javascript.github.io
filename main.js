// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory=(specimanNum , dna) => { 
  return 
}
speciman
dna,


mutate(){

function getRandomInt(){
  return Math.floor(Math.random()*this.dna.length);

} console.log(getRandomInt);

let newBase = returnRandBase();
while(this.dna[randIndex]===newBase) {
  newBase = returnRandBase();
}
this.dna[randIndex] =newBase;
return this.dna;
}

compareDNA(otherOrg) {
  const similarities = this.dna.reduce((acc,curr,idx,arr))=>{
    if(arr[idx]===otherOrg.dna[idx]){
      return acc + 1;
    }else{
      return acc;
    }

    }, 0);
    const percentOfDNAshared =(similarities/ this.dna.length)*100;
    const percentageTo2Deci = percentOfDNAshared.toFixed(2);
    console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageToDeci}%DNA in common.`);
  
};

const dna = (['C','G']) => {
  let = Math.floor(Math.random)*60% 
  if (this.dna['C'] >= 60 ||this.dna['G'] >=60 ){
    return PAequorFactory()
  }
    
  }
 willLikelySurvive(){
    if (this.dna['C'] >= 60 ||this.dna['G'] >=60 ){

      return true

    }else {
      return false;
    }
  }
const survivingspecimen = [];
let idCounter =1;
while( survivingspecimen.length < 30){
  let neoOrg = pAequorFactory(idCounter, mockUpStrand());
  if(newOrg.willLikelySurvive()) {
    survivingspecimen.push(newOrg);
  }
  idcounter++;
}
console.log(survivingspecimen)



const sampleFactory = () =>{
  return{
    pAequor.compareDNA()
    
  }
}
function total(dna){
  return Number.parseFloat(dna).toFixed()
}
console.log(total)









