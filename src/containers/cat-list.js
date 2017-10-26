import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCat } from '../actions/index';
import { bindActionCreators } from 'redux';

class CatList extends Component {
  renderList() {
    return this.props.cats.map((cat) => {
      return (
        <li
          onClick={() => this.props.selectCat(cat)}

          key={cat.name} className="list-group-item">{cat.name}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
      cats: state.cats
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectCat: selectCat}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CatList);
