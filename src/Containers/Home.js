import React from 'react';
import './home.css';

import ScrollableTabsButtonForce from '../Components/Tabs';
import SimpleListMenu from '../Components/Menu';
import MenuStock from '../Components/MenuStock';
import {AppBar, Fab} from '@material-ui/core';
import MenuStrikePrice from '../Components/MenuStrikePrice';
import Charts2 from '../Components/Charts/Chart2';
import FloatingActionButtons from '../Components/Buttons/FloatingButton';
import AddIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';
import MyToolbar from '../Components/Toolbar/Toolbar';

const Home = () => {
  const [date, setdate] = React.useState ('');
  const [ind, setind] = React.useState ('');
  const [ceprice, setceprice] = React.useState (0);
  const [peprice, setpeprice] = React.useState (0);
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
        <h6 style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'green'}}>CE Price: </div> {ceForChart}
          <div style={{flex: '1'}} />
          <div style={{color: 'green'}}>PE Price: </div> {peForChart}
        </h6>

        <ScrollableTabsButtonForce
          date={dateForChart}
          index={indForChart}
          pePrice={peForChart}
          cePrice={ceForChart}
        />
      </div>
    );
    setTabs ([data, ...tabs]);
  };
  return (
    <div className="home-body">
      <MyToolbar />
      <div className="container   mt-5 pt-5">
        <AppBar
          position="static"
          color="primary"
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            top: '100px',
          }}
        >
          <div
            key="div"
            className={window.innerWidth < 1200 ? 'dorpC' : 'dropR'}
          >
            <div key="div1" className="drop">
              <SimpleListMenu key="slm" changeDate={changeDateHandler} />
              <MenuStock key="ind" changeIndex={changeindHandler} />
            </div>
            <div key="div2" className="drop">
              {date !== '' && ind !== '' && ceprice !== ''
                ? <MenuStrikePrice
                    key="PE"
                    strikeprice={changeSp1Handler}
                    date={date}
                    index={ind}
                    type="PE"
                  />
                : null}
              {date !== '' && ind !== '' && peprice !== ''
                ? <MenuStrikePrice
                    key="CE"
                    strikeprice2={changeSp2Handler}
                    date={date}
                    index={ind}
                    type="CE"
                  />
                : null}
            </div>
            {ceprice !== 0 && peprice !== ''
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
        <div>
          <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>
            {tabs.map ((tab, index) => (
              <li key={index} style={{paddingTop: '3%'}}>
                {tab}
                <Fab
                  color="primary"
                  key={index}
                  value={index}
                  aria-label="remove"
                  onClick={() => handleRemoveChart (index)}
                  style={{width: '50px', top: '20px'}}
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
    </div>
  );
};

export default Home;
