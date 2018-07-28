
export function addPushNot(action){
    const postOption = {    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }, 
    }
    
    let userToken = window.localStorage.getItem("hereoToken")
    const URL = window.localStorage.getItem("hereORootURl") 
    const isPush = window.localStorage.getItem("isPush")

    if (!firebase.apps.length) {


            const  sendTokenToServer=(token)=>{
                if(isPush=="true"){

                    return false
                }
                
              
                
                else {

                 fetch(`${URL}/core.svc/SetFirebaseToken`, {
                 ...postOption,
                         body:JSON.stringify({userToken,appType:3,token})
                 
                     }).then(res => res.json())
                     .then((data)=>{
               
                     }
            
                    )}
               
               
               }

            
                   
        
               
                 var config = {
                 apiKey: "AIzaSyCnNU2pITii8Cd6TOMz7QOXTnYkcoEi-ko",
                   authDomain: "hereo-core.firebaseapp.com",
                   databaseURL: "https://hereo-core.firebaseio.com",
                   projectId: "hereo-core",
                   storageBucket: "hereo-core.appspot.com",
                   messagingSenderId: "193544794270"
                   };
                   firebase.initializeApp(config);
                 // Get Instance ID token. Initially this makes a network call, once retrieved
                 // subsequent calls to getToken will return from cache.
                 
                 const messaging = firebase.messaging();
                   messaging.requestPermission()
               .then(function() {
                 localStorage.setItem("isPush","true")
                 
                 messaging.getToken()
                 .then(function(currentToken) {
                   if (currentToken) {

                    localStorage.setItem('pushToken',currentToken)
                     sendTokenToServer(currentToken);
                  messaging.onMessage(function(payload) {
                                  
                                   
                            const notAmamunt =document.getElementsByClassName( "badge-pill")[0].innerText

                                   document.getElementsByClassName( "badge-pill")[0].innerText=parseInt(notAmamunt)+1
                                   document.getElementsByClassName("d-md-down-none")[2].onclick=()=>{
                                    document.getElementsByClassName( "badge-pill")[0].innerText="0"

                                   }


                                   action(payload)
                                })
               
                   } else {
                     // Show permission request.
                     // Show permission UI.
                 
                   }
                 })
                 .catch(function(err) {
                 });
               
               
               
                 
               })
               .catch(function(err) {
               });
                 

           }
        
    }


 



