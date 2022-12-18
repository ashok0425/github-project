import React from 'react'

const Sort = (props) => {
  return (
    <>
       <select name="sort" id="" className="form-select" onChange={props.handleChange}>
<option value="">--sort by--</option>
<option value="stars"> Star</option>
<option value="forks"> Fork</option>
<option value="updated"> Update</option>
<option value="help-wanted-issues"> Help wanted issues</option>

</select>
    </>
  )
}

export default Sort