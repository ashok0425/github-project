import React from 'react'
import Moment from 'moment';
import { Link } from 'react-router-dom';
const Card = (props) => {
  let item=props.item;
  return (
    <Link className="card custom-border-radius-20 py-2 border-0 mb-4" to={`/detail/${item.full_name}`}>
    <div className="card-body">
      
     <div className="title">
     <h2 className='custom-fs-22 custom-fw-800 custom-text-primary' title='repo name'>{item.name}</h2>
          <p className='mt-2 custom-fs-14 custom-text-secondary' title='author name'><i className="fas fa-user text-dark"></i> {item.owner.login}</p>
     </div>

     <div className="icon-section">
      <div className="row">
        <div className="col-md-2  text-dark custom-fs-18"><i className="fas fa-star text-warning custom-fs-18"> </i> {item.stargazers_count}</div>

        <div className="col-md-2 offset-md-1 text-dark custom-fs-18"><i className="fas fa-eye text-dark custom-fs-18"> </i> {item.watchers_count}</div>


        <div className="col-md-2 offset-md-1 text-dark custom-fs-18"><i className="fas fa-code-branch text-dark custom-fs-18"></i>  {item.forks_count}</div>


        <div className="col-md-3 text-dark custom-fs-16" title='last updated at'><i className="fas fa-clock text-dark custom-fs-18"></i>  {Moment().format('D/M/y',item.updated_at)}</div>

      </div>

      <div className="des custom-fs-14 text-dark mt-1">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus porro nesciunt, numquam ut</p>
</div>
      
     </div>
    </div>
</Link>
  )
}

export default Card