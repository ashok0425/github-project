import CallApi from "../utils/CallApi.js"
let  API=new CallApi();
class Github {
    async index(req,res){
        try {
            
        
     let response =await API.fetchData(`search/repositories?q=${req.query.keyword}&page=${req.query.page}&per_page=${req.query.limit}`);
let total_result=response.data.total_count
let items=response.data.items
let data={
    count:total_result,
    items:items
}
     return res.json({
        error:false,
        message:'Fetched sucessfully',
        data:data
     })

    } catch (error) {
        return res.json({
            error:true,
            message:'Something went wrong.Please try again',
            data:null
         })  
    }
    }

}
export default Github;