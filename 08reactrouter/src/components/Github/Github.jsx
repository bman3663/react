import React from 'react'
import {useEffect} from "react"
import { useLoaderData } from 'react-router-dom'



function Github() {
    

    const data = useLoaderData()
    console.log(data)
// (res) => setData(res)


    // const [data, setData] = React.useState([]);
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/bman3663`)
    //     .then((res) => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div>
        <h1>
            Gitub Profile
        </h1>
        <p>User Name: {data.login}</p>
        <p>Followers: {data.followers}</p>
        <img src={data.avatar_url} alt="" />


    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>  {
    const response = await fetch(`https://api.github.com/users/bman3663`)
    return response.json()
}