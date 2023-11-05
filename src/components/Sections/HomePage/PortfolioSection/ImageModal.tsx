import classNames from "@/utils/classNames";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import { useLockedBody, useOnClickOutside } from "usehooks-ts";

interface Props {
  src: null | string;
  isOpen: boolean;
  onClose: () => void;
}
const ImageModal: FC<Props> = ({ src, onClose, isOpen }) => {
  const [, setLockedBody] = useLockedBody(false, "root");
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (isOpen) {
      setLockedBody(true);
    } else {
      setLockedBody(false);
    }
  }, [isOpen]);

  const handleClickOutside = () => {
    onClose();
  };
  useOnClickOutside(imageRef, handleClickOutside);
  if (!src) {
    return null;
  }
  return (
    <div
      className={classNames(
        "left-0 top-0 z-50 h-screen w-full bg-black/80",
        isOpen ? "fixed" : "hidden",
      )}
    >
      <div className="relative flex h-full w-full items-center justify-center p-10">
        <Image
          ref={imageRef}
          src={src}
          width={1000}
          height={600}
          alt="modal"
          loading="lazy"
          className="h-auto max-h-[70vh] max-w-2xl object-contain"
        />
      </div>
    </div>
  );
};

export default ImageModal;
