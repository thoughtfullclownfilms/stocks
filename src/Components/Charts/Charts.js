import React from 'react';
import {apiRequest} from '../../utils/helper';
import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  ResponsiveContainer,
  Area,
} from 'recharts';
import './Charts.css';
import {
  TextField,
  Fab,
  Button,
  Typography,
  Grid,
  Input,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
export default function Charts({date, index, type, ce, pe}) {
  const [chartData, setChartData] = React.useState ([]);
  const [chartData2, setChartData2] = React.useState ([]);
  const [point, setPoint] = React.useState (21);
  const [point2, setPoint2] = React.useState (21);
  const [callLtp, setCallLtp] = React.useState (true);
  const [putLtp, setPutLtp] = React.useState (true);
  const [callputLtp, setCallputLtp] = React.useState (false);
  const [ltpperct, setLtpperct] = React.useState (false);
  const [ltptotal, setLtptotal] = React.useState (true);
  const [minPerc, setMinPerc] = React.useState (100000);
  const [maxPerc2, setMaxPerc2] = React.useState (-100000);
  const [minPerc2, setMinPerc2] = React.useState (100000);
  const [maxPerc, setMaxPerc] = React.useState (-100000);
  const [mintotal, setMintotal] = React.useState (100000);
  const [maxtotal, setMaxtotal] = React.useState (-100000);
  const [mintotal2, setMintotal2] = React.useState (100000);
  const [maxtotal2, setMaxtotal2] = React.useState (-100000);
  const [currentPrice, setCurrentPrice] = React.useState ([]);

  const [putcallLtp, setputcallLtp] = React.useState (false);
  React.useEffect (
    () => {
      const authHandler = async () => {
        try {
          const userData = await apiRequest ({
            url: 'https://api.optionalgo.in:6001/v1/getdata',
            method: 'post',
            bodyParams: {
              date: date,
              pointtype: type,
              stockname: index,
              strike_price_pe: pe,
              strike_price_ce: ce,
            },
          });
          const {data, success} = userData;
          if (success) {
            let cData = [];
            let peak = 0;
            let low = 0;
            let points = point;
            let firstltp = 0;
            let minp = 100000;
            let mint = 100000;
            let maxp = -100000;
            let maxt = -100000;
            let callLTP = 0;
            let putLTP = 0;
            for (let i = 0; i < data.length; i++) {
              let {time_hour_m_in_sec, indexprice, stock} = data[i];

              for (let j = 0; j < stock.length; j++) {
                let data2 = {};

                if (type !== 'Both') {
                  let {
                    last_price,
                    oi,
                    expiry,
                    strike_price,
                    instrument_type,
                  } = stock[j];
                  data2 = {
                    id: time_hour_m_in_sec,
                    time: time_hour_m_in_sec,
                    indexprice: indexprice,
                    last_price: last_price.toFixed (2),
                    oi: oi,
                    expiry: expiry,
                    strike_price: strike_price,
                    instrument_type: instrument_type,
                  };
                } else {
                  let {
                    last_price,
                    oi,
                    oice,
                    oipe,
                    strike_price_pe,
                    strike_price_ce,
                    last_price_ce,
                    last_price_pe,
                    instrument_type,
                  } = stock[j];
                  if (firstltp === 0) {
                    firstltp = last_price;
                  }
                  if (point === 0) {
                    peak = indexprice.toFixed (2);
                    low = indexprice.toFixed (2);
                  } else if (points === point || points === 0) {
                    points = point;
                    peak = last_price.toFixed (2);
                    low = last_price.toFixed (2);
                    points = points - 1;
                  } else {
                    if (last_price > peak) {
                      peak = last_price.toFixed (2);
                    }
                    if (last_price < low) {
                      low = last_price.toFixed (2);
                    }
                    points = points - 1;
                  }
                  if (minp >= last_price / firstltp * 100) {
                    minp = last_price / firstltp * 100;
                  }
                  if (maxp <= last_price / firstltp * 100) {
                    maxp = last_price / firstltp * 100;
                  }
                  if (mint >= last_price) {
                    mint = last_price;
                  }
                  if (maxt <= last_price) {
                    maxt = last_price;
                  }
                  data2 = {
                    id: cData.length,
                    time: time_hour_m_in_sec,
                    last_price: last_price,
                    last_price_percent: (last_price / firstltp * 100).toFixed (
                      2
                    ),
                    indexprice: indexprice,
                    oi: oi,
                    oi_call: oice,
                    oi_puts: oipe,
                    strike_price_ce: strike_price_ce,
                    strike_price_pe: strike_price_pe,
                    last_price_ce: last_price_ce,
                    last_price_pe: last_price_pe,
                    last_price_percentage_ce__pe: (last_price_ce /
                      last_price_pe *
                      100).toFixed (2),
                    last_price_percentage_pe__ce: (last_price_pe /
                      last_price_ce *
                      100).toFixed (2),
                    instrument_type: instrument_type,
                    height: [low, peak],
                  };
                  callLTP = last_price_ce;
                  putLTP = last_price_pe;
                }

                cData.push (data2);
              }
            }

            setChartData2 ([...cData]);
            setCurrentPrice ([callLTP, putLTP]);
            if (maxtotal2 === -100000) {
              setMaxtotal2 (parseInt (maxt.toFixed (0), 10) + 10);
              setMaxtotal (parseInt (maxt.toFixed (0), 10) + 10);
            }
            if (mintotal2 === 100000) {
              setMintotal (parseInt (mint.toFixed (0), 10) - 10);

              setMintotal2 (parseInt (mint.toFixed (0), 10) - 10);
            }
            if (maxPerc2 === -100000) {
              setMaxPerc2 (parseInt (maxp.toFixed (0), 10) + 10);
              setMaxPerc (parseInt (maxp.toFixed (0), 10) + 10);
            }
            if (minPerc2 === 100000) {
              setMinPerc (parseInt (minp.toFixed (0), 10) - 10);
              setMinPerc2 (parseInt (minp.toFixed (0), 10) - 10);
            }
          }
        } catch (err) {
          window.alert (err);
        }
      };
      authHandler ();
      const interval = setInterval (() => {
        authHandler ();
      }, 60000);
      return () => clearInterval (interval);
    },
    [date, index, type, ce, pe, point, mintotal2, maxtotal2, minPerc2, maxPerc2]
  );

  React.useEffect (
    () => {
      setChartData ([]);
      setChartData2 ([]);
    },
    [date, index, type, ce, pe, point, mintotal2, maxtotal2, minPerc2, maxPerc2]
  );

  React.useEffect (
    () => {
      const updatechart = () => {
        if (chartData.length === 0) {
          setChartData (chartData2);
        } else {
          for (let i = chartData.length; i < chartData2.length; i++) {
            setChartData ([...chartData, chartData2[i]]);
          }
        }
      };
      updatechart ();
    },
    [chartData2, chartData]
  );

  const handleChangeMinPerc = event => {
    setMinPerc (event.target.value);
  };
  const handleChangeMaxPerc = event => {
    setMaxPerc (event.target.value);
  };

  const handleChangeMintotal = event => {
    setMintotal (event.target.value);
  };
  const handleChangeMaxtotal = event => {
    setMaxtotal (event.target.value);
  };

  // const customTooltipOnYourLine = e => {
  //   if (
  //     e.active &&
  //     e.payload != null &&
  //     e.payload[0] != null &&
  //     type !== "Both"
  //   ) {
  //     return (
  //       <div className="custom-tooltip">
  //         <p>{e.payload[0].payload["time"]}</p>
  //         <p>{e.payload[0].payload["last_price"]}</p>
  //         <p>{e.payload[0].payload["strike_price"]}</p>
  //         <p>{e.payload[0].payload["indexprice"]}</p>
  //       </div>
  //     );
  //   }
  //   if (
  //     e.active &&
  //     e.payload != null &&
  //     e.payload[0] != null &&
  //     type === "Both"
  //   ) {
  //     return (
  //       <div className="customTooltip">
  //         <div className="tooltipContent">
  //           <p>Time: {e.payload[0].payload["time"]}</p>
  //           <p>LTP: {e.payload[0].payload["last_price"]}</p>
  //           <p>Puts Last Price: {e.payload[0].payload["last_price_pe"]}</p>
  //           <p>Call Last Price: {e.payload[0].payload["last_price_ce"]}</p>
  //           <p>
  //             Percentage Call/Puts:{" "}
  //             {e.payload[0].payload["last_price_percentage_ce__pe"]}
  //           </p>
  //           <p>Low: {e.payload[0].payload["height"][0]}</p>
  //           <p>Peak: {e.payload[0].payload["height"][1]}</p>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return "";
  //   }
  // };
  // const customTooltipOnYourLine2 = e => {
  //   if (
  //     e.active &&
  //     e.payload != null &&
  //     e.payload[0] != null &&
  //     type !== "Both"
  //   ) {
  //     return (
  //       <div className="custom-tooltip">
  //         <p>{e.payload[0].payload["time"]}</p>
  //         <p>{e.payload[0].payload["last_price"]}</p>
  //         <p>{e.payload[0].payload["strike_price"]}</p>
  //         <p>{e.payload[0].payload["indexprice"]}</p>
  //       </div>
  //     );
  //   }
  //   if (
  //     e.active &&
  //     e.payload != null &&
  //     e.payload[0] != null &&
  //     type === "Both"
  //   ) {
  //     return (
  //       <div className="customTooltip">
  //         <div className="tooltipContent">
  //           <p>LTP: {e.payload[0].payload["last_price"]}</p>
  //           <p>Puts Price: {e.payload[0].payload["strike_price_pe"]}</p>
  //           <p>Call Price: {e.payload[0].payload["strike_price_ce"]}</p>
  //           <p>Time: {e.payload[0].payload["time"]}</p>
  //           <p>Low: {e.payload[0].payload["height"][0]}</p>
  //           <p>Peak: {e.payload[0].payload["height"][1]}</p>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return "";
  //   }
  // };

  return (
    <div style={{border: '1px solid green', margin: '15px'}}>
      <div style={{border: '1px solid green', margin: '15px'}}>
        <div
          variant="outlined"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              padding: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Points"
                variant="outlined"
                defaultValue={21}
                onChange={e => {
                  setPoint2 (e.target.value);
                }}
                style={{padding: '1%'}}
              />
              <Fab
                aria-label="add"
                onClick={() => {
                  setPoint (point2);
                }}
                style={{padding: '1%', backgroundColor: '#ffa366'}}
              >
                <AddIcon
                  onClick={() => {
                    setPoint (point2);
                  }}
                />
              </Fab>
            </div>

            {ltptotal
              ? <Button
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    setLtptotal (!ltptotal);
                  }}
                  style={{
                    padding: '3px',
                    backgroundColor: '#8884d8',
                    color: 'white',
                  }}
                >
                  Total LTP
                </Button>
              : <Button
                  variant="outlined"
                  size="medium"
                  onClick={() => {
                    setLtptotal (!ltptotal);
                  }}
                  style={{padding: '3px'}}
                >
                  Total LTP
                </Button>}

            {ltpperct
              ? <Button
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    setLtpperct (!ltpperct);
                  }}
                  style={{
                    padding: '3px',
                    backgroundColor: '#003cb3',
                    color: 'white',
                  }}
                >
                  LTP Percent
                </Button>
              : <Button
                  variant="outlined"
                  size="medium"
                  onClick={() => {
                    setLtpperct (!ltpperct);
                  }}
                  style={{padding: '3px'}}
                >
                  LTP Percent
                </Button>}
            {callLtp
              ? <Button
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    setCallLtp (!callLtp);
                  }}
                  style={{
                    padding: '3px',
                    backgroundColor: '#fb3a1c',
                    color: 'white',
                  }}
                >
                  CLTP
                </Button>
              : <Button
                  variant="outlined"
                  size="medium"
                  onClick={() => {
                    setCallLtp (!callLtp);
                  }}
                  style={{padding: '3px'}}
                >
                  CLTP
                </Button>}

            {putLtp
              ? <Button
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    setPutLtp (!putLtp);
                  }}
                  style={{
                    padding: '3px',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  PLTP
                </Button>
              : <Button
                  variant="outlined"
                  size="medium"
                  onClick={() => {
                    setPutLtp (!putLtp);
                  }}
                  style={{padding: '3px'}}
                >
                  PLTP
                </Button>}

            {callputLtp
              ? <Button
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    setCallputLtp (!callputLtp);
                  }}
                  style={{
                    padding: '3px',
                    backgroundColor: 'green',
                    color: 'white',
                  }}
                >
                  C%P LTP
                </Button>
              : <Button
                  variant="outlined"
                  size="medium"
                  onClick={() => {
                    setCallputLtp (!callputLtp);
                  }}
                  style={{padding: '3px'}}
                >
                  C%P LTP
                </Button>}

            {putcallLtp
              ? <Button
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    setputcallLtp (!putcallLtp);
                  }}
                  style={{
                    padding: '3px',
                    backgroundColor: 'rebeccapurple',
                    color: 'white',
                  }}
                >
                  P%C LTP
                </Button>
              : <Button
                  variant="outlined"
                  size="medium"
                  onClick={() => {
                    setputcallLtp (!putcallLtp);
                  }}
                  style={{padding: '3px'}}
                >
                  P%C LTP
                </Button>}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              padding: '10px',
            }}
          >
            {ltptotal || callLtp || putLtp
              ? <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      margin: '10px',
                    }}
                  >
                    <Typography id="continuous-slider" gutterBottom>
                      Min Datapoint Total
                    </Typography>

                    <Grid item xl>
                      <Input
                        value={mintotal}
                        margin="dense"
                        onChange={handleChangeMintotal}
                        inputProps={{
                          step: 10,
                          min: mintotal - 1000,
                          max: mintotal + 1000,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </Grid>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      margin: '10px',
                    }}
                  >
                    <Typography id="continuous-slider" gutterBottom>
                      Max Datapoint Total
                    </Typography>
                    <Grid item xl>
                      <Input
                        value={maxtotal}
                        margin="dense"
                        onChange={handleChangeMaxtotal}
                        inputProps={{
                          step: 10,
                          min: maxtotal - 1000,
                          max: maxtotal + 1000,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }}
                      />
                    </Grid>
                  </div>

                  <Button
                    onClick={() => {
                      setMintotal2 (parseInt (mintotal, 10));
                      setMaxtotal2 (parseInt (maxtotal, 10));
                    }}
                  >
                    Set
                  </Button>
                </div>
              : !callLtp && !putLtp && !ltptotal
                  ? <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-etotalvenly',
                          margin: '10px',
                        }}
                      >
                        <Typography id="continuous-slider" gutterBottom>
                          Min Datapoint Percentage
                        </Typography>

                        <Grid item xl>
                          <Input
                            value={minPerc}
                            margin="dense"
                            onChange={handleChangeMinPerc}
                            inputProps={{
                              step: 10,
                              min: minPerc - 1000,
                              max: minPerc + 1000,
                              type: 'number',
                              'aria-labelledby': 'input-slider',
                            }}
                          />
                        </Grid>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-evenly',
                          margin: '10px',
                        }}
                      >
                        <Typography id="continuous-slider" gutterBottom>
                          Max Datapoint Percentage
                        </Typography>
                        <Grid item xl>
                          <Input
                            value={maxPerc}
                            margin="dense"
                            onChange={handleChangeMaxPerc}
                            inputProps={{
                              step: 10,
                              min: maxPerc - 1000,
                              max: maxPerc + 1000,
                              type: 'number',
                              'aria-labelledby': 'input-slider',
                            }}
                          />
                        </Grid>
                      </div>
                      <Button
                        onClick={() => {
                          setMinPerc2 (parseInt (minPerc, 10));
                          setMaxPerc2 (parseInt (maxPerc, 10));
                        }}
                      >
                        Set
                      </Button>
                    </div>
                  : null}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <div
              style={{
                padding: '3px',
                backgroundColor: '#fb3a1c',
                color: 'white',
              }}
            >
              Call: {currentPrice[0]}
            </div>
            <div
              style={{
                padding: '3px',
                backgroundColor: 'black',
                color: 'white',
              }}
            >
              Put: {currentPrice[1]}
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>

          <ComposedChart
            width={1000}
            height={500}
            data={chartData}
            margin={{top: 50, right: 20, bottom: 50, left: 10}}
          >
            {ltptotal
              ? point >= 2
                  ? <Area dataKey="height" stroke=" #e65c00" fill="#ffa366" />
                  : null
              : null}
            {ltptotal
              ? <Line
                  connectNulls
                  type="monotone"
                  dataKey="last_price"
                  stroke="#8884d8"
                  dot={false}
                />
              : null}
            {ltpperct
              ? <Line
                  connectNulls
                  type="monotone"
                  dataKey="last_price_percent"
                  stroke="#003cb3"
                  dot={false}
                />
              : null}
            {callLtp
              ? <Line
                  connectNulls
                  type="monotone"
                  dataKey="last_price_ce"
                  stroke="#fb3a1c"
                  dot={false}
                />
              : null}
            {putLtp
              ? <Line
                  connectNulls
                  type="monotone"
                  dataKey="last_price_pe"
                  stroke="black"
                  dot={false}
                />
              : null}
            {callputLtp
              ? <Line
                  connectNulls
                  type="monotone"
                  dataKey="last_price_percentage_ce__pe"
                  stroke="green"
                  dot={false}
                />
              : null}
            {putcallLtp
              ? <Line
                  connectNulls
                  type="monotone"
                  dataKey="last_price_percentage_pe__ce"
                  stroke="rebeccapurple"
                  dot={false}
                />
              : null}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" />
            {!callLtp && !putLtp && !ltptotal
              ? <YAxis type="number" domain={[minPerc2, maxPerc2]} />
              : <YAxis type="number" domain={[mintotal2, maxtotal2]} />}
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div style={{border: '1px solid red', margin: '15px'}}>
        <ResponsiveContainer width="100%" height={400}>

          <ComposedChart
            width={1000}
            height={400}
            data={chartData}
            margin={{top: 5, right: 20, bottom: 5, left: 15}}
          >
            <Line
              connectNulls
              type="monotone"
              dataKey="oi"
              stroke="#8884d8"
              dot={false}
            />
            <Line
              connectNulls
              type="monotone"
              dataKey="oi_puts"
              stroke="black"
              dot={false}
            />
            <Line
              connectNulls
              type="monotone"
              dataKey="oi_call"
              stroke="#fb3a1c"
              dot={false}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" />
            <YAxis
              type="number"
              allowDecimals={true}
              allowDataOverflow
              domain={['dataMin-1000', 'dataMax+10']}
            />
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
