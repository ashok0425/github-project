import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrum = (props) => {
    let item=props.item;
  return (
    <>

<nav aria-label="breadcrumb mb-2">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" className='text-dark custom-fs-18 custom-fw-600' >Home</Link></li>
    <li className="breadcrumb-item "><a  className='text-dark custom-fs-18 custom-fw-600' href={item.owner.html_url} target="_blank">{item.owner.login}</a></li>
    <li className="breadcrumb-item active"  ><a className='text-success custom-fs-18 custom-fw-600'  href={item.html_url} target="_blank"> {item.name}</a></li>
  </ol>
</nav>
    </>
  )
}

export default BreadCrum