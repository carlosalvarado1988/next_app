"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          className="mb-3"
          alt="uploaded-image"
          src={publicId}
          width={270}
          height={180}
        />
      )}
      <CldUploadWidget
        options={{ sources: ["local"], multiple: false, maxFiles: 5 }}
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          // type assertion, to include a property that we know exists but does show up for typescript
          setPublicId((result.info as CloudinaryResult).public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
