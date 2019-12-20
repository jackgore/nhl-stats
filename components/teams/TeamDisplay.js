// @flow
import type { Team } from "../../types/CommonTypes";

import React, { type Node } from "react";

import "../../css/teams.css";

type Props = {|
  team: Team,
|};

function TeamDisplay(props: Props): Node {
  const { team } = props;

  console.log(team);
  return (
    <div>
      <h1>{team.teamName}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}

export default TeamDisplay;
