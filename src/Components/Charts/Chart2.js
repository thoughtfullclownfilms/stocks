import React from 'react';
import {apiRequest} from '../../utils/helper';
import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
import './Charts.css';
import {
  TextField,
  Fab,
  Typography,
  Grid,
  Input,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function Charts2({date, index, sPrice, lPrice}) {
  const [chartData, setChartData] = React.useState ([]);
  const [chartData2, setChartData2] = React.useState ([]);
  const [point, setPoint] = React.useState (21);
  const [point2, setPoint2] = React.useState (21);
  const [mintotal, setMintotal] = React.useState (100000);
  const [maxtotal, setMaxtotal] = React.useState (-100000);
  const [mintotal2, setMintotal2] = React.useState (100000);
  const [maxtotal2, setMaxtotal2] = React.useState (-100000);

  React.useEffect (
    () => {
      setChartData ([]);
      setChartData2 ([]);
    },
    [index, date, point, maxtotal2, mintotal2]
  );
  React.useEffect (
    () => {
      setChartData ([]);
      setChartData2 ([]);
      setMintotal (100000);
      setMaxtotal (-100000);
      setMintotal2 (100000);
      setMaxtotal2 (-100000);
    },
    [index, date]
  );
  React.useEffect (
    () => {
      const authHandler = async () => {
        try {
          const userData = await apiRequest ({
            url: 'https://api.optionalgo.in:6001/v1/getdata',
            method: 'post',
            bodyParams: {
              date: date,
              pointtype: 'CE',
              stockname: index,
            },
          });
          const {data, success} = userData;

          if (success) {
            let cData = [];
            let peak = 0;
            let low = 0;
            let points = point;
            let min = 100000;
            let max = -100000;
            for (let i = 0; i < data.length; i++) {
              let {time_hour_m_in_sec, indexprice} = data[i];
              if (min > indexprice) {
                min = indexprice;
              }
              if (max < indexprice) {
                max = indexprice;
              }
              if (i === 0) {
                sPrice (indexprice);
              }
              if (i === data.length - 1) {
                lPrice (indexprice);
              }
              if (point === 0) {
                peak = indexprice;
                low = indexprice;
              } else if (points === point || points === 0) {
                points = point;
                peak = indexprice;
                low = indexprice;
                points = points - 1;
              } else {
                if (indexprice > peak) {
                  peak = indexprice;
                }
                if (indexprice < low) {
                  low = indexprice;
                }
                points = points - 1;
              }

              cData.push ({
                time: time_hour_m_in_sec,
                price: indexprice,
                height: [low, peak],
              });
            }
            setChartData2 (cData);
            if (maxtotal2 === -100000) {
              setMaxtotal2 (parseInt (max.toFixed (0), 10) + 10);
              setMaxtotal (parseInt (max.toFixed (0), 10) + 10);
            }
            if (mintotal2 === 100000) {
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
    [date, index, sPrice, lPrice, point, maxtotal2, mintotal2]
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

  const customTooltipOnYourLine = e => {
    if (e.active && e.payload != null && e.payload[0] != null) {
      return (
        <div className="customTooltip">
          <div className="tooltipContent">
            <p>Price: {e.payload[0].payload['price']}</p>
            <p>Time: {e.payload[0].payload['time']}</p>
            <p>Low: {e.payload[0].payload['height'][0]}</p>
            <p>Peak: {e.payload[0].payload['height'][1]}</p>
          </div>
        </div>
      );
    } else {
      return '';
    }
  };
  const handleChangeMintotal = event => {
    setMintotal (event.target.value);
  };
  const handleChangeMaxtotal = event => {
    setMaxtotal (event.target.value);
  };

  return (
    <div>
      <div>
        <br />
      </div>
      <div>
        <div
          variant="outlined"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
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
            color="primary"
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
            hidden
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
                  total="true"
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
              hidden
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
      </div>
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            width={1000}
            height={400}
            data={chartData}
            margin={{top: 5, right: 20, bottom: 50, left: 0}}
          >
            {point >= 2
              ? <Area dataKey="height" stroke=" #e65c00" fill="#ffa366" />
              : null}
            <Line
              connectNulls
              type="step"
              dataKey="price"
              stroke="#8884d8"
              dot={false}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" />
            <YAxis type="number" domain={[mintotal2, maxtotal2]} />
            <Tooltip content={customTooltipOnYourLine} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
