function createTeams(talent, talentCounts) {
 const teams = [];

 for (let i = 0; i < talent.length; i++) {
   const pos = [];
   const team = [];

   for (let j = i; j < talent.length; j++) {
     team.push(talent[j]);
     if (team.length >= talentCounts) {
       pos.push([...team]);
     }
   }
   teams.push([...pos]);
 }

 const uniqueCombinationLengths = teams.map((pos) => {
   const uniqueCombinations = [];
   for (const team of pos) {
     const uniqueTeam = Array.from(new Set(team));
     if (uniqueTeam.length === team.length) {
       uniqueCombinations.push(uniqueTeam);
     }
   }
   if (uniqueCombinations.length === 0) {
     return -1;
   }
   const maxLength = Math.max(...uniqueCombinations.map((team) => team.length));
   return maxLength;
 });
 console.log(teams)
 return uniqueCombinationLengths;
}

const talent = [1, 2, 3, 4, 2, 5];
const talentCounts = 3;

const uniqueCombinationLengths = createTeams(talent, talentCounts);
console.log(uniqueCombinationLengths);
