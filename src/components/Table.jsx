import React, { Component } from 'react'
import Side from './Side.jsx'

const Table = ({ handleOption, handleChange, handleSubmit, users }) => {
  return (
    <div className="table">
      <Side handleOption={handleOption} handleChange={handleChange} users={users} id="side1" />
      <Side handleOption={handleOption} handleChange={handleChange} users={users} id="side2" />
    </div>
  )
}

export default Table;
