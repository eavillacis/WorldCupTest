async function getMatches() {
  const matchesResponse = await fetch(
    "https://63223e77fd698dfa2909708c.mockapi.io/api/matches"
  );
  return await matchesResponse.json();
}

const getTeams = (matches) => {
  const teamsArr = [];
  for (let i = 0; i < matches.length; i++) {
    if (!teamsArr.includes(matches[i].home)) {
      teamsArr.push(matches[i].home);
    }
    if (!teamsArr.includes(matches[i].visit)) {
      teamsArr.push(matches[i].visit);
    }
  }
  return teamsArr;
};

export const useGetScores = async () => {
  const matches = await getMatches();
  console.log(matches);
  const resultsArr = [];
  const teams = getTeams(matches);
  for (let i = 0; i < teams.length; i++) {
    let wins = 0;
    let ties = 0;
    for (let j = 0; j < matches.length; j++) {
      if (matches[j].home === teams[i]) {
        if (matches[j].homeScore > matches[j].visitScore) {
          wins++;
        } else if (matches[j].homeScore === matches[j].visitScore) {
          ties++;
        }
      }
      if (matches[j].visit === teams[i]) {
        if (matches[j].visitScore > matches[j].homeScore) {
          wins++;
        } else if (matches[j].homeScore === matches[j].visitScore) {
          ties++;
        }
      }
    }

    const score = {
      team: teams[i],
      score: wins * 3 + ties * 1
    };
    resultsArr.push(score);
    wins = 0;
    ties = 0;
  }
  return resultsArr;
};
