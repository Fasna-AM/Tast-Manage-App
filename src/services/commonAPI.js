import axios from "axios"

const commonAPI= async (httpMethod,url,reqbody,reqHeader)=>{
    const reqConfig = {
        method:httpMethod,
        url,
        data:reqbody,
        headers:reqHeader
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}
export default commonAPI