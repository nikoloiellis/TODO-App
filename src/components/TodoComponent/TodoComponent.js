import React, {Component}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment/moment';
import TODODataService from '../../api/TODODataService';
import AuthenticationService from '../TodoApp/AuthenticationService';

class TodoComponent extends Component{

  constructor(props) {
    super(props)

    this.state = {
        id: this.props.params.id,
        description: ``,
        targetDate: moment(new Date()).format(`YYYY-MM-DD`)
    }


    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);

  }

  componentDidMount() {

    if (this.state.id === -1) {
        return
    }

    let username = AuthenticationService.getLoggedInUser();

    TODODataService.retrieveTodos(username, this.state.id)
        .then(response => this.setState({
            description: response.data.description,
            targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
}

onSubmit(values) {
    let username = AuthenticationService.getLoggedInUser();

    let todo = {
        id: this.state.id,
        description: values.description,
        targetDate: values.targetDate
    }

    if (this.state.id === -1) {
        TODODataService.createTodo(username, todo)
            .then(() => this.props.navigate('/todo')) //REACT-6
        //this.props.history.push('/todos')
    } else {
        TODODataService.updateTodo(username, this.state.id, todo)
            .then(() => this.props.navigate('/todo'))//REACT-6
        //this.props.history.push('/todos')
    }

    console.log(values);
}

validate(values) {
    let errors = {}
    if (!values.description) {
        errors.description = 'Enter a Description'
    } else if (values.description.length < 5) {
        errors.description = 'Enter atleast 5 Characters in Description'
    }

    if (!moment(values.targetDate).isValid()) {
        errors.targetDate = 'Enter a valid Target Date'
    }

    return errors

}
  render(){
    let { description, targetDate } = this.state
    return (
    
    <div>
 <div className="container">
                    <Formik
                        initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
  </div>
    );
  


}







}
TodoComponent.propTypes = {};

TodoComponent.defaultProps = {};

export default TodoComponent;
