import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createBook } from '../actions';
import { api } from '../REST/api';
import categories from '../sample-data/categories';

class BooksForm extends React.Component {
  state = {
    title: '',
    category: '',
  };

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
    const { loading, error } = this.props;

    const errorMessage = error
      ? <div className="alert alert-danger">{error}</div>
      : '';
    const submitButton = loading
      ? <button type="submit" className="btn btn-primary flex-fill" disabled>Adding...</button>
      : <button type="submit" className="btn btn-primary flex-fill">Add Book</button>;

    return (
      <>
        <h5 className="text-muted text-uppercase mb-3">Add New Book</h5>
        <form
          className="form-inline justify-content-between mb-3"
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
          { submitButton }
        </form>
        { errorMessage }
      </>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapStateToProps = ({ booksForm: { loading, error } }) => ({
  loading,
  error,
});

const mapDispatchToProps = dispatch => ({
  createBook: createBook(api, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
