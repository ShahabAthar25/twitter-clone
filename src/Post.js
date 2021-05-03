import React from 'react'

import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


import './Post.css'

function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8gWv5m1Uv-Pwxp5828GVr0lT9t9prxm4gNaAc_=s32-c-mo" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Shahab Athar<span className="post__headerSpecial"><VerifiedUserIcon className="post__badge" />@ShahabAthar25</span></h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Hello World</p>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon font_size="small" />
                    <RepeatIcon font_size="small" />
                    <FavoriteBorderIcon font_size="small" />
                    <PublishIcon font_size="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
