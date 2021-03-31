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
} from 'recharts';
import './Charts.css';
import {Button, Input, Grid, Typography} from '@material-ui/core';

export default function Charts3({date, index, type, ce, pe}) {
  const [chartData, setChartData] = React.useState ([]);
  const [chartData2, setChartData2] = React.useState ([]);
  const [minPerc, setMinPerc] = React.useState (100000);
  const [maxPerc2, setMaxPerc2] = React.useState (-100000);
  const [minPerc2, setMinPerc2] = React.useState (100000);
  const [maxPerc, setMaxPerc] = React.useState (-100000);
  const [mintotal, setMintotal] = React.useState (100000);
  const [maxtotal, setMaxtotal] = React.useState (-100000);
  const [mintotal2, setMintotal2] = React.useState (100000);
  const [maxtotal2, setMaxtotal2] = React.useState (-100000);
  const [l1, setL1] = React.useState (true);
  const [l2, setL2] = React.useState (true);
  const [l3, setL3] = React.useState (true);
  const [l4, setL4] = React.useState (true);
  const [l5, setL5] = React.useState (true);
  const [l6, setL6] = React.useState (true);
  const [l7, setL7] = React.useState (true);
  const [l8, setL8] = React.useState (true);
  const [l9, setL9] = React.useState (true);
  const [l10, setL10] = React.useState (true);
  React.useEffect (
    () => {
      const authHandler = async () => {
        try {
          const userData = await apiRequest ({
            url: 'http://192.168.1.8:6001/v1/getoidata',
            method: 'post',
            bodyParams: {
              date: date,
              stockname: index,
              strike_price_pes: pe,
              strike_price_ces: ce,
            },
          });
          const {data, success} = userData;
          if (success) {
            let cData = {};
            let perstart = {};
            let min = 100000;
            let max = -100000;
            let minp = 100000;
            let maxp = -100000;
            for (let i = 0; i < data.length; i++) {
              let {
                time_hour_m_in_sec,
                oi,
                strike_price,
                instrument_type,
              } = data[i];

              let data2 = {};

              if (min > oi) {
                min = oi;
              }
              if (max < oi) {
                max = oi;
              }
              if (cData[time_hour_m_in_sec] == null) {
                data2 = {
                  time: time_hour_m_in_sec,
                };

                data2['oi_' + instrument_type + '_' + strike_price] = oi;
                let key = 'oi_' + instrument_type + '_' + strike_price;
                if (!(key in perstart)) {
                  perstart[key] = oi;
                }
                if (minp > oi / perstart[key] * 100) {
                  minp = oi / perstart[key] * 100;
                }
                if (maxp < oi / perstart[key] * 100) {
                  maxp = oi / perstart[key] * 100;
                }
                data2[key + '_per'] = (oi / perstart[key] * 100).toFixed (2);

                cData[time_hour_m_in_sec] = data2;
              } else {
                data2 = cData[time_hour_m_in_sec];
                data2['oi_' + instrument_type + '_' + strike_price] = oi;
                let key = 'oi_' + instrument_type + '_' + strike_price;
                if (!(key in perstart)) {
                  perstart[key] = oi;
                }
                if (minp > oi / perstart[key] * 100) {
                  minp = oi / perstart[key] * 100;
                }
                if (maxp < oi / perstart[key] * 100) {
                  maxp = oi / perstart[key] * 100;
                }
                data2[key + '_per'] = (oi / perstart[key] * 100).toFixed (2);

                cData[time_hour_m_in_sec] = data2;
              }
            }
            let mapData = Object.values (cData);
            setChartData2 (mapData);
            if (maxtotal2 === -100000) {
              setMaxtotal2 (parseInt (max.toFixed (0), 10) + 10);
              setMaxtotal (parseInt (max.toFixed (0), 10) + 10);
            }
            if (mintotal2 === 100000) {
              setMintotal (parseInt (min.toFixed (0), 10) - 10);

              setMintotal2 (parseInt (min.toFixed (0), 10) - 10);
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
    [date, index, type, ce, pe, minPerc2, maxPerc2, mintotal2, maxtotal2]
  );

  React.useEffect (
    () => {
      setChartData ([]);
      setChartData2 ([]);
    },
    [date, index, type, ce, pe, minPerc2, maxPerc2, mintotal2, maxtotal2]
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

  // const customTooltipOnYourLine = e => {
  //   if (e.active && e.payload != null && e.payload[0] != null) {
  //     return (
  //       <div className="customTooltip">
  //         <div className="tooltipContent">
  //           <p>OI: {e.payload[0].payload["OI"]}</p>
  //           <p>Strike Price: {e.payload[0].payload["strike_price"]}</p>
  //           <p>Time: {e.payload[0].payload["time"]}</p>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return "";
  //   }
  // };

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

  return (
    <div>
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
          }}
        >
          {ce !== undefined && ce[0] !== undefined
            ? l1
                ? <Button
                    style={{
                      background: '#194610',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL1 (!l1);
                    }}
                  >
                    CE: {ce[0]}
                  </Button>
                : <Button
                    style={{
                      background: 'white',
                      color: 'black',
                    }}
                    onClick={() => {
                      setL1 (!l1);
                    }}
                  >
                    CE: {ce[0]}
                  </Button>
            : null}
          {ce !== undefined && ce[1] !== undefined
            ? l2
                ? <Button
                    style={{
                      background: '#1f770d',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL2 (!l2);
                    }}
                  >
                    CE: {ce[1]}
                  </Button>
                : <Button
                    style={{
                      background: 'white',
                      color: 'black',
                    }}
                    onClick={() => {
                      setL2 (!l2);
                    }}
                  >
                    CE: {ce[1]}
                  </Button>
            : null}
          {ce !== undefined && ce[2] !== undefined
            ? l3
                ? <Button
                    style={{
                      background: '#a2c764',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL3 (!l3);
                    }}
                  >
                    CE: {ce[2]}
                  </Button>
                : <Button
                    style={{
                      background: 'white',
                      color: 'black',
                    }}
                    onClick={() => {
                      setL3 (!l3);
                    }}
                  >
                    CE: {ce[2]}
                  </Button>
            : null}
          {ce !== undefined && ce[3] !== undefined
            ? l4
                ? <Button
                    style={{
                      background: '#dff54f',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL4 (!l4);
                    }}
                  >
                    CE: {ce[3]}
                  </Button>
                : <Button
                    style={{
                      background: 'white',
                      color: 'black',
                    }}
                    onClick={() => {
                      setL4 (!l4);
                    }}
                  >
                    CE: {ce[3]}
                  </Button>
            : null}
          {ce !== undefined && ce[4] !== undefined
            ? l5
                ? <Button
                    style={{
                      background: '#f5f04f',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL5 (!l5);
                    }}
                  >
                    CE: {ce[4]}
                  </Button>
                : <Button
                    style={{
                      background: 'white',
                      color: 'black',
                    }}
                    onClick={() => {
                      setL5 (!l5);
                    }}
                  >
                    CE: {ce[4]}
                  </Button>
            : null}
          {pe !== undefined && pe[0] !== undefined
            ? l6
                ? <Button
                    style={{
                      background: '#ab6988',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL6 (!l6);
                    }}
                  >
                    PE: {pe[0]}
                  </Button>
                : <Button
                    style={{
                      background: 'white',
                      color: 'black',
                    }}
                    onClick={() => {
                      setL6 (!l6);
                    }}
                  >
                    PE: {pe[0]}
                  </Button>
            : null}
          {pe !== undefined && pe[1] !== undefined
            ? l7
                ? <Button
                    style={{
                      background: '#010b28',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL7 (!l7);
                    }}
                  >
                    PE: {pe[1]}
                  </Button>
                : <Button
                    style={{
                      background: 'white',
                      color: 'black',
                    }}
                    onClick={() => {
                      setL7 (!l7);
                    }}
                  >
                    PE: {pe[1]}
                  </Button>
            : null}
          {pe !== undefined && pe[2] !== undefined
            ? l8
                ? <Button
                    style={{
                      background: '#0018ff',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL8 (!l8);
                    }}
                  >
                    PE: {pe[2]}
                  </Button>
                : <Button
                    style={{
                      background: 'white',
                      color: 'black',
                    }}
                    onClick={() => {
                      setL8 (!l8);
                    }}
                  >
                    PE: {pe[2]}
                  </Button>
            : null}
          {pe !== undefined && pe[3] !== undefined
            ? l9
                ? <Button
                    style={{
                      background: '#24756c',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL9 (!l9);
                    }}
                  >
                    PE: {pe[3]}
                  </Button>
                : <Button
                    style={{
                      background: 'white',
                      color: 'black',
                    }}
                    onClick={() => {
                      setL9 (!l9);
                    }}
                  >
                    PE: {pe[3]}
                  </Button>
            : null}
          {pe !== undefined && pe[4] !== undefined
            ? l10
                ? <Button
                    style={{
                      background: '#906c59',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL10 (!l10);
                    }}
                  >
                    PE: {pe[4]}
                  </Button>
                : <Button
                    style={{
                      background: 'white',
                      color: 'black',
                    }}
                    onClick={() => {
                      setL10 (!l10);
                    }}
                  >
                    PE: {pe[4]}
                  </Button>
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              margin: '10px',
            }}
          >
            <Typography id="continuous-slider" gutterBottom>
              Min OI
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
              Max OI
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
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={1000}
          height={400}
          data={chartData}
          margin={{top: 5, right: 20, bottom: 5, left: 20}}
        >
          {ce !== undefined && ce[0] !== undefined && l1
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_CE_' + ce[0]}
                stroke="#194610"
              />
            : null}

          {ce !== undefined && ce[1] !== undefined && l2
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_CE_' + ce[1]}
                stroke="#1f770d"
              />
            : null}
          {ce !== undefined && ce[2] !== undefined && l3
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_CE_' + ce[2]}
                stroke="#a2c764"
              />
            : null}
          {ce !== undefined && ce[3] !== undefined && l4
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_CE_' + ce[3]}
                stroke="#dff54f"
              />
            : null}
          {ce !== undefined && ce[4] !== undefined && l5
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_CE_' + ce[4]}
                stroke="#f5f04f"
              />
            : null}
          {pe !== undefined && pe[0] !== undefined && l6
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_PE_' + pe[0]}
                stroke="#ab6988"
              />
            : null}
          {pe !== undefined && pe[1] !== undefined && l7
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_PE_' + pe[1]}
                stroke="#010b28"
              />
            : null}
          {pe !== undefined && pe[2] !== undefined && l8
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_PE_' + pe[2]}
                stroke="#0018ff"
              />
            : null}
          {pe !== undefined && pe[3] !== undefined && l9
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_PE_' + pe[3]}
                stroke="#24756c"
              />
            : null}
          {pe !== undefined && pe[4] !== undefined && l10
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_PE_' + pe[4]}
                stroke="#906c59"
              />
            : null}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis type="number" domain={[mintotal2, maxtotal2]} />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
      <div
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
            Min OI %
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
            Max OI %
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
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={1000}
          height={400}
          data={chartData}
          margin={{top: 5, right: 20, bottom: 5, left: 20}}
        >
          {ce !== undefined && ce[0] !== undefined && l1
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_CE_' + ce[0] + '_per'}
                stroke="#194610"
              />
            : null}
          {ce !== undefined && ce[1] !== undefined && l2
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_CE_' + ce[1] + '_per'}
                stroke="#1f770d"
              />
            : null}
          {ce !== undefined && ce[2] !== undefined && l3
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_CE_' + ce[2] + '_per'}
                stroke="#a2c764"
              />
            : null}
          {ce !== undefined && ce[3] !== undefined && l4
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_CE_' + ce[3] + '_per'}
                stroke="#dff54f"
              />
            : null}
          {ce !== undefined && ce[4] !== undefined && l5
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_CE_' + ce[4] + '_per'}
                stroke="#f5f04f"
              />
            : null}
          {pe !== undefined && pe[0] !== undefined && l6
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_PE_' + pe[0] + '_per'}
                stroke="#ab6988"
              />
            : null}
          {pe !== undefined && pe[1] !== undefined && l7
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_PE_' + pe[1] + '_per'}
                stroke="#010b28"
              />
            : null}
          {pe !== undefined && pe[2] !== undefined && l8
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_PE_' + pe[2] + '_per'}
                stroke="#0018ff"
              />
            : null}
          {pe !== undefined && pe[3] !== undefined && l9
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_PE_' + pe[3] + '_per'}
                stroke="#24756c"
              />
            : null}
          {pe !== undefined && pe[4] !== undefined && l10
            ? <Line
                dot={false}
                connectNulls
                type="monotone"
                dataKey={'oi_PE_' + pe[4] + '_per'}
                stroke="#906c59"
              />
            : null}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis type="number" domain={[minPerc2, maxPerc2]} />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
