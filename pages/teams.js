// @flow
import type { Team } from "../types/CommonTypes";

import React, { type Node } from "react";
import Teams from "../lib/Teams";
import Division from "../components/Division";

import "../css/teams.css";

type Props = {| teams: Array<Team> |};

class TeamsPage extends React.Component<Props> {
  static async getInitialProps() {
    const teams = await Teams.fetchTeamsInformation();
    return { teams };
  }

  render(): Node {
    const { teams } = this.props;

    const divisionToTeamsMap = Teams.buildDivisionToTeamsMap(teams);
    const divisions: Array<string> = Object.keys(divisionToTeamsMap);
    return divisions.map(divisionName => (
      <Division
        key={divisionName}
        name={divisionName}
        teams={divisionToTeamsMap[divisionName]}
      />
    ));
  }
}

export default TeamsPage;
