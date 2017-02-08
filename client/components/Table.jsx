import React, { Component } from 'react'
import Side from './Side.jsx'

const Table = ({ handleChange, handleSubmit }) => {
  return (
    <div className="table">
      <Side handleChange={handleChange} id="side1" />
      <Side handleChange={handleChange} id="side2" />
    </div>
  )
}

export default Table;
