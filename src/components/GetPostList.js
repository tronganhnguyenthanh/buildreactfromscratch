import React, {useEffect, useState} from "react"
import handleRequest from "../api/handleRequest"
const GetPostList = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
   getPostList()
  },[])
  const getPostList = async () => {
    let res = await handleRequest.getPosts()
    setPosts(res)
  }
  return (
   <div>
     <h1 className="text-center text-2xl text-blue-700">Get Post List</h1>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10">
      {posts.length > 0 && posts.map((i) => {
         return (
          <div className="card p-5 m-3" key={i?.id}>
            <h1 className="text-xl text-center align-middle">{i?.title}</h1>
          </div>
        )
        })
        }
      </div>
     </div>
    )
}

export default GetPostList