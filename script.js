// // Function to open the modal and show project details
// function openModal(projectDetails) {
//     const modal = document.getElementById("project-modal");
//     const modalDescription = document.getElementById("modal-description");
//     const modalLink = document.getElementById("modal-link");

//     modal.style.display = "block";
//     modalDescription.innerHTML = projectDetails.description;
//     modalLink.href = projectDetails.link;
// }

// // Function to close the modal
// function closeModal() {
//     const modal = document.getElementById("project-modal");
//     modal.style.display = "none";
// }

// Adding scroll animations when elements are in the viewport
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

// Example of how to trigger modal for each project
document.querySelectorAll(".view-project").forEach((button, index) => {
    button.addEventListener("click", () => {
        const projectDetails = {
            description: `This is a detailed description of project ${index + 1}.`,
            link: `https://example.com/project-${index + 1}`
        };
        openModal(projectDetails);
    });
});
