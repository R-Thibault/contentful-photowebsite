



export async function getImages(
  cli: ReturnType<typeof createApi>,
  query: string
): Promise<Photo[]> {
  const mappedPhotos: Photo[] = [];

  const photos = await cli.photos.getRandom({
    count: 4,
    query,
  });

  if (photos.type === "success") {
    const responseArr = Array.isArray(photos.response)
      ? photos.response
      : [photos.response];

    const photosArr = responseArr.map((photo, idx) => ({
      src: photo.urls.full,
      thumb: photo.urls.thumb,
      width: photo.width,
      height: photo.height,
      alt: photo.alt_description ?? `img-${idx}`,
      likes: photo.likes,
      user: photo.user.name,
      userlink: photo.user.links.html,
      photolink: photo.links.html
    }));

    const photosArrWithDataUrl: Photo[] = [];

    for (const photo of photosArr) {
      const blurDataUrl = await getDataUrl(photo.src);
      photosArrWithDataUrl.push({ ...photo, blurDataUrl });
    }

    mappedPhotos.push(...photosArrWithDataUrl);
  } else {
    console.error("Could not get photos");
  }

  return mappedPhotos;
}
