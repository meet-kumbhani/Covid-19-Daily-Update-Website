import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function App() {
  const [coviddata, setCoviddata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cases_time_series').then((responce) => {
      setCoviddata(responce.data)
    }).catch((err) => {
      console.log(err.message);
    });
  }, [setCoviddata]);

  return (
    <>

      <h1 className='text-center pt-3'>Covid-19 Daily Update</h1>
      <div className='row'>
        {coviddata.map((information) => (

          <div className='col-lg-3 col-md-3 col-sm-6 mt-4' key={information.date}>
            <div className="card">
              <img src="https://apps.bbmpgov.in/Covid19/en/images/corona.gif" alt="logo" width="100%" />
              <div className="card-body">
                <h4 className="card-title">Date:- {information.dateymd}</h4>
                <hr />
                <h6>Total Confirmed:- {information.totalconfirmed}</h6>
                <hr />
                <h6>Total Deceased:- {information.totaldeceased}</h6>
                <hr />
                <h6>Daily Confirmed:- {information.dailyconfirmed}</h6>
                <hr />
                <h6>Daily Recovered:- {information.dailyrecovered}</h6>
                <hr />
                <i><h5>Total Recovered:- {information.totalrecovered}</h5></i>

              </div>
            </div>
          </div>

        ))}
      </div>



    </>
  );
}

export default App;
