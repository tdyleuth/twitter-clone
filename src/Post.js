import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src='https://smu-static.s3.us-west-2.amazonaws.com/images/accounts/1326420.jpg?v=1548182164' />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            Tony Dyleuth{" "}
                            <span className='post_headerSpecial'>
                                <VerifiedUserIcon className='post__badge' />{" "}
                                @tdyleuth
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>Bat Cat or Cat Bat??</p>
                    </div>
                </div>
                <img
                    src='https://thumbs.gfycat.com/DeliciousIdioticIchthyosaurs-small.gif'
                    alt=''
                />{" "}
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
    );
}

export default Post;
