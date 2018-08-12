

const postOption = {    method: 'post',
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}, 
}

let userToken = window.localStorage.getItem("hereoToken")
let pushToken = window.localStorage.getItem("pushToken")

const URL = window.localStorage.getItem("hereORootURl") 
const isPush = window.localStorage.getItem("isPush")





// export * from './fleet_action';




import {getCoreDeviceAnalizerStatic} from  './device_action'



 




import getDevicesLoctions from "../containers/home/getDevicesLoctions"



export function setPageing(obj){
    return{
    type:"PAGEING",
    payload:obj
    
    }
    
    
    }


    
    export function setfleetmapState(obj){
return (dispatch,getState)=>{
    const {historyMapState}= getState() 
 let newObject={
    ...historyMapState,
    ...obj
 }

dispatch(fleetmapState(newObject))
}


    }



        export function fleetmapState(obj){
            return{
                type:"HISTORYMAP",
                payload:obj
                
            }

        }
    
   

    



export function conFUserToken(){
    

    return (dispatch)=>{
    fetch(URL+'/core.svc/UserLogin', {
        ...postOption,
                body:JSON.stringify({userToken:userToken})
        
            })
            .then(res => res.json())
            .then((user)=>{
                
           if(user.UserLoginResult==-5){

            localStorage.clear("hereoToken") 
            location.reload()
          

           }else{
               localStorage.setItem('nav',user.menuJsonFile)
               
            dispatch(setUserData({
            
                userImage:user.coreUser.userImage==null?"noProfilePic.jpg":user.coreUser.userImage,
                firstName:user.coreUser.firstName,
                lastLogin:user.coreUser.lastLogin,
                notificationCount:user.notificationCount,
                userManu:user.menuJsonFile,
                userEamil:user.coreUser.email

                
        
                 

            }))

           }

              });
   

}

}



export function setUserData(obj){
    return{
    type:"USERDITDATA",
    payload:obj
    
    }
    
    
    }


export function getmMrker() {
    return (dispatch)=>{

        fetch(URL+'/core.svc/GetCoreDevices', {
            ...postOption,
                    body:""
            
                })
                .then(res => res.json())
                .then((deviceList)=>{
                    async function list(x) {
                        const a = await getDevicesLoctions(x);
                    
                        return a
                      }
                      list(deviceList.GetCoreDevicesResult).then(a  => {
                        dispatch(deviceLoc(a)) 
                      });



                  });
       
  
        
     
       }
     }

     export function deviceLoc(obj) {
        return {
            type: "LOCTION",
            payload: obj
        };
    }



    export function getProfileModes(coreProfileId) {
        return (dispatch)=>{
     var postData={
        coreProfileId,
        userToken

     }
            fetch(URL+'/core.svc/GetProfileModes', {
                ...postOption,
                        body:JSON.stringify(postData)
                
                    })
                    .then(res => res.json())
                    .then((data)=>{
                        var list =  data.coreProfileMode
                      
                            dispatch(getModeList({
                                isLoading:true,
                                list

                                
                              }
                            )) 
                          })}}
                     
               export function cloneMode (coreProfileModeId,id){
                return(dispatch)=>{
                    console.log(coreProfileModeId,id)
                    fetch(URL+'/core.svc/CloneMode', {
                        ...postOption,
                                body:JSON.stringify({userToken,coreProfileModeId})
                        
                            })
                            .then(res => res.json())
                            .then((data)=>{
                           dispatch(getProfileModes(id))
                            })

                        }
                    }



                    export function deleteMode (coreProfileModeId,id){
                        return(dispatch)=>{
                            
                            fetch(URL+'/core.svc/DeleteMode', {
                                ...postOption,
                                        body:JSON.stringify({userToken,coreProfileModeId})
                                
                                    })
                                    .then(res => res.json())
                                    .then((data)=>{
                                   dispatch(getProfileModes(id))
                                    })
        
                                }
                            }
        
         
         


         export function getModeList(obj) {
            return {
                type: "GETMODE",
                payload: obj
            };
        }
    

 



        export function handlePush(obj) {
          
            return {
                type: "ALRTBOX",
                payload: obj
            };
        }
    



        


        export function logOut(logoutFromAllDevices){
            return(dispatch)=>{

          
          
            
           
            fetch(URL+'/core.svc/UserLogout', {
                ...postOption,
                        body:JSON.stringify({userToken,logoutFromAllDevices,pushToken})
                
                    })
                    .then(res => res.json())
                    .then((data)=>{
                        localStorage.clear("hereoToken")
                location.reload()
                    })

                }

        }


       

        
        export function getDeviceDashboardData(deviceId){
            return(dispatch)=>{

          dispatch(getAvgRSSI(deviceId))
          dispatch(getCallsNumDev(deviceId))
          
          dispatch(getCoreDeviceAnalizerStatic(deviceId))
            
           
            fetch(URL+'/core.svc/GetDeviceDashboardData', {
                ...postOption,
                        body:JSON.stringify({userToken,deviceId})
                
                    })
                    .then(res => res.json())
                    .then((data)=>{
               dispatch(setDeviceDashboardData(data))
                    })

                }

        }


       





        export function setDeviceDashboardData(obj) {
          
            return {
                type: "DEVICEDASHBOARDDATA",
                payload: obj
            };
        }
    



        



             
        export function getAvgRSSI(deviceId){
            return(dispatch)=>{

          
          
            
           
            fetch(URL+'/core.svc/GetAvgRSSI', {
                ...postOption,
                        body:JSON.stringify({userToken,deviceId})
                
                    })
                    .then(res => res.json())
                    .then((data)=>{
 const coreReport= data.coreReport
                        Object.entries(coreReport).forEach(
                            (key)=>{key[1].map((line)=>{ 
                               
                                line.key=line.key   
                                line.value=parseInt(line.value)  
                                return line 
                               
                            })})

               dispatch(setAvgRSSI(coreReport))
                    })

                }

        }


       




        export function setAvgRSSI(obj) {
          
            return {
                type: "AVGRSSI",
                payload: obj
            };
        }
    




        export function getCallsNumDev(deviceId){
            return(dispatch)=>{

          
          
            
           
            fetch(URL+'/core.svc/GetCallsNum', {
                ...postOption,
                        body:JSON.stringify({userToken,deviceId})
                
                    })
                    .then(res => res.json())
                    .then((data)=>{
 const coreReport= data.coreReport
                        Object.entries(coreReport).forEach(
                            (key)=>{key[1].map((line)=>{ 
                               
                                line.key=line.key   
                                line.value=parseInt(line.value)  
                                return line 
                               
                            })})

               dispatch(setCallsNumdev(coreReport))
                    })

                }

        }


       





        export function setCallsNumdev(obj) {
          
            return {
                type: "CALLSTOTALDEV",
                payload: obj
            };
        }



        

        export function GetchangePassword(obj){
            return(dispatch)=>{

          
          
            
           
            fetch(URL+'/core.svc/ChangePassword', {
                ...postOption,
                        body:JSON.stringify({userToken,...obj})
                
                    })
                    .then(res => res.json())
                    .then((data)=>{
  dispatch(setChangePassword(data))
       
           
                    })

                }

        }




        export function setChangePassword(obj) {
          
            return {
                type: "CHANGEPASSWORDTXT",
                payload: obj
            };
        }

        

        

        export function  setLogONOff(bool) {
          
            return {
                type: "LOGONOOFF",
                payload: bool
            };
        }
