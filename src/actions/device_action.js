
const postOption = {    method: 'post',
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}, 
}
const URL = window.localStorage.getItem("hereORootURl") 

let userToken = window.localStorage.getItem("hereoToken")
import {setPageing} from "./items"

import {chageFleetMode} from "./fleet_action"




//Action defualt options



export function getCoreDevicesAndProfiles( pageNum=1,q=0) {
    
    let objToServer={}
    objToServer.userToken=window.localStorage.getItem("hereoToken")
    objToServer.pageNum=pageNum
    objToServer.rowCount=10
    let obj= {}
    obj=objToServer
    if(q!==0){
     
    Object.assign(objToServer,q );
    }


    return (dispatch,getState)=>{
   
           
    fetch(URL+'/core.svc/GetCoreProfiles', {
  ...postOption,
          body:JSON.stringify({userToken})
  
      })
      .then(res => res.json())
      .then((profilesList)=>{
        dispatch(getProfilesListAll(profilesList.profiles))
      
            fetch(URL+'/core.svc/GetDevices', {
                ...postOption,
                        body:JSON.stringify(objToServer)
                
                    })
            
                    .then(res => res.json())
                    .then((deviceList)=>{
                        dispatch(setPageing({
        
                            pageCount: deviceList.pageCount,
                            currentPage:pageNum
                        }))                       
                       
                        dispatch(getDeviceList(deviceList.coreDevicesList))
                      });
                        
    

       
        });
        
     
     
       }
     }


     export function setCoreProfile (){
        return (dispatch, getState)=>{
    const {profileSelected} =getState()
        dispatch(getModalShowHide(false))
       
    
            fetch(URL+'/core.svc/SetCoreDevice', {
                ...postOption,
                        body:JSON.stringify({
                            coreProfileId: parseInt(profileSelected.coreProfileId),
                            userId: parseInt(profileSelected.userId),
                            userToken
                          
                           
                        })
                    })
                    .then(res => res.json())
                    .then((res)=>{
                    
             
              })
     
            }
          };
              
           
            
     

     export function getProfilesListAll(obj) {
        return {
            type: "PROFILELIST",
            payload: obj
        };
    }


    export function getDeviceList(obj) {
        return {
            type: "DEVICELIST",
            payload: obj
        };
    }




    export function getProfileSelected(obj) {
        return {
            type: "PROFILESELECT",
            payload: obj
        };
    }




    export function getModalShowHide(bool) {
        return {
            type: "MODAL",
            payload: bool
        };
    }
    



export function ShowHideManue(bool) {
    return {
        type: "SHOW/HIDE",
        payload: bool
    };
}



export function getDevicesList() {
  return (dispatch)=>{
    fetch(URL+'/core.svc/GetCoreProfiles', {
...postOption,
        body:JSON.stringify({userToken})

    }).then(res => res.json())
    .then((proData)=>{
           
           fetch(URL+'/core.svc/GetCoreDevices', {
            ...postOption, 
               body:JSON.stringify({userToken})

           }).then(res => res.json())
           .then((DevData)=>{

             
           });
    

      
    })
    
   


  }
}

export function getDeviceHistoryLoggger(bool) {
    return {
        type: "DEVICEHISTORYLOGGGER",
        payload: bool
    };
}



export function getDeviceHistory(userId,fromDate,toDate) {
    
    return (dispatch)=>{
        dispatch(getDeviceHistoryLoggger(true))
        
    fetch(URL+'/core.svc/GetCoreDeviceAnalizer', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        body:JSON.stringify({ deviceId:userId,fromDate,toDate ,userToken} )
    }).then(res => res.json())
    .then((data)=>{
       return  dispatch(deviceData({
            data:data.coreDataList,
            
            isLoading:true}))



    }).then((data)=>{

        dispatch(getDeviceHistoryLoggger(false))
        dispatch(chageFleetMode("history"))
    }
    
   
    
  

    )





        



    }

 


}


export function setNewDevice(obj) {
    
    return (dispatch,getState)=>{
        const {activateDevice} = getState()
        obj.userToken=userToken 
           
        
        fetch(URL+"/core.svc/ActivateDevice",{
            ...postOption,
            body:JSON.stringify(obj) }).then(res => res.json())
            .then((data)=>{
                dispatch(getCoreDevicesAndProfiles())
                dispatch(getShowDevActiveModal(false))
       
            })
        



     

    }}






export function setDataDetails(obj) {
    return {
        type: "DEVICEDETILS",
        payload: obj
    };
}

export function deviceData(obj) {
    return {
        type: "DEVICEDATA",
        payload: obj
    };
}



export function mapData(obj) {
    return {
        type: "MAPOVER",
        payload: obj
    };
}






export function buttonDisplay(obj) {
    return {
        type: "BTN",
        payload: obj
    };
}


export function geoFence(obj) {
    return {
        type: "GEOF",
        payload: obj
    };
}

export function newGeoFence(obj) {
    return {
        type: "NEWGEOF",
        payload: obj
    };
}


export function notifction(obj) {
    return {
        type: "GETNOTIF",
        payload: obj
    };
}



export function getListShowHide(obj) {
    return {
        type: "LISTSHOWHIDE",
        payload: obj
    };
}


export function getTablePages(obj) {
    return {
        type: "TABLEPAGES",
        payload: obj
    };
}


export function getSearchTable(obj) {
    return {
        type: "SEARCHTABLE",
        payload: obj
    };
}



export function getShowDevActiveModal(bool) {
    return {
        type: "ACTIVEMODAL",
        payload: bool
    };
}


export function  getActivateDevice (int) {
    return {
        type: "ACRIVETDEVICE",
        payload: int
    };
}

 
export function saveDeviceName (userId,deviceName){

    fetch(URL+"/core.svc/SetCoreDevice",{
        ...postOption,
        body:JSON.stringify({userId,deviceName,userToken})})
        .then(res => res.json())
        .then((data)=>{
    
   
        })
     





}


 
export function deleteDevice (deviceId){
return (dispatch)=>{

    fetch(URL+"/core.svc/ReleaseCore",{
        ...postOption,
        body:JSON.stringify({deviceId,userToken})})
        .then(res => res.json())
        .then((data)=>{
    
   dispatch(getCoreDevicesAndProfiles())
        })
     


}





}


 
export function getCoreDeviceAnalizerStatic (deviceId){
    return (dispatch)=>{
    
        fetch(URL+"/core.svc/GetCoreDeviceAnalizerStatic",{
            ...postOption,
            body:JSON.stringify({deviceId,userToken,topResult:10000})})
            .then(res => res.json())
            .then((data)=>{
                const dataWithLoc = data.coreDataList
                .filter((item)=>{
                  return item.GPSLat!==null


                })
       dispatch(setCoreDeviceAnalizerStatis(dataWithLoc))
            })
         

    
    }
    
    
    
    
    
    }
    
    
    

    export function  setCoreDeviceAnalizerStatis (arry) {
        return {
            type: "COREDEVICEANALIZERSTATIS",
            payload: arry
        };
    }
    






