// @flow
import type { Team } from "../types/CommonTypes";

import React, { type Node } from "react";
import Head from "next/head";
import SDText from "../components/common/SDText";
import Teams from "../lib/Teams";
import TeamTile from "../components/TeamTile";

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
        {teams.map(team => (
          <TeamTile key={team.name} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Division;
