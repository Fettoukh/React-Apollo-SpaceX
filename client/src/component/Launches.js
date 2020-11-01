import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  const fetchLaunches = () => {
    if (loading) return <h4>Loading...</h4>;
    if (error) console.log(error);

    return (
      <Fragment>
        {data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </Fragment>
    );
  };

  if (!loading) console.log(data);
  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      {fetchLaunches()}
    </Fragment>
  );
}

export default Launches;
