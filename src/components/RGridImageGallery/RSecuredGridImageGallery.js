import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { DialogContent, DialogTitle } from "@material-ui/core";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import RSecureImage from "../RSecureImage";
import RSpace from "../RSpace";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper,
  },
  dialogRoot: {
    backgroundColor: "black",
  },
  dialogImageStyle: {
    maxWidth: "100%",
    maxHeight: "100vh",
    margin: "auto",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom  ref={ref} {...props}/>
  // return <Slide direction="up" ref={ref} {...props} />;
});

export default function RSecuredGridImageGallery({
  images,
  title,
  imageStyle,
  spaceProps,
  imageContainerStyle,
  onClickImage,
  showLightBox=true
}) {
  const classes = useStyles();
  const [scale, setScale] = useState(1);
  const [gallery, setGallery] = useState({
    show: false,
    initialIndex: 0,
    initialImageUri: null,
  });

  const handleClickOpen = (initialIndex = 0) => {
    if(showLightBox){
      setGallery({ ...gallery, show: true, initialIndex: initialIndex });
      onClickImage && typeof(onClickImage)=="function" && onClickImage(initialIndex)
    }else{
      onClickImage && typeof(onClickImage)=="function" && onClickImage(initialIndex)
    }
    
  };

  const handleClose = () => {
    setGallery({ ...gallery, show: false });
  };

  const handleNextClick = () => {
    var newIndex = gallery.initialIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    setGallery({ ...gallery, initialIndex: newIndex });
  };

  const handlePreviousClick = () => {
    var newIndex = gallery.initialIndex - 1;
    if (newIndex < 0) {
      return;
    }
    setGallery({ ...gallery, initialIndex: newIndex });
  };

  const zoomIn = () => {
    var newScale = scale + 0.1;
    if (newScale <= 5) {
      setScale(newScale);
    }
  };

  const zoomOut = () => {
    var newScale = scale - 0.1;
    if (newScale >= 1) {
      setScale(newScale);
    }
  };

  const { initialIndex, show } = gallery;

  return (
    <React.Fragment>
      <RSpace {...spaceProps}>
      {images.map((img, index) => (
        <RSpace.Item key={index} style={{position: "relative",...imageContainerStyle }}>
          <RSecureImage
            onClick={(uri) => handleClickOpen(index)}
            src={img.thumbnai || img.src}
            alt={img.altText || "No Image"}
            style={{
              border: "2px solid black",
              cursor: showLightBox?"pointer":"default",
              height: 100,
              width: 100,
              objectFit: "cover",
              ...imageStyle,
              ...img.style,
            }}
          />
          {img.afterImageElement && img.afterImageElement}
        </RSpace.Item>
      ))}
      </RSpace>

      {/* //Custom Dialog with Material UI Dialog */}
      {show && (
        <Dialog
          style={{ position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}
          classes={{ paper: classes.dialogRoot }}
          fullScreen
          open={gallery.show}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <DialogTitle id="alert-dialog-slide-title" style={{ color: "white" }}>
            <span style={{ display: "block", float: "right" }}>
              <IconButton
                style={{
                  marginLeft: 10,
                  marginRight: 2,
                  cursor: "pointer",
                  zIndex: 10000000,
                  color: "white",
                  backgroundColor: "black",
                }}
                onClick={zoomOut}
              >
                <ZoomOutIcon
                  style={{
                    fontSize: 25,
                  }}
                />
              </IconButton>
              <IconButton
                style={{
                  cursor: "pointer",
                  zIndex: 10000000,
                  color: "white",
                  backgroundColor: "black",
                  marginRight: 10,
                }}
                onClick={zoomIn}
              >
                <ZoomInIcon
                  style={{
                    fontSize: 25,
                  }}
                />
              </IconButton>

              <IconButton
                style={{
                  cursor: "pointer",
                  zIndex: 10000000,
                  color: "white",
                  backgroundColor: "black",
                }}
                onClick={handleClose}
              >
                <CloseIcon
                  style={{
                    fontSize: 25,
                  }}
                />
              </IconButton>
            </span>

            {title}
          </DialogTitle>

          <DialogContent
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <center>
              <RSecureImage
                src={images[initialIndex].src}
                className={classes.dialogImageStyle}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100vh",
                  margin: "auto",
                  width: "auto",
                  objectFit: "contain",
                  transform: `scale(${scale})`,
                }}
              />
            </center>
          </DialogContent>

          <div
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              height: "100%",
              display: "flex",
              alignItems: "center",
              color: "white",
              backgroundColor: "transparent",
            }}
          >
            <IconButton
              style={{ backgroundColor: "black" }}
              onClick={handlePreviousClick}
            >
              <KeyboardArrowLeftIcon style={{ fontSize: 35, color: "white" }} />
            </IconButton>
          </div>

          <div
            style={{
              position: "fixed",
              right: 0,
              bottom: 0,
              height: "100%",
              display: "flex",
              alignItems: "center",
              color: "white",
              backgroundColor: "transparent",
            }}
          >
            <IconButton
              style={{ backgroundColor: "black" }}
              onClick={handleNextClick}
            >
              <KeyboardArrowRightIcon
                style={{ fontSize: 35, color: "white" }}
              />
            </IconButton>
          </div>
        </Dialog>
      )}
    </React.Fragment>
  );
}

RSecuredGridImageGallery.defaultProps = {
  images: [
    {
      thumbnail:'',
      src: "http://i.imgur.com/XP2BE7q.jpg",
      afterImageElement: null,
      style: {},
      altText: "Alt",
    },
    {
      thumbnail:'',
      src: "http://i.imgur.com/5nltiUd.jpg",
      afterImageElement: null,
      style: {},
      altText: "Alt",
    },
    {
      thumbnail:'',
      src: "http://i.imgur.com/6vOahbP.jpg",
      afterImageElement: null,
      style: {},
      altText: "Alt",
    },
    {
      thumbnail:'',
      src: "http://i.imgur.com/6vOahbP.jpg",
      afterImageElement: null,
      style: {},
      altText: "Alt",
    },
  ],
  imageStyle: {},
  containerStyle: {},
};
