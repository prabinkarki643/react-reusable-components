import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function RSecuredImage({
  style,
  loadingContainerStyle,
  progressBarProps,
  src,
  alt,
  onClick,
  headers,
  fetchConfig,
  ...props
}) {
  const [data, setData] = useState({
    imageURL: null,
    loading: true,
  });

  const fetchSecuredImage = () => {
    const finalConfig = Object.assign(
      {
        method: "get",
        headers: {
          ...headers,
        },
      },
      fetchConfig
    );
    fetch(src, finalConfig)
      .then((response) => {
        return response.body;
      })
      .then((stream) => new Response(stream))
      .then((response) => response.blob())
      .then((blob) => URL.createObjectURL(blob))
      .then((url) => {
        setData({
          ...data,
          imageURL: url,
          loading: false,
        });
      })
      .catch((err) => {
        setData({
          ...data,
          loading: false,
        });
      });
  };

  useEffect(() => {
    fetchSecuredImage();
  }, [src]);
  return (
    <>
      {data.loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            width: 100,
            border:'1px solid black',
            ...loadingContainerStyle,
          }}
        >
          <CircularProgress {...progressBarProps}/>
        </div>
      ) : (
        <img
          src={data.imageURL}
          onClick={() => (onClick ? onClick(data.imageURL) : {})}
          alt={alt}
          style={{ width: 100, ...style }}
          {...props}
        />
      )}
    </>
  );
}

RSecuredImage.defaultProps = {
  alt: "No Image",
  src:"http://i.imgur.com/XP2BE7q.jpg"
};
