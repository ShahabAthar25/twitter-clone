import React, { useState } from 'react'

import './TweetBox.css'

import { Avatar, Button } from '@material-ui/core'

import db from './firebase'

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            displayName: 'Shahab Athar',
            username: 'ShahabAthar25',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu8gWv5m1Uv-Pwxp5828GVr0lT9t9prxm4gNaAc_=s32-c-mo'
        })

        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8gWv5m1Uv-Pwxp5828GVr0lT9t9prxm4gNaAc_=s32-c-mo" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's Happening"
                        type="text"
                    />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter Image Url"
                    type="text"
                />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
