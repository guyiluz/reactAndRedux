





export function deviceLoc(state = []
    
    , action) {
        
        switch (action.type) {
            case "LOCTION":
                return   action.payload 
                   
             
               
    
            default:
                return state;
        }
    }


    export function userData(state = {
        userImage:"",
        firstName:"",
        lastLogin:"",
        notificationCount:"0",
        userManu:"",
        userEamil:""

    
    }, action) {
        
        switch (action.type) {
            case "USERDITDATA":
                return {
                    ...state,
                    userImage:`${ window.localStorage.getItem("hereORootURl") }/UserPhotos/${action.payload.userImage}`,
                    firstName:action.payload.firstName,
                    lastLogin:action.payload.lastLogin,
                    notificationCount:action.payload.notificationCount,
                    userManu:action.payload.userManu,
                    userEamil:action.payload.userEamil,      
         
             
                };
    
            default:
                return state;
        }
    }







    


export function modeList(state = {
    list:[],
    isLoading:false

}, action) {
    
    switch (action.type) {
        case "GETMODE":
            return {
                ...state,
                list:action.payload.list,
                isLoading:action.payload.isLoading
  
     
         
            };

        default:
            return state;
    }
}



    
export function pageing(state = {
    pageCount:0,
currentPage:1
    
}
    
    , action) {
        
        switch (action.type) {
        
            case "PAGEING":
            
                return   {   
                     ...state,
                     pageCount:action.payload.pageCount,
                     currentPage:action.payload.currentPage

                }
                   
             
               
    
            default:
                return state;
        }
    }




    export function alertBox(state = {
    display:"none",
    msg:""
    
    }, action) {
        
        switch (action.type) {
            case "ALRTBOX":
                return {
                    ...state,
                    display:action.payload.display,
                    msg:action.payload.msg
      
         
             
                };
    
            default:
                return state;
        }
    }




    export function deviceDashboardData(state = {}
    
        , action) {
            
            switch (action.type) {
                case "DEVICEDASHBOARDDATA":
                    return   action.payload 
                       
                 
                   
        
                default:
                    return state;
            }
        }
    
    
    

        export function avgRSSI(state = []
    
            , action) {
                
                switch (action.type) {
                    case "AVGRSSI":
                        return   action.payload 
                           
                     
                       
            
                    default:
                        return state;
                }
            }
        






        export function callsNumdev(state = []
    
            , action) {
                
                switch (action.type) {
                    case "CALLSTOTALDEV":
                        return   action.payload 
                           
                     
                       
            
                    default:
                        return state;
                }
            }
        



            export function changePassword(state = {}
    
                , action) {
                    
                    switch (action.type) {
                        case "CHANGEPASSWORDTXT":
                            return   action.payload 
                               
                         
                           
                
                        default:
                            return state;
                    }
                }
            
    



