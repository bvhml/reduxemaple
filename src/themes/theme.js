import { blue, deepOrange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
      height:  '100vh',
      padding: '6vh',
      display:'flex'
    },
    footer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      overflow: 'hidden',
      //background: 'linear-gradient(to right bottom, #2c3e50, #82ffa1)',
      backgroundColor: 'transparent',
      height: '100vh',
      alignItems: 'center',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 1), //8,1
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    paperContainer: {
      backgroundColor:'#303030',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    photo: {
      margin: 10,
      width: 100,
      height: 100,
    },
    bigPhoto: {
      margin: 10,
      width: 75,
      height: 75,
      background: theme.palette.background.paper,
      color: 'red',
    },
    bigAvatar: {
      margin: 10,
      width: 50,
      height: 50,
    },
    form: {
      width: '70%', // Fix IE 11 issue.
      //marginTop: theme.spacing(1),
      
    },
    formPrograma: {
      width: '100%', // Fix IE 11 issue.
      //marginTop: theme.spacing(1),
    },
    formTypography:{
      backgroundColor: 'grey',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    palette: {
      primary: blue,
      secondary: deepOrange,
    },
    status: {
      danger: 'orange',
    },
    icon: {
      fontSize: 100,
      color:'#273c75'
    },
    dialogContent:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center',
      width:'50vw',
      maxWidth:400,
      minWidth:220,
      color: 'white',
    },
    DialogContentText:{
      color:blue[400],
    },
    Link: {
      color:blue[400],
    },
    NavLink: {
      textDecoration: 'none',
      color:'white',
      backgroundColor:'transparent',
    },
    MadeBy: {
      color:'white',
      backgroundColor:'transparent',
      display: 'flex',
      justifyContent: 'center',
    },
    ContainerFooter: {
      backgroundColor:'transparent',
    },
    bluredForm: {
      width: 'auto',
      borderRadius: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    search: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      height:'53px',
      width: 200,
      margin:`-10px 0 0 ${theme.spacing(2)}px`,
      backgroundColor:theme.palette.background.paper,
    },
    dividerFullWidth: {
      margin: `500px 0 0 ${theme.spacing(2)}px`,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

export default useStyles;