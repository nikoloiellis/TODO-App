import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ListToDOesComponent.module.css';



class ListToDOesComponent extends Component{
  constructor(props){
    super(props);
    this.state= {

      //turning state into an array with objects inside of it 
      todo: [
        {id:1, description: 'Learn React', done:false, targetDate: new Date()},
        {id:2, description: 'Learn Spring Framework',done:false, targetDate: new Date()},
        {id:3, description: 'Learn Angular', done:false, targetDate: new Date()}
      
    ]
  }

  }
  render(){


    return(
    <div className={styles.ListToDOesComponent} data-testid="ListToDOesComponent">
    
    <h1>List Todo</h1>
    <table>
      <thread>
        <tr>
          <th>
            id
          </th>
          <th>description</th>
          <th>target Date</th>
          <th>done?</th>
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
          </tr>
            )
          }
        </tbody>
      </thread>
    </table>
  </div>
  );
  }
  
  
}



ListToDOesComponent.propTypes = {};

ListToDOesComponent.defaultProps = {};

export default ListToDOesComponent;


