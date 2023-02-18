import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SpeedSharpIcon from '@material-ui/icons/SpeedSharp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchComponent from './SearchComponent';
import Notification from './Notification';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ProfileIcon from './ProfileIcon';
import HomePage from '../HomePage';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItem: {
    color: 'rgb(255,255,255,0.8)',
    cursor: 'pointer',
    '&:hover': {
      color: 'rgb(255,255,255,1)',
    },
    '& .MuiSvgIcon-root': {
      marginRight: '10px',
    },
  },
  divider: {
    backgroundColor: '#fff',
  },
  listHeader: {
    color: 'gray',
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem className={classes.listItem}>
          <SentimentVerySatisfiedIcon style={{ fontSize: 40 }} />
          <Typography variant="h6" style={{ paddingLeft: '10px' }}>
            SB Admin
          </Typography>
        </ListItem>
      </List>
      <div />
      <Divider variant="middle" className={classes.divider} />
      <List>
        <ListItem className={classes.listItem}>
          <SpeedSharpIcon />
          <ListItemText>Dashboard</ListItemText>
          <ChevronRightIcon />
        </ListItem>
        <Divider variant="middle" className={classes.divider} />

        <ListItem className={classes.listHeader}>
          <Typography>INTERFACE</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <PeopleAltIcon />
          <ListItemText>Users</ListItemText>
          <ChevronRightIcon />
        </ListItem>
        <ListItem className={classes.listItem}>
          <PostAddIcon />
          <ListItemText>Posts</ListItemText>
          <ChevronRightIcon />
        </ListItem>
      </List>
      <Divider variant="middle" className={classes.divider} />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container style={{ paddingTop: '10px' }}>
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <SearchComponent />
            </Grid>
            <Grid xs sm md lg xlg />
            <Grid item>
              <Notification
                badgeNumber={3}
                badgeColor="primary"
                icon={<NotificationsIcon />}
                color="purple"
                title="Alerts"
              />
            </Grid>
            <Grid item>
              <Notification
                badgeNumber={4}
                badgeColor="secondary"
                icon={<ChatBubbleIcon />}
                color="#f6c23e"
                title="Messages"
              />
            </Grid>
            <Grid item>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item>
              <ProfileIcon name="Puli ChinnaObulaReddy" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            color="primary"
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <HomePage />
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
