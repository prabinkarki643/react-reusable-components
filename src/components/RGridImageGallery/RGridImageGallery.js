import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import RSpace from "../RSpace";

export default function RGridImageGallery({
  images,
  imageStyle,
  imageContainerStyle,
  showLightBox=true,
  onClickImage,
  spaceProps,
}) {
  const [gallery, setGallery] = useState({
    show: false,
    initialIndex: 0,
  });
  const { initialIndex, show } = gallery;

  const handleClickOpen = (initialIndex = 0) => {
    if(showLightBox){
      setGallery({ ...gallery, show: true, initialIndex: initialIndex })
      onClickImage && typeof(onClickImage)=="function" && onClickImage(initialIndex)
    }else{
      onClickImage && typeof(onClickImage)=="function" && onClickImage(initialIndex)
    }
    
  };

  const handleClose = () => {
    setGallery({ ...gallery, show: false });
  };

  return (
    <React.Fragment>
      <RSpace {...spaceProps}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{position: "relative", ...imageContainerStyle }}
          >
            <img
              onClick={() =>handleClickOpen(index)}
              src={img.thumbnail||img.src}
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
          </div>
        ))}
      </RSpace>

      {/* LightBox when user clicks on image Or If you dont want to use lightbox package create custom Dialog with Material UI Dialog here with zooIn, zoomOut & Close features */}
      {show && (
        <Lightbox
          reactModalStyle={{ zIndex: 1000000000000000000000000000000000 }}
          mainSrc={images[initialIndex].src}
          clickOutsideToClose={false}
          nextSrc={images[(initialIndex + 1) % images.length]}
          prevSrc={images[(initialIndex + images.length - 1) % images.length]}
          onCloseRequest={handleClose}
          onMovePrevRequest={() =>
            setGallery({
              ...gallery,
              initialIndex: (initialIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            setGallery({
              ...gallery,
              initialIndex: (initialIndex + 1) % images.length,
            })
          }
        />
      )}
    </React.Fragment>
  );
}

RGridImageGallery.defaultProps = {
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
  imageContainerStyle: {},
  spaceProps: null,
};
