import React from 'react';
import Blog from './Blog';
import BlogForm from './BlogForm'
import { connect, } from 'react-redux'
import { Button, List, Container } from 'semantic-ui-react';

class Blogs extends React.Component {
  state = { showForm: false }
  
  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showFOrm }; 
    })
  }

  render() {
    const { toggleNew } = this.state
    const { blogs } = this.props
    return (
      <Container>
        <h1>Soccer Mom Blog </h1>
        <hr />
        <Button
          onClick={this.toggleNew}
          content="New Blog"/>
        {
          toggleNew ? 
          <BlogForm />
        :
          null
        }
    <List>
      {blogs.map(blog => {
        return (
          <Blog key={blog.id} {...blog} />
      )}
      )}
    </List>
    </Container>
    )
        }
      }

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(Blogs);