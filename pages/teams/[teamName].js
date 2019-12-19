// @flow

import { useRouter } from "next/router";
import React, { type Node } from "react";
import TeamDisplay from "../../components/teams/TeamDisplay";

function TeamPage(): Node {
  const router = useRouter();

  const teamName = router.query.teamName;
  return <TeamDisplay teamName={teamName} />;
}

export default TeamPage;
