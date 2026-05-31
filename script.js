// ============================================================
//  Md Al Momen — Portfolio interactions
//  Progressive enhancement: content is always visible.
//  Animations are additive via the .anim-in class.
// ============================================================

const nav = document.querySelector(".nav");

// ---------- Nav scroll state ----------
const setNavState = () => {
  if (window.scrollY > 40) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
};
setNavState();
window.addEventListener("scroll", setNavState, { passive: true });

// ---------- Smooth-scroll with fixed-nav offset ----------
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || href === "#" || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navH = nav.getBoundingClientRect().height;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// Skip animation work entirely if user prefers reduced motion
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion) {
  // exit — content is visible without animation, which is what they want
} else {
  // ---------- Hero: animate immediately on load ----------
  document.querySelectorAll(".hero .reveal").forEach((el) => {
    const delay = parseInt(el.dataset.delay || "0", 10);
    el.style.animationDelay = `${delay}ms`;
    el.classList.add("anim-in");
  });

  // ---------- Below-the-fold: animate on scroll-in ----------
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const blocks = document.querySelectorAll(
      "#about .section-head, #about .about-body, #about .about-side, " +
      "#experience .section-head, #experience .timeline-item, " +
      "#work .section-head, #work .feature-card, #work .subsection-title, #work .project-card, " +
      "#skills .section-head, #skills .skill-block, " +
      "#contact .section-head, #contact .contact-lede, #contact .contact-email, #contact .contact-links"
    );

    blocks.forEach((el, i) => {
      // staggered delay inside same-type groups
      if (el.matches(".timeline-item")) {
        el.style.animationDelay = `${(i % 8) * 70}ms`;
      } else if (el.matches(".project-card") || el.matches(".skill-block")) {
        el.style.animationDelay = `${(i % 8) * 60}ms`;
      }
      observer.observe(el);
    });
  }
}
