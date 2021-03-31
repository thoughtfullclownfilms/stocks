import React from 'react';
import './home.css';

import SimpleListMenu from '../Components/Menu';
import MenuStock from '../Components/MenuStock';
import {AppBar, Fab} from '@material-ui/core';
import MenuStrikePriceMulti from '../Components/MenuStrikePriceMulti';
import Charts2 from '../Components/Charts/Chart2';
import FloatingActionButtons from '../Components/Buttons/FloatingButton';
import AddIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';
import MyToolbar from '../Components/Toolbar/Toolbar';
import Charts3 from '../Components/Charts/Chart3';

const OIPage = () => {
  const [date, setdate] = React.useState ('');
  const [ind, setind] = React.useState ('');
  const [ceprice, setceprice] = React.useState ([]);
  const [peprice, setpeprice] = React.useState ([]);
  const [startprice, setstartprice] = React.useState (0);
  const [lastprice, setlastprice] = React.useState (0);
  const [tabs, setTabs] = React.useState ([]);
  const changeDateHandler = newDate => {
    setdate (newDate);
  };
  const changeindHandler = newind => {
    setind (newind);
  };
  const changeSp1Handler = newPePrice => {
    setpeprice (newPePrice);
  };
  const changeSp2Handler = newCePrice => {
    setceprice (newCePrice);
  };
  const handleRemoveChart = key => {
    let data = tabs.filter ((_, index) => index !== key);
    setTabs (data);
  };

  const handleAddChart = () => {
    let dateForChart = date;
    let indForChart = ind;
    let ceForChart = ceprice;
    let peForChart = peprice;
    let data = (
      <div>
        <Charts3
          date={dateForChart}
          index={indForChart}
          pe={peForChart}
          ce={ceForChart}
        />
      </div>
    );
    setTabs ([data, ...tabs]);
  };
  return (
    <div className="home-body">
      <MyToolbar />
      <div className="container mt-5 pt-5">
        <AppBar
          position="static"
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}
        >
          <div
            key="div"
            className={window.innerWidth < 1200 ? 'dorpC' : 'dropR'}
          >
            <div className="drop">
              <SimpleListMenu key="slm" changeDate={changeDateHandler} />
              <MenuStock key="ind" changeIndex={changeindHandler} />
            </div>
            <div className="drop">
              {date !== '' && ind !== ''
                ? <MenuStrikePriceMulti
                    key="PE"
                    strikeprice={changeSp1Handler}
                    date={date}
                    index={ind}
                    type="PE"
                    inp={5}
                  />
                : null}
              {date !== '' && ind !== ''
                ? <MenuStrikePriceMulti
                    key="CE"
                    strikeprice2={changeSp2Handler}
                    date={date}
                    index={ind}
                    type="CE"
                    inp={5}
                  />
                : null}
            </div>
            {ceprice.length !== 0 || peprice.length !== 0
              ? <div style={{background: 'white', paddingRight: '1%'}}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    style={{width: '50px', top: '20px'}}
                    onClick={handleAddChart}
                  >
                    <AddIcon />
                  </Fab>
                </div>
              : null}
          </div>
        </AppBar>
        {startprice !== 0 && lastprice !== 0
          ? <FloatingActionButtons
              startPrice={startprice}
              lastPrice={lastprice}
              index={ind}
            />
          : null}
        <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>
          {tabs.map ((tab, index) => (
            <li
              key={index}
              style={{
                paddingTop: '3%',
                border: '1px solid green',
                margin: '5px',
              }}
            >
              {tab}
              <Fab
                color="primary"
                key={index}
                value={index}
                aria-label="remove"
                onClick={() => handleRemoveChart (index)}
                style={{width: '50px', margin: '20px'}}
              >
                <MinusIcon key={index} value={index} />
              </Fab>
            </li>
          ))}

          {date !== '' && ind !== ''
            ? <li
                style={{
                  paddingTop: '3%',
                  border: '1px solid red',
                  margin: '5px',
                }}
              >
                <Charts2
                  date={date}
                  index={ind}
                  sPrice={newvalue => {
                    setstartprice (newvalue);
                  }}
                  lPrice={newvalue => {
                    setlastprice (newvalue);
                  }}
                />
              </li>
            : null}
        </ul>
      </div>
    </div>
  );
};

export default OIPage;
