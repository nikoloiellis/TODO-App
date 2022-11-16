import React, {Component} from 'react';
import TODODataService from '../../api/TODODataService'; 
import AuthenticationService from '../TodoApp/AuthenticationService';
import styles from './ListToDOesComponent.module.css';



class ListToDOesComponent extends Component{
  constructor(props){
    super(props);
    this.state= {

      //turning state into an array with objects inside of it 
      todo: [],
      message: null
  }

  this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
  this.refreshTodo = this.refreshTodo.bind(this);
  this.updateTodo = this.updateTodo.bind(this);

  }


  //Lifecycle happens after render, perfect for api calls
  componentDidMount(){

    this.refreshTodo();
 
  }
  render(){


    return(
    <div className={styles.ListToDOesComponent} data-testid="ListToDOesComponent">
    
    <h1>List Todo</h1>
{   this.state.message && <div>{this.state.message}</div>}
    <table>
      <thread>
        <tr>
          <th>
            id
          </th>
          <th>description</th>
          <th>target Date</th>
          <th>done?</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        <tbody>

          {/* In order to loop through state objects you need to use map. specifically a map arrow function the second 
          todo represents the split data.  */}
          {         

            this.state.todo.map(
              todo => 
          
          <tr> 
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.targetDate.toString()}</td>
              <td>{todo.done.toString()}</td>
              <td><button onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
              <td><button onClick={() => this.updateTodo(todo.id)}>Update</button></td>

          </tr>
            )
          }
        </tbody>
      </thread>
    </table>
  </div>
  );
  }
  

  deleteTodoClicked(id){
    let username = AuthenticationService.getLoggedInUser();
    // console.log(id + "" + username)
    TODODataService.deleteToDo(username, id).then(
      response => {
        this.setState({message: `Detele todo of ${id}`});
        this.refreshTodo(); 
      }
    )
  }

  refreshTodo(){

    let username = AuthenticationService.getLoggedInUser();
    TODODataService.retrieveAllTodos(username).then(

      response => {
        //console.log(response);
        this.setState({todo: response.data})
      }
    )
  }

  updateTodo(id){

    console.log("update TODO" + id); 
    this.props.navigate(`/todo/${id}`);
    
    // let username = AuthenticationService.getLoggedInUser();
    // // console.log(id + "" + username)
    // TODODataService.deleteToDo(username, id).then(
    //   response => {
    //     this.setState({message: `Detele todo of ${id}`});
    //     this.refreshTodo(); 
    //   }
    // )
  }
  
}



ListToDOesComponent.propTypes = {};

ListToDOesComponent.defaultProps = {};

export default ListToDOesComponent;


