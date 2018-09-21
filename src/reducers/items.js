export function timerName(state="prepare",action) {
    
switch(action.type){

case "TIMENAME":
return  action.payload
 
default:
return state;

}


}


    
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








    



    export function modes(state = "setting"
    
        
    
        
        , action) {
            
            switch (action.type) {
            
                case "MODES":
                
                return  action.payload
                       
                 
                   
        
                default:
                    return state;
            }
        }