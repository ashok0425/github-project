import axios from 'axios';
class CallApi{
  
  async fetchData(url){
  let baseUrl=process.env.API_BASE_URL
   let res=  await axios.get(baseUrl+url);
  return res;

}

  



}

export default CallApi;