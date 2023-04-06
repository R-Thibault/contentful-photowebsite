const allPhotos = useMemo(() => {
  const all = [
    ...mariages,
    ...grossesses,
    ...bébés,
    ...familles,
    ...baptemes,
    ...couples,
    ...portraits,
  ];

  return all.sort((a, b) => b.likes - a.likes);
}, [mariages, grossesses, bébés, baptemes, portraits, couples]);



const photoRes = photosRes.items.map((photo) => {
  return {
    idx: photo.sys.id,
    ...photo.fields,
    
  };
});


couples: photoRes.filter((photo) => photo.title === "couple"),
portraits: photoRes.filter((photo) => photo.title === "portrait"),
mariages: photoRes.filter((photo) => photo.title === "mariage"),
baptemes: photoRes.filter((photo) => photo.title === "bapteme"),
familles: photoRes.filter((photo) => photo.title === "famille"),
bebes: photoRes.filter((photo) => photo.title === "bebe"),
grossesses: photoRes.filter((photo) => photo.title === "grossesse"),



const allPhotos = useMemo(() => {
  const all = [
    ...mariages,
    ...grossesses,
    ...bebes,
    ...familles,
    ...baptemes,
    ...couples,
    ...portraits,
  ];
  return all;
}, [mariages, grossesses, bebes, baptemes, portraits, couples]);


console.log(photo)
const allPhotos = useMemo(() => {
  const all = [
    ...mariages,
    ...grossesses,
    ...bebes,
    ...familles,
    ...baptemes,
    ...couples,
    ...portraits,
  ];
  return all;
}, [mariages, grossesses, bebes, baptemes, portraits, couples]);
console.log(allPhotos);


return {
  props: {
    photo: photosRes,
    couple: photoCoupleArr,
  },



  const [grossesses, marriages, bebes, portraits, familles, couples, baptemes] =
  Object.values(
    [
      grossesseArr,
      marriageArr,
      bebeArr,
      portraitArr,
      familleArr,
      coupleArr,
      baptemeArr,
    ].fields.galerie
  );