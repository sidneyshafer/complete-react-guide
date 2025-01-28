import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MENU</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-content']}>
      </div>
    </Fragment>
  );
};

export default Header;
