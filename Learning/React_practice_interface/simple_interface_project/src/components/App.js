import React, { Component } from 'react';
import '../css/App.css';

//refrence to a class created in AddAppointments.js
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';
import { findIndex, without } from 'lodash';




class App extends Component {

constructor(){
  super();
  this.state = {
    myAppointments:[],
    formDisplay:true,
    orderBy: 'ownerName',
    orderDir: 'asc',
    queryText: '',
    lastIndex:0

  };
  this.deleteAppointment = this.deleteAppointment.bind(this);
  this.toggleForm = this.toggleForm.bind(this);
  this.AddAppointments = this.AddAppointments.bind(this);
  this.changeOrder = this.changeOrder.bind(this);
  this.searchApts = this.searchApts.bind(this);
  this.updateInfo = this.updateInfo.bind(this);
}

deleteAppointment(apt){
  let tempApts=this.state.myAppointments;
  //without is from lodash
  tempApts=without(tempApts,apt);
  this.setState({
    myAppointments: tempApts
  })
}

toggleForm(){
  this.setState({
    formDisplay: !this.state.formDisplay
  });
}

AddAppointments(apt){
  let tempApts=this.state.myAppointments;
  apt.aptId =this.state.lastIndex;
  tempApts.unshift(apt);
  this.setState({
    myAppointments: tempApts,
    lastIndex:this.state.lastIndex + 1
  });
}

changeOrder(order,dir){

  this.setState({
    orderBy:order,
    orderDir:dir

  });

}

searchApts(query){
  this.setState({queryText:query});
}

updateInfo(name,value,id){
  let tempApts = this.state.myAppointments;
  let aptIndex = findIndex(this.state.myAppointments,{
    aptId:id
  });
  tempApts[aptIndex][name] = value;
  this.setState({
    myAppointments:tempApts
  });
}

//import of "component" "lifecycle method", we use it to import information from external source

componentDidMount(){
  fetch('./data.json')
  //fetch API works with promises so we can use .than method
  .then(Response => Response.json())
  .then(result => {
    const apts = result.map( item => {
      item.aptId=this.state.lastIndex;
      //counter for index
      this.setState({lastIndex:this.state.lastIndex+1})
      return item;
    })
    //part with lifecycle method and fetch
      this.setState({
      myAppointments: apts
    });
  
  });
}
 
 
 

  render() {
    
    let order;

    let filteredApts =  this.state.myAppointments;
    if (this.state.orderDir === 'asc')
    {
      order=1;
    } else{
      order=-1;
    }

      filteredApts = filteredApts.sort((a,b) =>{
        if (a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase())
          {
            return -1 * order;
          } else{
            return 1 * order;
          }
      }).filter(eachItem =>{
        return(
          eachItem['petName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) || 
          eachItem['ownerName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) || 
          eachItem['aptNotes']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) 

        )
      });


  //working with complex data

   
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {this.state.myName}
               
                <AddAppointments
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm} 
                  AddAppointments={this.AddAppointments}
                />
                <SearchAppointments
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  searchApts={this.searchApts}
                />
                <ListAppointments 
                  appointments={filteredApts}
                  deleteAppointment={this.deleteAppointment}
                  updateInfo={this.updateInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
