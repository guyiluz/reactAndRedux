import React, { Component } from 'react'
import {Table  } from 'reactstrap';
import {BrowserRouter as Router ,Link, Route} from 'react-router-dom'
import {connect} from "react-redux";
import {getProfilesList,getProfileModes,cloneMode,deleteMode
    } from "../../actions/items";

    import {
       Button
      } from 'semantic-ui-react'


class Modes extends Component {
    
    componentWillMount(){
const id=  this.props.location.search.replace("?","")
this.props.getProfileModes(id)



    
 }

 handelCloneMode=(e)=>{
const modeID = e.currentTarget.name
const id=  this.props.location.search.replace("?","")
this.props.cloneMode(modeID,id)


 }



 handelDeleteMode=(e)=>{
    const modeID = e.currentTarget.name
    const id=  this.props.location.search.replace("?","")
    this.props.deleteMode(modeID,id)
    
    
     }


    render () {
        const idParam= this.props.location.search.replace("?","")

        var bnt =<Button> <Link  to={{ query:{profileId :idParam, onEdit:false },  pathname:'/qa/edit'}}>New</Link></Button>
        
        const {isLoading,list}= this.props.modeList
        
        if(isLoading||list.length!==0 ){
        let DataTable = list.map((tr,index)=>{
            
            let deFault ="No"
            if(tr.IsDefault){
                deFault ="Yes"
            }

            return (
                <tr key={index} >
                <td>{tr.ModeName} </td>
                <td>{tr.CoreProfileModeId} </td>
                <td>{deFault}</td>
                <td><Link  to={{ query: { modeId: tr.CoreProfileModeId, profileId :tr.CoreProfileId,onEdit:true },   pathname:'/qa/edit'}}>edit</Link></td>
                <td><Button name={tr.CoreProfileModeId} onClick={this.handelCloneMode} >Clone</Button></td>
                <td><Button name={tr.CoreProfileModeId} onClick={this.handelDeleteMode} >Delete</Button></td>

                 </tr>

            )


        })
        
            return(
              <div>
                  <p>Profile: {this.props.ProfileFromSerever.profiles.profiles.find(profile=>profile.CoreProfileId==this.props.location.search.replace("?","")).Name}</p>
          {bnt}
                <Table responsive className="profile-table text-capitalize" >
                <thead>
                <tr>
                  <th>Mode Name</th>
                  <th>Mode Id</th>
                  <th>Default</th>
                  <th>Edit</th>
                  <th>Clone</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {DataTable}
                </tbody>
              </Table> 

              </div>

            )
          

        }

        
        return (
            <div>
                {bnt}
 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {ProfileFromSerever: state.ProfileFromSerever,
        modeList:state.modeList
    
        
        };

};

const mapDispatchToProps = (dispatch) => {
    return {
        getProfilesList: () => dispatch(getProfilesList()),
        getProfileModes: (coreProfileId) => dispatch(getProfileModes(coreProfileId)),
        cloneMode: (coreProfileModeId,id) => dispatch(cloneMode(coreProfileModeId,id)),
        deleteMode: (coreProfileModeId,id) => dispatch(deleteMode(coreProfileModeId,id))

        


   


        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modes);


