import React from "react";

function DriverDetails({ data }) {
    return (
        <div className="driverDetails tomorrow-regular mt-4" style={{letterSpacing: "1px", display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <p className="mb-1">Driver: {data.driver1.driverName} {data.driver1.driverFamilyName}</p>
                <p className="mb-1">Nationality: {data.driver1.driverNationality}</p>
                <p className="mb-1">Permanent Number: {data.driver1.driverNumber}</p>
            </div>

            <div style={{textAlign: 'end'}}>
                <p className="mb-1">Driver: {data.driver2.driverName} {data.driver2.driverFamilyName}</p>
                <p className="mb-1">Nationality: {data.driver2.driverNationality}</p>
                <p className="mb-1">Permanent Number: {data.driver2.driverNumber}</p>
            </div>
        </div>
    );
  }
  
  export default DriverDetails;