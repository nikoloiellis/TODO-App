import React, {Component}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment/moment';

class TodoComponent extends Component{

  constructor(props) {
    super(props)

    this.state = {
        id: this.props.params.id,
        description: ``,
        targetDate: moment(new Date()).format(`YYYY-MM-DD`)
    }
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
