import React, {useEffect,useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { GetRestoList } from '../redux/actions/RestoAction';
import RestaurantSharpIcon from '@material-ui/icons/RestaurantSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  typeinput:{
    display:'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  }
}));

function getUnique(arr, comp) { //la jib l unique types tabaa l restos la hottoun bl dropdown list
const unique =  arr.map(e => e[comp])
.map((e, i, final) => final.indexOf(e) === i && i)
.filter((e) => arr[e]).map(e => arr[e]);
return unique;
}


export default function PrimarySearchAppBar() {

  const dispatch=useDispatch();
  const RestoTypes = useSelector(state =>state.RestoList);
	useEffect(() =>{
	FetchData()
	},[])
  const FetchData = () => {
		dispatch(GetRestoList())
  }
  const RestoTypesList=getUnique(RestoTypes.data,"type");


  const [typeClicked, setTypeClicked] = React.useState({ //heide bhot fia l type
    age: '',
    name: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setTypeClicked({
      ...typeClicked,
      name: event.target.value,
    });
  };
  const classes = useStyles();


  const [searchTerm,setSearchTerm]=useState("");

    

  return (
    
      <AppBar position="static" color="default">
        <Toolbar>
          <RestaurantSharpIcon/>
          <Typography className={classes.title} variant="h6" noWrap>SpringBoot Project</Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchSharpIcon color="secondary"/>
            </div>
            <InputBase
                placeholder="Search…" className={classes.search}  color="secondary" onChange={event => dispatch({type: "INPUT_NOT_EMPTY",
                payload:event.target.value    })}    classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              	}} inputProps={{ 'aria-label': 'search' }} />

          </div>
          
          <div className={classes.grow} />
        
                
          <div className={classes.sectionDesktop}>
      
          <FormControl className={classes.formControl}>
               

        <NativeSelect onChange={event => dispatch({type: "TYPE_CHOSEN",
                payload:event.target.value    })} name="age" className={classes.typeinput} inputProps={{ 'aria-label': 'type' }}>
          <option value="">None</option>
          {RestoTypesList.map((types)=>(
             <option key={types.type} value={types.type}>{types.type}</option>
          )
          )}
        </NativeSelect>
        <FormHelperText>Type</FormHelperText>
      </FormControl>
      </div>
    </Toolbar>
  </AppBar>
      
  );
}
