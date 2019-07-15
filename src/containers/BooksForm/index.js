import React from 'react';

import { connect } from 'react-redux';
import { createBook } from '../../actions';

class BooksForm extends React.Component {

  state = {
    title: '',
    category: ''
  };

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
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

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