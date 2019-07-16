import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createBook } from '../actions';

export const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  state = {
    title: '',
    category: '',
  };

  componentDidMount() {
    // add a few initial books
    const { createBook: createBookDispatch } = this.props;

    createBookDispatch({
      title: 'Book 0',
      category: categories[0],
    });
    createBookDispatch({
      title: 'Book 1',
      category: categories[1],
    });
    createBookDispatch({
      title: 'Book 2',
      category: categories[2],
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { createBook: createBookDispatch } = this.props;

    createBookDispatch(this.state);
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const { title, category } = this.state;

    return (
      <>
        <h5 className="text-muted text-uppercase mb-3">Add New Book</h5>
        <form
          className="form-inline justify-content-between"
          onSubmit={this.handleSubmit}
        >
          <input
            name="title"
            className="form-control mr-3 flex-fill"
            type="text"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
            required
          />
          <select
            name="category"
            className="form-control mr-3 flex-fill"
            value={category}
            onChange={this.handleChange}
            required
          >
            <option value="" disabled>Category</option>
            { categories.map(cat => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            )) }
          </select>
          <button type="submit" className="btn btn-primary flex-fill">Add Book</button>
        </form>
      </>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
