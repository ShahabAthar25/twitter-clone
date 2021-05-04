import React, { forwardRef } from 'react'

import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import './Post.css'

const Post = forwardRef(({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon font_size="small" />
                    <RepeatIcon font_size="small" />
                    <FavoriteBorderIcon font_size="small" />
                    <PublishIcon font_size="small" />
                </div>
            </div>
        </div>
    )
})

export default Post
