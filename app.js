// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from(".right", { duration: 1, x: "-100vw", delay: 1, ease: "slow" });
// gsap.from(".left", { duration: 1, x: "+100vh", delay: 1, ease: "slow" });
// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 0.2 });

// gsap.fromTo(
//   ".button",
//   { opacity: 0, scale: 0, rotation: 720 },
//   { opacity: 1, scale: 1, rotation: 0, duration: 1, delay: 2 }
// );

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", { opacity: 0, stagger: 0.5 })
  .from(".right", { x: "-100vw", ease: "slow" }, 1)
  .from(".left", { x: "+100vh", ease: "slow" }, "<")
  .to(".footer", { y: 0, ease: "elastic" }, "<.7")
  .fromTo(
    ".button",
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 }
  );
const button = document.querySelector(".button");
button.addEventListener("click", () => {
  timeline.timeScale(2);
  timeline.reverse();
});
