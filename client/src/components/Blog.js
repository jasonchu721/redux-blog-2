import React from 'react';
import { connect, } from 'react-redux';
import { Button, Container, Table, Header, Card, Segment, List } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import BlogForm from './BlogForm';
import { deleteBlog, } from "../reducers/blogs";

  class Blog extends React.Component {
    state = { showForm: false };
  
    toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
    }

    handleDelete = () => {
      const { blog, dispatch, history: { push, }, } = this.props;
      dispatch(deleteBlog(blog.id));
      push("/blogs");
    }
  
    render() {
      const { showForm } = this.state
      const { blog = {} , } = this.props

    return (
      <Container>
        <Link to ='/blogs'> View Blog Post</Link>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit'}
        </Button>
        <Button onClick={this.handleDelete}>
          Delete
        </Button>
      { showForm ?
        <BlogForm {...blog} closeForm={this.toggleForm} />
        :
        <div>
          <Header as="h3" textAlign="center">{blog.name}</Header>
          <Table definition>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Title</Table.Cell>
                <Table.Cell>{blog.body}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      }
    </Container>
    )
  } 
}

// const mapStateToProps = (state, props) => {
//   return { blog: state.blogs.find( b => b.id === parseInt(props.match.params.id, )) };
// }
export default connect()(Blog);
// mapStateToProps