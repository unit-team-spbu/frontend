import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections} = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>

        <Button size="small" href="lenta"> 
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          IT Events
        </Typography>
        </Button>   
      
         <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="right"
          noWrap
          className={classes.toolbarTitle}
         >
          <TextField id="outlined-basic" lineDirection="center"  variant="outlined" size="small" />
          <IconButton>
          <SearchIcon />
          </IconButton>
        </Typography>
        

        <Button variant="outlined" href="#" size="small" href="anketa">
          Личный кабинет   
        </Button>
        <Button variant="outlined" href="#" size="small" href="welcome">
          Войти
        </Button>

      </Toolbar>

      
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
