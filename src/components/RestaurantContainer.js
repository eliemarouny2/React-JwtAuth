import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PrimarySearchAppBar from './PrimarySearcAppBar';
import SnackBar from './SnackBar';
import _ from 'lodash';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Paginating from './Paginating';
import  Checkbox  from '@material-ui/core/Checkbox';
import AddVisitAction from '../redux/actions/AddVisitAction';
import AuthService from "../services/auth.service";

import {GetUserList} from '../redux/actions/GetUserAction';
import {GetRestoList} from '../redux/actions/RestoAction';


const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  padding: theme.spacing(10),
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	  [theme.breakpoints.down('sm')]: {
		width:"100%",
		justify: 'center',
		textAlign: 'center',
	  },
	},
	gridcontent: {
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		  },
	},
  }));



function ShowRestos({resto,index}){

	const dispatch=useDispatch();
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
	  setOpen(true);
	};
	const handleClose = () => {
	  setOpen(false);
	};

	const FetchRestos = () => {
		dispatch(GetRestoList())
	  }
	const RestoList = useSelector(state =>state.RestoList);
	useEffect(() =>{
		FetchRestos()
	  },[])


	const currentUser = AuthService.getCurrentUser();


	const FetchUsers = () => {
	  dispatch(GetUserList())
	}
	const UserList = useSelector(state =>state.users);
	useEffect(() =>{
	  FetchUsers()
	},[])

	


	const AddVisit = (buttonInfo) =>{
	
		if(buttonInfo.target.checked){
            const today = new Date();
			let restodata={};
            for(resto of RestoList.data){
              if((String(resto.id))===(String(buttonInfo.target.value))){
				  restodata=resto;
				  
              }
			}
			let curuser={};
			for(let user of UserList.data){
				if(String(user.id)===String(currentUser.id)){
					curuser=user;
				}
			}


			let restaurant = { "visitdate": today ,"restomodel": restodata,"usermodel":curuser} ;
			try{
				
			dispatch(AddVisitAction(restaurant));
				console.log("new visit added");
	
			}catch(error){
				console.log("data not added");
			}
		}
		
		
	}
	


  
  return ( 	<Grid item xs={4} className={classes.gridcontent}>
				<Paper className={classes.paper} onClick={handleClickOpen}>
				 	<img width="160px" height="100px" src={"../restopics/"+resto.name+".jpg" } alt="couldn't load" ></img>
					<Typography variant="h4">{resto.name} </Typography>
					
  
				</Paper>
				<Dialog value={resto.name} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className={resto.name}>
					<DialogTitle> <Typography variant="h3">Restaurant Information </Typography></DialogTitle>
				 	<List>
				 		<ListItem>
						 <Typography variant="h4" >Name: </Typography><Typography variant="h5">{resto.name} </Typography>
						 </ListItem>
				 		<ListItem>
						 <Typography variant="h4" >Type: </Typography><Typography variant="h5">{resto.type} </Typography>
				 		</ListItem>
				 		<ListItem>
					 	<Typography variant="h4" >Cost for two: </Typography><Typography variant="h5">{resto.cost}$ </Typography>
				 		</ListItem>
				 		<ListItem>
						 <Typography variant="h4" >Address: </Typography><Typography variant="h5">{resto.address} </Typography>
						 </ListItem>

				 		<ListItem>
						 <Typography variant="h4" >Number: </Typography><Typography variant="h5">{resto.number} </Typography>
				 		</ListItem>
						 <ListItem>
							 <Typography variant="h5">
								Check to save a visit today
								  <Checkbox  className={resto.name} key={resto.id}  value={resto.id} onClick={AddVisit}    variant="contained" color="primary">Check Visit</Checkbox> 
								  </Typography>
						 
						 </ListItem>
				 	</List>
				</Dialog>
				 
			</Grid>            
  )}



function RestaurantContainer(){

	const RestoList = useSelector(state =>state.RestoList); 
	const SearchInput=useSelector(state=>state.search); //search input
	const TypeChosen=useSelector(state=>state.type); //type input
	const [currentPage,setCurrentPage]=useState(1); //kermel kel awal 6 ykuno bnafes l page
	const [postsPerPage,setPostsPerPage]=useState(6);

	const indexOfLastPost= currentPage*postsPerPage;
	const indexOfFirstPost=indexOfLastPost-postsPerPage;
	
	const paginate= (pageNumber) => setCurrentPage(pageNumber); //pagination numbers

	const classes = useStyles();

	const showData =  () => {
		if(!_.isEmpty(RestoList.data)){ //hon am shuf l data l jebta mnl restoaction eza fadie
			return RestoList.data.filter((resto)=>{
				if(TypeChosen.data===""){
					return resto
				}
				else if(resto.type.includes(TypeChosen.data)){
					return resto
				}
			}).filter((resto)=>{
				if(SearchInput.data===""){ return resto
				}
				else if (resto.name.toLocaleLowerCase().includes(SearchInput.data.toLocaleLowerCase())){ //filtering lal search
					return resto
				}
			}).slice(indexOfFirstPost,indexOfLastPost).map((resto,index)=>(		//slicing la assim l data la pages
				<ShowRestos key={index} index={index} resto={resto}/>	
			))
		}
		if(RestoList.loading){
			return <Typography variant="h2">Loading Data</Typography>
		}
		if(RestoList.errorMsg !=="") { //snackbar error la eza ma ejena data
			return <SnackBar/>
		}
		return <SnackBar/>
	};




	return(
		<div> 	
			<PrimarySearchAppBar></PrimarySearchAppBar>	
			<Typography variant="h2">Available Restaurants</Typography>
			<Grid container spacing={1} className={classes.gridcontent}>
				{showData()}
			</Grid>
			<Paginating postsPerPage={postsPerPage} totalPosts={RestoList.data.length} paginate={paginate}/>
		</div>

		)	
}

export default RestaurantContainer;