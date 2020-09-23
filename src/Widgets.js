import React from "react";
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__inputs'>
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' text='data' />
            </div>
            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"783214"} />
                <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='twitter'
                    options={{ height: 800 }}
                />

                <TwitterShareButton
                    url={"https://www.tonydyleuth.com"}
                    options={{
                        text: "hire this awesome Dev!",
                        link: "https://tonydyleuth.com",
                        via: "tdyleuth",
                    }}
                />
            </div>
        </div>
    );
}

export default Widgets;
