import React from "react";

interface Props {
  params: { id: number; photoId: number };
}
const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <p>UserId is: {id}</p>
      <p>PhotoId is: {photoId}</p>
    </div>
  );
};

export default PhotoPage;
