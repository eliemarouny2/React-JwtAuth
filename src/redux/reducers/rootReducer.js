  
import { combineReducers } from 'redux';
import SwitchPageReducer from './SwitchPageReducer';
import RestoReducer from './RestoReducer';
import VisitReducer from './VisitReducer';
import SearchReducer from './SearchReducer';
import TypeReducer from './TypeReducer';
import AddVisitReducer from './AddVisitReducer';
import DeleteVisitReducer from './DeleteVisitReducer';
import RegistrationReducer from './RegistrationReducer';
import GetUserReducer from './GetUserReducer';


const rootReducer= combineReducers({

    switchpage:SwitchPageReducer,
    RestoList:RestoReducer,
    VisitList:VisitReducer,
    search:SearchReducer,
    type:TypeReducer,
    deleteVisit:DeleteVisitReducer,
    addVisit:AddVisitReducer,
    register:RegistrationReducer,
    users:GetUserReducer


	});

export default rootReducer;