import React from 'react'

const Search = (props) => {
  return (
    <>
     <form action="">
        <div className="form-group ">
            <input type="search" name="keyword" id="" className='form-control custom-border-radius-20 shadow-none outline-none' onKeyUp={props.handlechange}/>
        </div>
    </form>
    </>
  )
}

export default Search