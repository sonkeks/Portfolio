export const getImagePath = (image: string) => {
  if (process.env.NODE_ENV === "production") {
    return `/soenke/build/${image}`;
  } else {
    return image;
  }
}