import React from 'react'

import './Widgets.css'

import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happenning</h2>

                <TwitterTweetEmbed tweetId={"1389201541085777923"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="MUnpopulur"
                    options={{ height: 400 }}
                />

                <center>
                    <TwitterShareButton
                        url={"https://www.instagram.com/mrunpopulur/"}
                        options={{ text: "Hello I Am Making This App", via: "MUnpopulur" }}
                    />
                </center>
            </div>
        </div>
    )
}

export default Widgets
