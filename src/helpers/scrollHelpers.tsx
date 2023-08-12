function scrollPageTo(target: string){
    let headerOffset = 70;
    let elementOffset = 0;
    let element: HTMLElement | null = null;
    switch (target) {
        case "skills": element = document.getElementById("skills"); break;
        case "projects": element = document.getElementById("projects"); break;
        case "experience": element = document.getElementById("experience"); break;
        case "contact": element = document.getElementById("contact");
    }

    if(element) {
        elementOffset = element.getBoundingClientRect().top;
        let offsetPosition = elementOffset + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

export {
    scrollPageTo,
}