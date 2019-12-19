// @flow
import type { Team } from "../types/CommonTypes";

import React, { type Node, type Element } from "react";
import SDText from "../components/common/SDText";
import TeamTile from "../components/teams/TeamTile";

import "../css/division.css";

type Props = {
  name: string,
  teams: Array<Team>,
};

function Division(props: Props): Node {
  const { name, teams } = props;

  return (
    <div className="divisionWrapper">
      <SDText size="header1" weight="bold">
        {name}
      </SDText>
      <div className="divisionTeamCollection">
        {teams.map((team: Team): Element<typeof TeamTile> => (
          <TeamTile key={team.name} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Division;
