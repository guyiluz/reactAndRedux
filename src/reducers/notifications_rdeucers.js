
export function notificationsList(state = []
    
    , action) {
        
        switch (action.type) {
        
            case "NOTIFICATIONS":
            
                return   action.payload 
                   
             
               
    
            default:
                return state;
        }
    }


