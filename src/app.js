//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length > 0) {
    return {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2],
    };
  } else {
    return null;
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  const x = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      x.push(players[i]);
    }
  }
  return x;
}


//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  const y = [];
  for (let j = 0; j < players.length; j++) {
    if (players[j].position == position) {
      y.push(players[j]);
    }
  }
  return y;
}


//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  const a = [];
  for (let i = 0; i < players.length; i++) {
    let awards = players[i].awards;
    awards.forEach(function (award) {
      if (award.name == awardName) {
        a.push(players[i]);
      }
    });
  }
  return a;
}


//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  if (!awardName || !noOfTimes) return [];

  let m = [];
  for (let i = 0; i < players.length; i++) {
    let count = 0;
    let awards = players[i].awards;
    awards?.forEach(function (award) {
      if (award.name == awardName) {
        count += 1;
        if (count == noOfTimes) {
          m.push(players[i]);
        }
      }
    });
  }
  return m;
}


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  if (!awardName || !country) return [];

  let p = [];
  for (let i = 0; i < players.length; i++) {
    let countryName = players[i].country;
    if (countryName != country) continue;
    let awards = players[i].awards;
    awards.forEach(function (award) {
      if (award.name == awardName) {
        p.push(players[i]);
      }
    });
  }
  return p;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let e = [];
  for (let i = 0; i < players.length; i++) {
    let awards = players[i].awards;
    let totalAwards = awards.length;
    if (
      totalAwards >= noOfAwards &&
      players[i].team == team &&
      players[i].age < age
    )
      e.push(players[i]);
  }
  return e;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  let j = [];
  for (let i = 0; i < players.length; i++) {
    let age = players[i].age;
    j.push(age);
    j.sort(function (a, b) {
      return b - a;
    });
  }
  return j;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  l = [];
  for (let i = 0; i < players.length; i++) {
    let c = players[i].team;
    if (c == team) {
      let r = players[i].awards;
      l.push(r.length);
      l.sort(function (a, b) {
        return b - a;
      });
    }
  }
  return l;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  let k =[]
for(let i=0;i<players.length;i++){
  let count = 0;
  let b = players[i].awards;
  b.forEach(function(ele){
    if(ele.name == awardName){
    count++
    }
  })
  if(count == noOfTimes && players[i].country == country){
k.push(players[i])
k.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});
  }
}
return k
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  let filteredPlayers = players.filter(player => player.age > age);

  filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));

  filteredPlayers.forEach(player => {
    player.awards.sort((a, b) => b.localeCompare(a));
  });

  return filteredPlayers;
}