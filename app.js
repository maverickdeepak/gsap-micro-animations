const timeline = gsap.timeline({
  defaults: { duration: 0.35, ease: "Power2.easeOut" },
});

// Animation for Home Screen
const home = document.querySelector(".home");
gsap.set(".feather", { scale: 0, transformOrigin: "center" });

home.addEventListener("click", () => {
  gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
  gsap.fromTo(
    ".feather",
    { y: -5, scale: 0 },
    { y: 20, scale: 1.5, duration: 1, stagger: 0.2 }
  );
  gsap.fromTo(".right-feather", { x: 0 }, { x: 5 });
});

// Animation for Notification Screen
const notifications = document.querySelector(".notifications");
gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "top center" });
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom" });

notifications.addEventListener("click", () => {
  gsap.fromTo(
    ".bell",
    { rotation: -5 },
    { rotation: 0, duration: 2, ease: "elastic.out(1.5, 0.2)" }
  );
  gsap.fromTo(
    ".ringer",
    { rotation: -3, x: 0.5 },
    { rotation: 0, x: 0, duration: 1, ease: "elastic.out(1.5, 0.2)" }
  );
  gsap.fromTo(
    ".wave",
    { scale: 0, opacity: 1 },
    { scale: 1.3, opacity: 0, duration: 1 }
  );
});

// Animations for Message Screen
const messages = document.querySelector(".message");
gsap.set(".flap", { transformOrigin: "top" });
messages.addEventListener("click", () => {
  timeline.fromTo(".messages-svg", { scale: 1 }, { scale: 0.9 });
  timeline.fromTo(".flap", { scale: 1 }, { scale: -1 }, "<50%");
  timeline.fromTo(".messages-svg", { scale: 0.9 }, { scale: 1 }, "<50%");
  timeline.fromTo(
    ".note",
    { y: 0, opacity: 1 },
    { y: -40, opacity: 0, duration: 0.75 }
  );
  timeline.to(".flap", { scale: 1 }, "<50%");
});
