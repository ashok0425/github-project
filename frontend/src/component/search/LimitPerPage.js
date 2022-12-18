import React from 'react'

export const LimitPerPage = (props) => {
  return (
    <>
    <select name="limit" id="" className="form-select" defaultValue={props.limit} onChange={props.handleChange}>z
<option value="10">10 per page</option>
<option value="25">25 per page</option>
<option value="50">50 per page</option>
<option value="100">100 per page</option>

</select>
    </>
  )
}
