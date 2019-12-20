// @flow
import type { Team } from "../../types/CommonTypes";

import React from "react";
import TeamDisplay from "../../components/teams/TeamDisplay";
import Constants from "../../lib/Constants";
import Teams from "../../lib/Teams";

const { TEAM_NAME_TO_ID_MAP } = Constants;

type Props = {| team: Team |};

class TeamPage extends React.Component<Props> {
  static async getInitialProps(ctx: { query: { teamName: string } }) {
    const {
      query: { teamName },
    } = ctx;

    const id = TEAM_NAME_TO_ID_MAP[teamName];
    const team = await Teams.fetchTeamInformation(id);
    return {
      team,
    };
  }

  render() {
    const { team } = this.props;

    return <TeamDisplay team={team} />;
  }
}

export default TeamPage;
