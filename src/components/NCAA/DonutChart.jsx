import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DivisionCharts = () => {
  // Data for Division I
  const divisionIData = {
    labels: ["Direct Distributions", "Championships"],
    datasets: [
      {
        data: [669, 192], // $669M distributions, $192M championships
        backgroundColor: ["#4CAF50", "#2196F3"],
        borderWidth: 1,
      },
    ],
  };

  // Data for Division II
  const divisionIIData = {
    labels: ["Direct Distributions", "Championships", "Other Programs"],
    datasets: [
      {
        data: [33.56, 16.5, 5.88],
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800"],
        borderWidth: 1,
      },
    ],
  };

  // Data for Division III
  const divisionIIIData = {
    labels: ["Championships", "Conference Distributions", "Other Programs"],
    datasets: [
      {
        data: [30.5, 7, 3.2],
        backgroundColor: ["#2196F3", "#4CAF50", "#FF9800"],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.label}: $${context.raw}M (${(
              (context.raw / context.dataset.data.reduce((a, b) => a + b, 0)) *
              100
            ).toFixed(1)}%)`,
        },
      },
    },
    cutout: "50%", // Hollow center
    animation: {
      animateRotate: true, // Enables rotation animation
      duration: 2000, // Adjust duration (in ms) for smooth effect
    },
  };

  return (
    <div>
      <div className=" text-center">
        <div className="container mt-5">
          <div className="mb-4">
            <h3>
              <b>NCAA Funding Allocation Per Division </b>
            </h3>
          </div>
          <div className="row">
            {/* Division I */}
            <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
              <h4>DIVISION I: $861M</h4>
              <h1>67.3%</h1>
              <Doughnut data={divisionIData} options={options} />
              <div className="px-3 mt-4">
                <div className="container">
                  <div className="summary-header d-flex justify-content-center bg-success align-items-center">
                    <h4 className="text-uppercase mt-2">
                      <b>DI Funding Summary</b>
                    </h4>
                  </div>
                  <div className="card-body p-2">
                    <div className="card-text text-start">
                      <ul>
                        <li>
                          {" "}
                          <b>75% </b> of total D3 allocated funds go to
                          championships,
                        </li>
                        <li>
                          {" "}
                          <b> 75% </b> of total D3 allocated funds go to
                          championships,
                        </li>
                        <li>
                          {" "}
                          the remaining <b>25% </b>of total D3 allocated funds
                          go to conferences and initiatives like officiating.
                        </li>
                      </ul>
                      <div className="summary-footer text-center border-top">
                        <p className="mt-3 text-muted">
                          {" "}
                          total D3 allocated funds go to conferences and like
                          officiating.
                        </p>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Division II */}
            <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
              <h4>DIVISION II: $55.94M</h4>
              <h1> 4.37%</h1>
              <Doughnut data={divisionIIData} options={options} />
              <div className="px-3 mt-4">
                <div className="container">
                  <div className="summary-header d-flex justify-content-center bg-success align-items-center">
                    <h4 className="text-uppercase mt-2">
                      <b>DII Funding Summary</b>
                    </h4>
                  </div>
                  <div className="card-body p-2">
                    <div className="card-text text-start">
                      <ul>
                        <li>
                          {" "}
                          <b>75% </b> of total D3 allocated funds go to
                          championships,
                        </li>
                        <li>
                          {" "}
                          <b> 75% </b> of total D3 allocated funds go to
                          championships,
                        </li>
                        <li>
                          {" "}
                          the remaining <b>25% </b>of total D3 allocated funds
                          go to conferences and initiatives like officiating.
                        </li>
                      </ul>
                      <div className="summary-footer text-center border-top">
                        <p className="mt-3 text-muted">
                          {" "}
                          total D3 allocated funds go to conferences and like
                          officiating.
                        </p>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Division III */}
            <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
              <h4>DIVISION III: $40.70M</h4>
              <h1>3.18%</h1>
              <Doughnut data={divisionIIIData} options={options} />
              <div className="px-3 mt-4">
                <div className="container">
                  <div className="summary-header d-flex justify-content-center bg-success align-items-center">
                    <h4 className="text-uppercase mt-2">
                      <b>DI Funding Summary</b>
                    </h4>
                  </div>
                  <div className="card-body p-2">
                    <div className="card-text text-start">
                      <ul>
                        <li>
                          {" "}
                          <b>75% </b> of total D3 allocated funds go to
                          championships,
                        </li>
                        <li>
                          {" "}
                          <b> 75% </b> of total D3 allocated funds go to
                          championships,
                        </li>
                        <li>
                          {" "}
                          the remaining <b>25% </b>of total D3 allocated funds
                          go to conferences and initiatives like officiating.
                        </li>
                      </ul>
                      <div className="summary-footer text-center border-top">
                        <p className="mt-3 text-muted">
                          {" "}
                          total D3 allocated funds go to conferences and like
                          officiating.
                        </p>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionCharts;
