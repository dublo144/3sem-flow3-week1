import React, { useState } from 'react';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import Day1 from '../day1/Day1';
import { Menu } from 'semantic-ui-react';
import Day2 from '../day2/Day2';
import Day3 from '../day3/Day3';
import Friday from '../friday/src/App';

export const NavMenu = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <>
      <BrowserRouter>
        <div>
          <Menu tabular>
            <Link to="/home">
              <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={handleItemClick}
              ></Menu.Item>
            </Link>

            <Link to="/day1">
              <Menu.Item name="day1" active={activeItem === 'day1'} onClick={handleItemClick} />
            </Link>

            <Link to="/day2">
              <Menu.Item name="day2" active={activeItem === 'day2'} onClick={handleItemClick} />
            </Link>

            <Link to="/day3">
              <Menu.Item name="day3" active={activeItem === 'day3'} onClick={handleItemClick} />
            </Link>

            <Link to="/friday">
              <Menu.Item name="friday" active={activeItem === 'friday'} onClick={handleItemClick} />
            </Link>
          </Menu>

          <Switch>
            <Route path="/day1">
              <Day1 />
            </Route>
            <Route path="/day2">
              <Day2 />
            </Route>
            <Route path="/day3">
              <Day3 />
            </Route>
            <Route path="/friday">
              <Friday />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default NavMenu;
