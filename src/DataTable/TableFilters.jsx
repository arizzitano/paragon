import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const TableFilters = ({
  columns, manualFilters, onFilter, currentFilters,
}) => (
  <div>
    <h4>Filters</h4>
    {columns.map(column => <div key={column.Header}>{column.canFilter ? column.render('Filter') : null}</div>)}
    {manualFilters && <Button type="primary" onClick={() => onFilter(currentFilters)}>Filter</Button>}
  </div>
);

TableFilters.defaultProps = {
  manualFilters: false,
  onFilter: () => {},
};

TableFilters.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string.isRequired,
    canFilter: PropTypes.bool,
    render: PropTypes.func.isRequired,
  })).isRequired,
  manualFilters: PropTypes.bool,
  onFilter: PropTypes.func,
  currentFilters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TableFilters;
