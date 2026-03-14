import React, { useEffect, useState } from 'react';

function BowlerList() {
  const [bowlers, setBowlers] = useState<any[]>([]);

  useEffect(() => {
    // Ensure this port matches your Rider project's running port
    fetch('http://localhost:5228/api/Bowler') 
      .then((res) => res.json())
      .then((data) => setBowlers(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerID}>
              <td>{`${b.bowlerFirstName} ${b.bowlerMiddleInit || ''} ${b.bowlerLastName}`}</td>
              <td>{b.team ? b.team.teamName : 'No Team'}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlerList;