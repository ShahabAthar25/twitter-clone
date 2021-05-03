import React from 'react'

import './TweetBox.css'

import { Avatar, Button } from '@material-ui/core'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8gWv5m1Uv-Pwxp5828GVr0lT9t9prxm4gNaAc_=s32-c-mo" />
                    <input placeholder="What's Happening" type="text"/>
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter Image Url" type="text"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
