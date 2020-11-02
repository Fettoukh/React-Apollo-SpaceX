import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_date_local
      launch_success
      launch_year
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;
const Launch = (props) => {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  });

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  console.log(data);
  return (
    <div>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission : {data.launch.mission_name}</span>
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">
          Flight Number : {data.launch.flight_number}
        </li>
        <li className="list-group-item">
          Launch Year : {data.launch.launch_year}
        </li>
        <li className="list-group-item">
          Launch Successful :{" "}
          <span
            className={classNames({
              "text-success": data.launch.launch_success,
              "text-danger": !data.launch.launch_success,
            })}
          >
            {data.launch.launch_success ? "Yes" : "No"}
          </span>
        </li>
      </ul>

      <h4 className="my-3">Rocket Details</h4>
      <ul className="list-group my-3">
        <li className="list-group-item">
          Rocket ID : {data.launch.rocket.rocket_id}
        </li>
        <li className="list-group-item">
          Rocket Name : {data.launch.rocket.rocket_name}
        </li>
        <li className="list-group-item">
          Rocket Type : {data.launch.rocket.rocket_type}
        </li>
      </ul>

      <Link className="btn btn-secondary" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default Launch;
