import React, { useState } from 'react'

import './Feed.css'

import Post from './Post'

import TweetBox from './TweetBox'

function Feed() {

    const [posts, setPosts] = useState([])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post
                displayName="Shahab Athar"
                username="ShahabAthar25"
                verified
                text="Hello World"
                image="https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8gWv5m1Uv-Pwxp5828GVr0lT9t9prxm4gNaAc_=s32-c-mo"
            />
        </div>
    )
}

export default Feed
