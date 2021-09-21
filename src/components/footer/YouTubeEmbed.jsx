import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core';

function YoutubeEmbed(props) {
  const useStyles = makeStyles({
    link: {
        alignItems: 'flex-end',
        color: '#52575c',
        margin: '3rem 1rem auto 0',
        fontSize: '50px',
        textDecoration: "none",
        "&:hover,&:focus": {
            color: "#f3585",
            textDecoration: 'none'
        }
    },
  });
  const classes = useStyles();

  return (
    <div className="video-responsive">
      <iframe
        width="400"
        height="240"
        src={`https://www.youtube.com/embed/${props.embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
  </div>
  );
  
};

export default YoutubeEmbed;