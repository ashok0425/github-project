import React from 'react'

const pagination = (props) => {
  let limit = props.limit;
  let count = props.count;
  let current_page = props.current_page;
  let pages = count / limit;
  let arr = [];
  for (let index = 1; index < Math.round(pages); index++) {
    arr.push(index);

  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">

          <li className="page-item"><button className={'page-link'} disabled={current_page === 1 ? true : false} value={current_page - 1}>Previous</button></li>

          {

            arr.map((item) => (
              item <= current_page + 5 &&
              <>
                <li className={item === current_page ? `page-item active` : 'page-item'} key={item}><button className="page-link " onClick={props.handlechange} name="page" value={item}>{item}</button></li>
              </>
            ))


          }


          <li className="page-item"><button className="page-link" onClick={props.handlechange} name="page" value={current_page + 1} disabled={current_page >= Math.round(pages) === 1 ? true : false}>Next</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default pagination