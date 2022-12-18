import axios from 'axios';
class CallApi{
  
  async fetchData(url){
  let baseUrl=process.env.REACT_APP_API_BASE_URL
  let res=  await axios.get(baseUrl+url);
  return res.data;

}

  



}

export default CallApi;