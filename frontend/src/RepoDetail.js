import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import BreadCrum from './component/BreadCrum';
import CallApi from "./service/CallApi";
import parse from "html-react-parser";
const RepoDetail = () => {
  const [item, setItem] = useState()
  const [readme, setReadme] = useState()

  let params=useParams();
  let API=new CallApi();

  useEffect(() => {
    getData();
    getReadme();
  }, [])

  let  getData=async()=>{
    let res=await API.fetchData(`singlerepo/${params.name}/${params.repo}`)
    setItem(res)
  }
  let getReadme=async()=>{
    let res=await API.fetchData(`readmemd/${params.name}/${params.repo}/readme`)
    setReadme(res.content)
  }
  return (
    <>

 { item &&  
 
 <><div className="container mt-5 ">
 
 <BreadCrum item={item}/>

  <div className="card">
    <div className="card-body">
       
       <div className="title d-flex">
      <img src={item.owner.avatar_url} alt="avatar" className='img-fluid rounded' width="70" height="70"/>
      <div className='mx-4'>
      <h2 className='custom-fs-22 custom-fw-800 custom-text-primary' title='repo name'>
        <a href={item.html_url} className='custom-text-primary'>{item.full_name}  ({item.default_branch})</a>
      </h2>
           
      </div>
       </div>
  
       <div className="icon-section mt-3">
        <div className="row">
          <div className="col-md-2  text-dark custom-fs-18"><i className="fas fa-star text-warning custom-fs-18"> </i> {item.stargazers_count}</div>
  
          <div className="col-md-2 offset-md-1 text-dark custom-fs-18"><i className="fas fa-eye text-dark custom-fs-18"> </i> {item.watchers_count}</div>
  
  
          <div className="col-md-2 offset-md-1 text-dark custom-fs-18"><i className="fas fa-code-branch text-dark custom-fs-18"></i>  {item.forks_count}</div>
  
  
          <div className="col-md-2 offset-md-1 text-dark custom-fs-18"><i className="fas fa-tag text-dark custom-fs-18"></i>  {item.open_issues_count}</div>
  
  
          
        </div>
  
        <div className="des custom-fs-14 text-dark mt-1">
    <p  className='border-top mt-2 py-2 custom-fw-700 custom-fs-18'>
      Read me file 
    </p>

    {readme && parse(readme)}
  </div>
        
       </div>
      </div>
      </div>
    </div></>}
    </>
  )
}

export default RepoDetail