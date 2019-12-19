// @flow

// Maps the name of a team to their respective IDS. In order to fetch
// information about one particular team you need its ID. This allows us to use
// nicer URLs for linking to a team page.
const TEAM_NAME_TO_ID_MAP = {
  devils: 1,
  islanders: 2,
  rangers: 3,
  flyers: 4,
  penguins: 5,
  bruins: 6,
  sabres: 7,
  canadiens: 8,
  senators: 9,
  mapleLeafs: 10,
  hurricanes: 12,
  panthers: 13,
  lightning: 14,
  capitals: 15,
  blackhawks: 16,
  redWings: 17,
  predators: 18,
  blues: 19,
  flames: 20,
  avalanche: 21,
  oilers: 22,
  canucks: 23,
  ducks: 24,
  stars: 25,
  kings: 26,
  sharks: 28,
  blueJackets: 29,
  wild: 30,
  jets: 52,
  coyotes: 53,
  goldenKnights: 54,
};

const Constants = {
  NHL_API_BASE_URL: "https://statsapi.web.nhl.com/api/v1",
  NHL_LOGO_API:
    "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light",
  TEAM_NAME_TO_ID_MAP,
};

export default Constants;
