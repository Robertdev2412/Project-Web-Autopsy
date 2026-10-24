

const toolBox = document.getElementById("toolBox");

if (toolBox) {
  toolBox.addEventListener("toggle", (event) => {
    const isOpen = event.newState === "open";
    document.body.classList.toggle("no-scroll", isOpen);
  });
}

// ==================================================
// Validasi dasar form input URL sebelum "audit" jalan
// ==================================================
const auditForm = document.querySelector(".input-url");

if (auditForm) {
  auditForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = auditForm.querySelector("input[type='url']");
    const rawValue = input.value.trim();

    try {
      new URL(rawValue);
      // TODO: lanjut ke proses "Run Autopsy" (render dashboard dari data dummy)
      console.log("URL valid:", rawValue);
    } catch {
      alert("URL tidak valid. Contoh format yang benar: https://contoh.com");
    }
  });
}



const performanceSection=document.querySelector('.performanceSection');
const accesbilitySection=document.querySelector('.accesbilitySection');
const sequritySection=document.querySelector('.sequritySection');
const SEOSection=document.querySelector('.SEOSection');
const mobileSection=document.querySelector('.mobileSection');
const uxdesainSection=document.querySelector('.ux-desainSection');
const codequalitySection=document.querySelector('.code-qualitySection');
const priorityToFixSection=document.querySelector('.priorityToFixSection');
const webPreviewSection=document.querySelector('.webPreviewSection');




// const buttons=document.querySelectorAll('button[data-target]')
// buttons.forEach(button=> {
//   button.addEventListener('click',()=>{
//        const target = button.dataset.target;
//            document.querySelectorAll("section").forEach(section => {
//       section.style.display = "none";
//        document.getElementById(target).style.display = "grid";
//     });
//   })
//  });
//================================================
//pertimbangkan

 const sections = document.querySelectorAll(".main section");
const navButtons = document.querySelectorAll("button[data-target]");

function showSection(targetId) {
  sections.forEach((section) => {
    section.classList.toggle("active", section.id === targetId);
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showSection(button.dataset.target);
  });
});

























// const buttons = document.querySelectorAll("button[data-target]");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const target = button.dataset.target;

//     document.querySelectorAll("div").forEach(div => {
//       div.style.display = "none";
//     });

//     document.getElementById(target).style.display = "block";
//   });
// });
