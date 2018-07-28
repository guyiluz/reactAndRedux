$( document ).ready(function() {
    var profileEdit=""
    var edit =false
    


    
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }


let coreProfileId =  getParameterByName('profileId'),
CoreProfileModeId=getParameterByName('modeId'),
onEdit=getParameterByName('onEdit');

    if(onEdit=="true"){
        
        edit=true
        $.ajax({
            type: 'POST',
            url: 'https://builder.hereofamily.com/core.svc/GetProfileModes',
            data: JSON.stringify({coreProfileId}),
            success: function(data) {
           
             profileEdit = data.coreProfileMode.filter(item=> item.CoreProfileModeId== parseInt(CoreProfileModeId))

           $("#name").val(profileEdit["0"].ModeName) 
           if(profileEdit["0"].IsDefault){
         
           
            $("#isdef").prop('checked', true);
                  
              }
     

             c() 
       
                
        },
        contentType: "application/json",
        dataType: 'json'
        })
   
         
 
    }else{
        c() 
      
     


        

    }


function c() {
    var conuter = 0
    fetch("https://builder.hereofamily.com/core.svc/GetCoreProfileParams",{
   method:"post",
   headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
    })
    
    .then((resp) => resp.json()) 
    .then(function(data) {
data= data.GetCoreProfileParamsResult
  let ArryOfObj =[]
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
    
let obj={name:key, val:data[key]}

        ArryOfObj.push(obj)  
    }


}


    


conuter =conuter

function add(conuter) {
    var option = [...ArryOfObj]

    
    option= option.map(item=>`<option value= ${item.name}>${item.name}</option>
    `)
    
    var select =`<select id="sel1"  class=${conuter.toString()}  style="
    margin-right: 5px;
">
    ${option}
    </select>`
    
    var fBox= `<div id="fBox"  name class=${conuter.toString()}  style="display:  flex;justify-content: unset;padding: 10px;"   >${select}   <input class="form-control" id="int" type="string" style="width: 17%;margin-right: 5px;">      <button type="button" class="btn btn-danger remove" >Remove</button> </div>`
    $(".main").append(fBox)
    $(`.${conuter.toString()}`).addClass( 'data',"form-control" );
    $( `.${conuter.toString()} select` ).change(function() {
        const valueText = $(this).val(),
        value=ArryOfObj.filter(item=> item.name ==valueText )
   

        $(this).next().val(value[0].val)
       
    
      });
     
}
if(profileEdit){
    profileEdit=profileEdit[0]

   jsonData= JSON.parse(profileEdit.jsonData)

   let jsonDataArr =[]
   for (var key in jsonData) {
     if (jsonData.hasOwnProperty(key)) {
     
 let obj={name:key, val:jsonData[key]}
 
 jsonDataArr.push(obj)  
     }
 
 
 }

 var editHtml =[]
jsonDataArr.map(line=>{

    var option = [...ArryOfObj]
    
        
        option= option.map((item)=>{
            
            if(item.name==line.name){
                return `<option selected="selected" value= ${item.name}>${item.name}</option> `
                
            
            }

            return `<option  value= ${item.name}>${item.name}</option> `
        }) 
        
        
        var select =`<select id="sel1" class=${conuter.toString()}  style="
        margin-right: 5px;
    ">
        ${option}
        </select>`
   
        
        var fBox= `<div id="fBox"  name class=${conuter.toString()}  style="display:  flex;justify-content: unset;padding: 10px;"   >${select}   <input class="form-control" id="int" type="string" style="width: 17%;margin-right: 5px;">      <button type="button" class="btn btn-danger remove" >Remove</button> </div>`
          
        
        
        $(".main").append(fBox)
        $(`.${conuter.toString()}`).addClass( 'data',"form-control" );
        $( `.${conuter.toString()} input` ).val(line.val)
        $( `.${conuter.toString()} select` ).change(function() {
            const valueText = $(this).val(),
            value=ArryOfObj.filter(item=> item.name ==valueText )
            // $(".myCheckBox").checked(true);

    
            $(this).next().val(value[0].val)
          
 
 })

 

 
 conuter++
    })


}else{
    add(conuter)

}



removeLine()
$("#add").on("click", function(){
    conuter++
    add(conuter)
    removeLine()
    
})


function removeLine() {
    $(".remove").on("click", function(){
         
        $ (this).parent().remove()
        conuter= conuter -1
       
        
    })
}



$("#save").on("click", function(){
    
    var jsonData={}
    $(".data").each(function(){
  var name =  $(this).find("#sel1 option:selected").text()
  var  val = $(this).find("#int").val()   


  if(name!==undefined&&val!==undefined){
    jsonData[name]=val    
}





    })

    var  isDefault =document.getElementById('isdef').checked

    if(edit==true){
          
         var  SendData={
            name:document.getElementById("name").value,
        CoreProfileModeId,
        isDefault,
            coreProfileId,

            jsonData:JSON.stringify(jsonData)
           }
        
    }
    else{
        var SendData ={
            coreProfileId,
            name:document.getElementById("name").value,
            isDefault,
            jsonData:JSON.stringify(jsonData)
        
        }

    }

    
    $.ajax({
            type: 'POST',
            url: 'https://builder.hereofamily.com/core.svc/SetProfileModes',
            data: JSON.stringify(SendData),
            success: function(data) { 
               if(data.SetProfileModesResult==1){

                alert("saved!")
                window.location.reload();
               }
             },
            contentType: "application/json",
            dataType: 'json'
        });



})


      })


}

      
      
});
