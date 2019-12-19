// @flow
import React, { type Node } from "react";
import Teams from "../../lib/Teams";
import Constants from "../../lib/Constants";

import "../../css/teams.css";

const { TEAM_NAME_TO_ID_MAP } = Constants;

type Props = {|
  teamName: string,
|};

function TeamDisplay(props: Props): Node {
  const { teamName } = props;

  const id = TEAM_NAME_TO_ID_MAP[teamName];
  Teams.fetchTeamInformation(id);

  return (
    <div>
      <h1>{teamName}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}

export default TeamDisplay;
