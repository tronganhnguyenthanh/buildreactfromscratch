import baseUrl from "./base"
const handleRequest = {
  getPosts: async() => {
    let res = await fetch(`${baseUrl.api}/${baseUrl.endpoint}`)
    return res?.json()
  }, 
  filterPostById:async(id) => {
    let filterRes = await fetch(`${baseUrl.api}/${baseUrl.endpoint}?id=${id}`)
    return filterRes?.json()
  }
}
export default handleRequest