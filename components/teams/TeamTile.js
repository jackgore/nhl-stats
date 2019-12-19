// @flow
import type { Team } from "../../types/CommonTypes";

import Router from "next/router";
import React, { type Node } from "react";
import Teams from "../../lib/Teams";

import "../../css/teams.css";

type Props = {|
  team: Team,
|};

function TeamTile(props: Props): Node {
  const {
    team: { id, teamName },
  } = props;

  const onTeamClicked = () => {
    Router.push("/teams/".concat(teamName.toLowerCase()));
  };

  return (
    <div className="team-tile-container" onClick={onTeamClicked}>
      <img src={Teams.getTeamLogoURL(id)} />
    </div>
  );
}

export default TeamTile;
