// @flow
import type { Team } from "../types/CommonTypes";

import React, { useEffect, useState, type Node } from "react";
import Page from "../components/Page";
import Teams from "../lib/Teams";
import TeamTile from "../components/TeamTile";

import "../css/teams.css";

function Index(): Node {
  const [teams, setTeams] = useState<Array<Team>>([]);

  useEffect(() => {
    async function initialSetup() {
      if (teams.length === 0) {
        const teams = await Teams.fetchTeamsInformation();
        setTeams(teams);
      }
    }

    initialSetup();
  });

  console.log(teams);
  const divisionToTeamsMap = Teams.buildDivisionToTeamsMap(teams);
  return (
    <Page>
      {Object.keys(divisionToTeamsMap).map(divisionName => (
        <div className="teamTileCollection">
          {divisionToTeamsMap[divisionName].map(team => (
            <TeamTile key={team.name} team={team} />
          ))}
        </div>
      ))}
    </Page>
  );
}

export default Index;
