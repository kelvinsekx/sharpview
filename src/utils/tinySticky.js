const el = document.querySelector(".urgent")
const observer = new IntersectionObserver( 
  ([e]) => {
    console.log(e.intersectionRatio);
     return e.target.classList.toggle("isPinned", e.intersectionRatio < 1)
    },
  { threshold: [1] }
);

observer.observe(el);