// @flow

export type Conference = {|
  id: number,
  name: string,
  link: string,
|};

export type Division = {|
  id: number,
  name: string,
  nameShort: string,
  link: string,
|};

export type Franchise = {|
  franchiseId: number,
  teamName: string,
  link: string,
|};

export type Team = {|
  abbreviation: string,
  active: boolean,
  conference: Conference,
  division: Division,
  firstYearOfPlay: string,
  franchise: Franchise,
  franchiseId: number,
  id: number,
  link: string,
  locationName: string,
  name: string,
  officialSiteUrl: string,
  shortName: string,
  teamName: string,
  venue: Venue,
|}

export type Venue = {|
  name: string,
  link: string,
  city: string,
|};
