import React from 'react';

import { connect } from 'react-redux';
import { createBook } from '../actions';

export const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

class BooksForm extends React.Component {

  state = {
    title: '',
    category: ''
  };

  componentDidMount() {
    // add a few initial books
    this.props.createBook({
      title: 'Book 0',
      category: categories[0]
    });
    this.props.createBook({
      title: 'Book 1',
      category: categories[1]
    });
    this.props.createBook({
      title: 'Book 2',
      category: categories[2]
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createBook(this.state);
    this.setState({
      title: '',
      category: ''
    });
  }

  render() {

    const { title, category } = this.state;
  
    return (
      <form 
        className="form-inline"
        onSubmit={this.handleSubmit} >
        <input 
          name="title"
          className="form-control mr-2" 
          type="text" 
          placeholder="Title"
          value={title}
          onChange={this.handleChange} />
        <select 
          name="category"
          className="form-control mr-2" 
          defaultValue={category}
          onChange={this.handleChange}
        >
          <option value="" disabled>Category</option>
          { categories.map(cat => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          )) }
        </select>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }

}

export default connect(null, { createBook })(BooksForm);