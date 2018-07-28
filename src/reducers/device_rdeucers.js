import Moment from 'moment'

var date = Moment()
const toDate = date.unix().toString() 
 
const fromDate = date.subtract(1, 'hours').unix().toString()



export function profilesListAll(state = []

    , action) {
        
        switch (action.type) {
            case "PROFILELIST":
                return   action.payload 
                   
             
               
    
            default:
                return state;
        }
    }
    
    
    
    export function deviceList(state = []
    
    , action) {
        
        switch (action.type) {
        
            case "DEVICELIST":
            
                return   action.payload 
                   
             
               
    
            default:
                return state;
        }
    }
    
    
    
    export function profileSelected(state = {
        coreProfileId:0,
        userId:0,
        text:""
    
    
    
    }
    
        , action) {
            
            switch (action.type) {
                case "PROFILESELECT":
                    return   {
                        ...state,
                        coreProfileId:action.payload.coreProfileId,
                        userId:action.payload.userId,
                        text:action.payload.text
                    
    
                    }
                       
                 
                
        
                default:
                    return state;
            }
        }
        
        
        export function modalShowHide(state = false
            
            , action) {
                
                switch (action.type) {
                    case "MODAL":
                        return  state=action.payload                  
                      
            
                     
                       
                    default:
                        return state;
                }
            }
        
    
    
    
    
    
    

            // Old core reducers




export function ShowHideManue(state = false, action) {
    switch (action.type) {
        case "SHOW/HIDE":
            return action.payload;

        default:
            return state;
    }
}





export function tableLoading(state = {
    dataProfiles:{},
    dataDev:{},
    isLoading:true

}, action) {
    
    switch (action.type) {
        case "ISLOADING":
            return {
                ...state,
                dataProfiles:action.payload.dataProfiles,
                dataDev:action.payload.dataDev,
           isLoading:action.payload.isLoading
     
         
            };

        default:
            return state;
    }
}




export function DataDetails(state = {
    userId:"",
    fromDate:fromDate,
    toDate:toDate,
    profile:""
}, action) {
    
    switch (action.type) {
        case "DEVICEDETILS":
            return {...state,
                userId:action.payload.userId,
                fromDate:action.payload.fromDate,
                toDate:action.payload.toDate,
                profile:action.payload.profile

            }

        default:
            return state;
    }
}


export function deviceData(state = {
    data:{},
    isLoading:false
}, action) {
    switch (action.type) {
        case "DEVICEDATA":
            return {...state,
                data:action.payload.data,
                isLoading:action.payload.isLoading
            }

        default:
            return state;
    }
}




export function mapData(state ={
    offset:0
}, action) {
    switch (action.type) {
        case "MAPOVER":
            return {...state,
                offset:action.payload.offset,
            }

        default:
            return state;
    }
}




export function buttonDisplay(state ={
    date:true,
    save:false,
    edit:false
}, action) {
    switch (action.type) {
        case "BTN":
            return {...state,
                date:action.payload.date,
                save:action.payload.save,
                edit:action.payload.edit
            }

        default:
            return state;
    }
}


export function geoFence(state ={
   isAddress:false,
   latLng:[],
   data:[]
}, action) {
    switch (action.type) {
        case "GEOF":
            return {...state,
                isAddress:action.payload.isAddress,
                latLng:action.payload.latLng,
                data:action.payload.data
            }
        default:
            return state;
    }
}



export function newGeoFence(state ={
    address: "",
    latPos: 0,
    longPos: 0,
    radius: 150,
    szName:undefined,
    userId:""
 }, action) {
     switch (action.type) {
         case "NEWGEOF":
             return {...state,
                address:action.payload.address,
                latPos:action.payload.latPos,
                longPos:action.payload.longPos,
                radius: 150,
                szName:action.payload.szName,
                userId:action.payload.userId

             }
         default:
             return state;
     }

     
 }





export function notifction(state ={
   data:[],
   isLoading:false
 }, action) {
     switch (action.type) {
         case "GETNOTIF":
             return {...state,
                data:action.payload.data,
                isLoading:action.payload.isLoading,
             }
         default:
             return state;
     }
 }
 


 export function tablePages(state ={
    pageNum:1,
    pageCount:0
  }, action) {
      switch (action.type) {
          case "TABLEPAGES":
              return {...state,
                pageNum:action.payload.pageNum,
                pageCount:action.payload.pageCount,
              }
          default:
              return state;
      }
  }
  
     
    

 export function deviceListShowHide(state = false

    , action) {
        
        switch (action.type) {
            case "LISTSHOWHIDE":
                return  state=action.payload                  
              
    
             
               
            default:
                return state;
        }
    }




    export function searchTable(state ={
        type:"",
        value:""
      }, action) {
          switch (action.type) {
              case "SEARCHTABLE":
                  return {...state,
                    type:action.payload.type,
                    value:action.payload.value,
                  }
              default:
                  return state;
          }
      }
      
         
      export function activateDevice(state =0

        , action) {
            switch (action.type) {
                case "ACRIVETDEVICE":
                    return action.payload
        
                default:
                    return state;
            }
        }
        
    
    





export function showDevActiveModal(state =false

, action) {
    switch (action.type) {
        case "ACTIVEMODAL":
            return action.payload

        default:
            return state;
    }
}




export function deviceHistoryLoggger(state =false

    , action) {
        switch (action.type) {
            case "DEVICEHISTORYLOGGGER":
                return action.payload
    
            default:
                return state;
        }
    }
    


 
    export function deviceAnalizerStatis(state =[]

        , action) {
            switch (action.type) {
                case "COREDEVICEANALIZERSTATIS":
                    return action.payload
        
                default:
                    return state;
            }
        }
        
    




    
    

    
    






