import Masonry from "react-masonry-css";
import { useRef } from "react";
import Image from "next/image";

import LightGalleryComponent from "lightgallery/react";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export function Galery({ photos }) {
  const lightboxRef = useRef();

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName=""
      >
        {photos.map((photo, idx) => (
          <div className="relative" key={photo.sys.id}>
            <Image
              src={`https:` + photo.fields.file.url}
              width={photo.fields.file.details.image.width}
              height={photo.fields.file.details.image.height}
              alt={photo.fields.title}
              className="my-4"
            />

            <div
              className="absolute inset-0 h-full w-full hover:bg-stone-900 hover:opacity-10 cursor-pointer"
              onClick={() => {
                lightboxRef.current.openGallery(idx);
              }}
            ></div>
          </div>
        ))}
      </Masonry>

      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic={true}
        dynamicEl={photos.map((photo) => ({
          src: `https:` + photo.fields.file.url,
          thumb: `https:` + photo.fields.file.url,
        }))}
      />
    </>
  );
}
