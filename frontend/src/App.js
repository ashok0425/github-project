import Card from "./component/search/Card";
import '../src/style/module/search.css'
import '../src/style/global.css'
import React,{useEffect,useState} from 'react'
import CallApi from "./service/CallApi";
import { LimitPerPage } from "./component/search/LimitPerPage";
import Search from "./component/search/Search";
import Sort from "./component/search/Sort";
import Pagination from "./component/search/Pagination";

function App() {

  let API=new CallApi();

  const [items, setItem] = useState([])
  const [count, setCount] = useState(0)

  const [parameter, setparameter] = useState({
    limit:10,
    page:1,
    keyword:'',
    sort:''
  })


  useEffect(() => {
    getData();
  }, [parameter.limit,parameter.keyword,parameter.page,parameter.sort])

  let  getData=async()=>{
    let res=await API.fetchData(`repolist?page=${parameter.page}&per_page=${parameter.limit}&sort=${parameter.sort} ${parameter.keyword?"&q="+parameter.keyword+"":''}`)
    console.log(res)
    setItem(res.items)
    setCount(res.total_count)
  }

  let handlechange=(e)=>{
    setparameter({...parameter,[e.target.name]:e.target.value});
  }

  return (
    <div className="App container mt-5 mb-3">
   <div className="row mb-3">

    {/* item per page start  */}
    <div className="col-md-2">
<LimitPerPage handleChange={handlechange} limit={parameter.limit} />
    </div>
    {/* item per page End  */}

    {/* search box  start*/}
    <div className="col-md-6 offset-md-1">
   <Search handlechange={handlechange}/>
    </div>
    {/* search box  End*/}


    {/* filter  start*/}
    <div className="col-md-2 offset-md-1">
 <Sort handleChange={handlechange} />
    </div>

    {/* filter  End*/}

   </div>


<div className="row">

      {
        items && items.map((item)=>{
          //mapping the card
         return   <div className="col-md-6" key={Math.random()}>
         <Card  item={item}/>

         </div>
         

        })
      }
</div>



<div className="pagination-section d-flex justify-content-center">
  <Pagination current_page={parameter.page} handlechange={handlechange} count={count} limit={parameter.limit}/>
</div>

    </div>
  );
}

export default App;
