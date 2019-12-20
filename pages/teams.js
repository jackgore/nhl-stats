// @flow
import type { Team } from "../types/CommonTypes";

import React, { useEffect, useState, type Node, type Element } from "react";
import Teams from "../lib/Teams";
import Division from "../components/Division";

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

  const divisionToTeamsMap = Teams.buildDivisionToTeamsMap(teams);
  return Object.keys(divisionToTeamsMap).map((divisionName: string): Element<
    typeof Division
  > => (
    <Division
      key={divisionName}
      name={divisionName}
      teams={divisionToTeamsMap[divisionName]}
    />
  ));
}

export default Index;
