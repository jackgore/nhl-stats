// @flow
import type { Team } from "../types/CommonTypes";

import NHLApi from "./NHLAPI";
import Constants from "./Constants";

type TeamsObj = { teams: Array<Team> };

const { NHL_LOGO_API } = Constants;

// Functions for fetching data about individual teams.
const Teams = {
  async fetchTeamsInformation(): Promise<Array<Team>> {
    const { teams } = await NHLApi.get<TeamsObj>("/teams");
    return teams;
  },

  async fetchTeamInformation(id: number): Promise<Team> {
    const { teams } = await NHLApi.get<TeamsObj>("/teams/".concat(String(id)));
    return teams[0];
  },

  // Constructs a map of division name to teams in that division.
  buildDivisionToTeamsMap(teams: Array<Team>): { [string]: Array<Team> } {
    const divisionMap = {};
    teams.forEach((team: Team) => {
      const {
        division: { name },
      } = team;
      if (divisionMap[name] == null) {
        divisionMap[name] = [];
      }
      divisionMap[name].push(team);
    });

    return divisionMap;
  },

  // Produces the URL for the logo of the team with the given ID.
  getTeamLogoURL(id: number): string {
    return NHL_LOGO_API.concat("/" + String(id) + ".svg");
  },
};

export default Teams;
