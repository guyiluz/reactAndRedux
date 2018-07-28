

export function ProfileFromSerever(state = {
    profiles:[],
    doneLoading:false
 

}, action) {
    
    switch (action.type) {
        case "ISLOADING":
            return {
                ...state,
                profiles:action.payload.profiles,
                doneLoading:action.payload.doneLoading

         
            };
            r
        default:
            return state;
    }
}




export function profileData(state = {
    profileData:{},
 

}, action) {
    
    switch (action.type) {
        case "GETPROFILEDATA":
            return {
                ...state,
                profileData:action.payload.profileData,

         
            };

        default:
            return state;
    }
}


export function profileFilters(state = {
    filters:{},
 

}, action) {
    
    switch (action.type) {
        case "GETFILTERS":
 
            return {
                
                ...state,
                filters:action.payload.filters,

         
            };

        default:
            return state;
    }
}







export function profileJsonData(state = {
jsonData:[]

}, action) {
    
    switch (action.type) {
        case "PROFILEJSONDATA":
            return {
                ...state,
                jsonData:action.payload.jsonData

         
            };

        default:
            return state;
    }
}



export function newProfileBtn(state = false

    , action) {
        
        switch (action.type) {
            case "NEWPROFILE":
                return  state=action.payload                  
              
    
             
               
            default:
                return state;
        }
    }
    
    export function saveChanges(state = false
        
            , action) {
                
                switch (action.type) {
                    case "SAVES":
                        return  state=action.payload                  
                      
            
                     
                       
                    default:
                        return state;
                }
            }
            


    



    






export function profileNew(state = {
    data:{},
    createdBy:1,
    name:""
 
    
    }, action) {
        
        switch (action.type) {
            case "PROFILENEW":
            
                return {
                    ...state,
                    data:action.payload.data,
                    createdBy:action.payload.createdBy,
                    name:action.payload.name
             
                };
    
            default:
                return state;
        }
    }





  


        
    export function selectedProfile( state=0
  

        , action) {
            
            switch (action.type) {
            
                case "SELECTEDPROFILE":
                
                    return   action.payload 
                      
                    
                       
                 
                   
        
                default: 
                    return state;
            }
        }
        


              
export function profileModesTemplate(state=[],
action
){

    switch(action.type){
case "PROFILEMODESTEMPLATE":
return   action.payload 
                      
                    
                       
                 
                   
        
default: 
    return state;

    }

}



export function paramsData(state=[],
    action
    ){
    
        switch(action.type){
    case "PARAMSDATA":
    return   action.payload 
                          
                        
                           
                     
                       
            
    default: 
        return state;
    
        }
    
    }
    





