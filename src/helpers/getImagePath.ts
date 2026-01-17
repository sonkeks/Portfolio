export const getImagePath = (image: string, fileExt: string) => {
  const imageUrl = `${import.meta.env.BASE_URL}images/${image}.${fileExt}`;
  return imageUrl;
}