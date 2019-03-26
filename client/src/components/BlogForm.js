import React from 'react';
import { connect, } from 'react-redux';
import { updateBlog, addBlog, } from '../reducers/blogs';
import { Form, Button , TextArea} from 'semantic-ui-react';

class BlogForm extends React.Component {
  initialState = { 
    name: "", 
    body: "", 
  };

  state = {...this.initialState};

  componentDidMount() {
    if (this.props.id) 
      this.setState({...this.props});
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const blog = { ...this.state };
      const { dispatch, closeForm, } = this.props;
      const func = this.props.id ? updateBlog : addBlog;
      dispatch(func(blog));
      closeForm();
    }

  render() {
    const { name, body,  } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
      <hr />
        <Form.input
          name='name'
          autoFocus
          value={name}
          placeholder="Name"
          title="Blog"
          onChange={this.handleChange} 
          />
          <br />
      <Form.Field
          control={TextArea}
          name='body'
          value={body}
          placeholder="Body"
          title="Body"
          onChange={this.handleChange} 
          />
        <Form.Field
          control={Button}
          content='Submit'
          />
      </Form>
      )
    }
  }  

export default connect()(BlogForm);
