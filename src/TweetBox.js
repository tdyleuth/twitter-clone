import { Button, Avatar } from "@material-ui/core";
import React from "react";
import "./Tweetbox.css";

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://smu-static.s3.us-west-2.amazonaws.com/images/accounts/1326420.jpg?v=1548182164'></Avatar>
                    <input placeholder="What's happening?" type='text' />
                </div>
                <input
                    className='tweetBox__imageInput'
                    placeholder='Enter image URL'
                    type='text'
                />
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
