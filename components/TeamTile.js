// @flow
import type {Team} from '../types/CommonTypes';

import React, { type Node } from 'react'
import Head from 'next/head'
import Teams from '../lib/Teams';

import '../css/teams.css';

type Props = {
  team: Team,
}

function TeamTile(props: Props): Node {
  const {team: {teamName, id}} = props;

  return (
    <div className='teamTileContainer'>
      <img src={Teams.getTeamLogoURL(id)}/>
    </div>
  );
}

export default TeamTile;
