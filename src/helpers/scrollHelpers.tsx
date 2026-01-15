function scrollPageTo(target: string) {
  const headerOffset = 70;
  const element = document.getElementById(target);

  if (element) {
    const offsetPosition = element.offsetTop - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}


export {
    scrollPageTo,
}