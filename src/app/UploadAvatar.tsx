"use client";

import { useCallback, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

export default function UploadAvatar({ onImageSelect }: { onImageSelect: (file: File | null) => void }) {
  const [image, setImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);


  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setSelectedFile(file);
      onImageSelect(file);
    }
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [], "image/png": [] },
    maxSize: 5 * 1024 * 1024, // 5MB
    disabled: !!image, // تعطيل الدروب زون لو في صورة موجودة
  });

  const handleRemove = () => {
    setImage(null);
    setSelectedFile(null);
    onImageSelect(null);
  };

  const handleChangeImage = () => {
    fileInputRef.current?.click(); // فتح اختيار الملفات يدويًا
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="file-upload" className="text-white text-lg font-semibold mb-2">
        Upload Avatar
      </label>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed ${
          image ? "border-gray-700 bg-gray-800 cursor-default" : "border-gray-500 bg-[#282f3f69] cursor-pointer"
        } rounded-lg p-6 w-96 h-28 flex flex-col items-center justify-center transition-all hover:border-blue-500 relative`}
      >
        <input id="file-upload" name="file-upload" {...getInputProps()} />

        {image ? (
          <div className="relative flex flex-col items-center">
            <Image
              src={image}
              alt="Uploaded Avatar"
              width={50}
              height={50}
              className="rounded-lg border border-gray-300"
            />
            <div className="flex gap-2 mt-2">
              <button
                type="button"
                className="bg-[#282f3f69] text-white px-3 py-1 rounded-md text-xs cursor-pointer"
                onClick={handleRemove}
              >
                Remove image
              </button>
              <button
                type="button"
                className="bg-[#282f3f69] text-white px-3 py-1 rounded-md text-xs cursor-pointer"
                onClick={handleChangeImage} // يفتح الملف يدوي لما الصورة موجودة
              >
                Change image
              </button>
            </div>
          </div>
        ) : (
          <>
            <Image
              src="/assets/images/icon-upload.svg"
              alt="Upload Icon"
              width={40}
              height={40}
              className="w-10 h-10 mb-2"
            />
            <p className="text-white text-sm">
              {isDragActive ? "Drop the file here..." : "Drag and drop or click to upload"}
            </p>
          </>
        )}
      </div>

      <div className="flex gap-2 items-center mt-2">
        <Image
          src="/assets/images/icon-info.svg"
          alt="Upload Instructions"
          width={15}
          height={15}
        />
        <p className="text-gray-400 text-xs">
          Upload your photo (JPG or PNG, max size: 5MB).
        </p>
      </div>
    </div>
  );
}
