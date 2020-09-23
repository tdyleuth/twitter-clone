import { Button, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import firebase from "firebase";
import "./Tweetbox.css";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImageUrl, setTweetImageUrl] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Tony Dyleuth",
            username: "tdyleuth",
            avatar:
                "https://smu-static.s3.us-west-2.amazonaws.com/images/accounts/1326420.jpg?v=1548182164",
            verified: true,
            text: tweetMessage,
            image: tweetImageUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setTweetMessage("");
        setTweetImageUrl("");
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://smu-static.s3.us-west-2.amazonaws.com/images/accounts/1326420.jpg?v=1548182164'></Avatar>
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type='text'
                    />
                </div>
                <input
                    onChange={(e) => setTweetImageUrl(e.target.value)}
                    value={tweetImageUrl}
                    className='tweetBox__imageInput'
                    placeholder='Enter image URL'
                    type='text'
                />
                <Button
                    onClick={sendTweet}
                    type='submit'
                    className='tweetBox__tweetButton'
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
