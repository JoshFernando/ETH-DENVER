"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videosrc }: { videosrc: string }) => {
    //video path

    return (
        <div>
            <ReactPlayer
                width="750px"
                height="430px"
                url={videosrc}
                controls={true}
                // light is usefull incase of dark mode
                light={false}
                // picture in picture
                pip={true}
            />
            <source src={videosrc} type="video/mp4" />
        </div>
    );
};

export default VideoPlayer;
