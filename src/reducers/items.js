


    
export function timers(state = {
    prepare :"00:00",
medation:"00:00",
interval:"00:00"
    
}
    
    , action) {
        
        switch (action.type) {
        
            case "TIMERS":
            
                return   {   
                     ...state,
                     prepare :action.payload.prepare,
                     medation:action.payload.medation,
                     interval:action.payload.interval,

                }
                   
             
               
    
            default:
                return state;
        }
    }



