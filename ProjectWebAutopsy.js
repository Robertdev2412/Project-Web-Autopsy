const toolBox = document.getElementById("toolBox");

if (toolBox) {
  toolBox.addEventListener("toggle", (event) => {
    const isOpen = event.newState === "open";
    document.body.classList.toggle("no-scroll", isOpen);
  });
}


const auditForm = document.querySelector(".input-url");

if (auditForm) {
  auditForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = auditForm.querySelector("input[type='url']");
    const rawValue = input.value.trim();

    try {
      new URL(rawValue);
     
      console.log("URL valid:", rawValue);
    } catch {
      alert("URL tidak valid. Contoh format yang benar: https://contoh.com");
    }
  });
}