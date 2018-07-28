
export function logList(state = []
    
    , action) {
        
        switch (action.type) {
        
            case "LOGDATA":
            
                return   action.payload 
                   
             
               
    
            default:
                return state;
        }
    }



    export function logTableData(state = {
        td:["SendDate","SerialNum","Reason","SignalQ","GPSLat","GPSLong","LocationSource"],
        th:[ "Send Date","Device ICCID","Reason","SignalQ","lat","Long","Location Source"]             



    }
    
        , action) {
            
            switch (action.type) {
            
                case "LOGTABLE":
                    return  {
   
                            ...state,
                            td:action.payload.td,
                            th:action.payload.th,
                            
                            

                    }
                       
                 
                   
        
                default:
                    return state;
            }
        }
    



        
        export function reasonLogList(state = []
    
            , action) {
                
                switch (action.type) {
                
                    case "LOGREASON":
                    
                        return   action.payload 
                           
                     
                       
            
                    default:
                        return state;
                }
            }
        


               
        export function logONOff(state = false
    
            , action) {
                
                switch (action.type) {
                
                    case "LOGONOOFF":
                    
                        return   action.payload 
                           
                     
                       
            
                    default:
                        return state;
                }
            }
        



