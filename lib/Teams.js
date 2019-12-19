// @flow
import type { Team } from "../types/CommonTypes";

import NHLApi from "./NHLAPI";
import Constants from "./Constants";

const { NHL_LOGO_API } = Constants;

// Functions for fetching data about individual teams.
const Teams = {
  async fetchTeamsInformation(): Promise<Array<Team>> {
    const result = await NHLApi.get<{ teams: Array<Team> }>("/teams");
    return result.teams;
  },

  // Constructs a map of division name to teams in that division.
  buildDivisionToTeamsMap(teams: Array<Team>): { [string]: Array<Team> } {
    const divisionMap = {};
    teams.forEach(team => {
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
