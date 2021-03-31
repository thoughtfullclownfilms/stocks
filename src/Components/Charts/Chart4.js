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
  ReferenceLine,
} from 'recharts';
import './Charts.css';
import {Button, Input, Grid, Typography} from '@material-ui/core';

export default function Charts4({date, index, type, ce, pe}) {
  const [chartData, setChartData] = React.useState ([]);
  const [chartData2, setChartData2] = React.useState ([]);

  const [mintotal, setMintotal] = React.useState (100000);
  const [maxtotal, setMaxtotal] = React.useState (-100000);
  const [mintotal2, setMintotal2] = React.useState (100000);
  const [maxtotal2, setMaxtotal2] = React.useState (-100000);
  const [l1, setL1] = React.useState (true);
  const [l2, setL2] = React.useState (true);
  React.useEffect (
    () => {
      const authHandler = async () => {
        try {
          const userData = await apiRequest ({
            url: 'https://api.optionalgo.in:6001/v1/getoifdata',
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
            let cData = [];
            let min = 100000;
            let max = -100000;

            for (let i = 0; i < data.length; i++) {
              let {timeInhrmin, ce, pe} = data[i];

              let data2 = {};

              if (min > ce || min > pe) {
                min = ce;
              }
              if (min > pe) {
                min = pe;
              }
              if (max < ce) {
                max = ce;
              }
              if (max < pe) {
                max = pe;
              }
              data2 = {
                id: cData.length,
                time: timeInhrmin,
                ce: ce,
                pe: pe,
              };

              cData.push (data2);
            }

            setChartData2 (cData);
            if (maxtotal2 === -100000 && max !== undefined) {
              setMaxtotal2 (parseInt (max.toFixed (0), 10) + 10);
              setMaxtotal (parseInt (max.toFixed (0), 10) + 10);
            }
            if (mintotal2 === 100000 && min !== undefined) {
              setMintotal (parseInt (min.toFixed (0), 10) - 10);

              setMintotal2 (parseInt (min.toFixed (0), 10) - 10);
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
    [date, index, type, ce, pe, mintotal2, maxtotal2]
  );

  React.useEffect (
    () => {
      setChartData ([]);
      setChartData2 ([]);
    },
    [date, index, type, ce, pe, mintotal2, maxtotal2]
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
                    CE
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
                    CE
                  </Button>
            : null}
          {pe !== undefined && pe[0] !== undefined
            ? l2
                ? <Button
                    style={{
                      background: 'red',
                      color: 'white',
                    }}
                    onClick={() => {
                      setL2 (!l2);
                    }}
                  >
                    PE
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
                    PE
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
                connectNulls
                type="monotone"
                dataKey="ce"
                stroke="#194610"
                dot={false}
              />
            : null}
          {pe !== undefined && pe[0] !== undefined && l2
            ? <Line
                connectNulls
                type="monotone"
                dataKey="pe"
                stroke="red"
                dot={false}
              />
            : null}
          <ReferenceLine y={0} label="" stroke="black" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis type="number" domain={[mintotal2, maxtotal2]} />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
