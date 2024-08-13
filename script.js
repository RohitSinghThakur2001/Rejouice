
const page5 = document.querySelector("#page5")
page5.style.display = 'none'

// locomotive scrolling with gsap

function Loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

Loco();

//website loader
const tl = gsap.timeline();
tl.from("#loader div h3", {
  x: 200,
  opacity: 0,
  duration: 2,
});
tl.to("#loader div h3", {
  x: -200,
  opacity: 0,
  duration: 1,
});
tl.to("#loader ", {
  opacity: 0,
  display: "none",
  duration: 1,
});

// cursor animation code

gsap.registerPlugin(ScrollTrigger);

function page1Animation() {
  const cursor = document.querySelector("#cursor-follower");
  const page1 = document.querySelector("#page1 .content");

  page1.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x,
      y: e.y,
      // duration:0.5,
    });
    // console.log(e.offsetX,e.offsetY);
  });

  page1.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });
  page1.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });

  gsap.from("#page1 h1 span", {
    y: "600px",
    stagger: 0.05,
    duration: 1,
    delay: 3,
  });
}

function page2Animation() {
  let lowerDiv = document.querySelector("#page2 .lower");
  let textArr = lowerDiv.innerText.split(" ");
  let clutter = "";
  textArr.forEach((elm) => {
    let span = `<span> ${elm}</span>`;
    clutter += " " + span;
  });
  lowerDiv.innerHTML = clutter;

  gsap.from("#page2 span", {
    opacity: 0,
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2 ",
      scroller: "#main",
      scrub: 1,
      start: "top 70%",
      end: "top 0%",
    },
  });

  gsap.to("#page2 #borderLeft", {
    scrollTrigger: {
      trigger: "#page2 #borderLeft",
      scrub: 1,
      scroller: "#main",
    },
    width: "97%",
    duration: 1,
  });
}

function page3Animation() {
  gsap.from("#page3 .upper2 a", {
    scrollTrigger: {
      trigger: "#page3 .upper2 a",
      scroller: "#main",
    },
    y: "200px",
    stagger: 0.1,
    duration: 1,
  });
}

function page4Animation() {
  gsap.from("#page4  span ", {
    scrollTrigger: {
      trigger: "#page4 ",
      scroller: "#main",
      scrub: 1,

      start: "top 70%",
      end: "top 20%",
    },
    x: "-900px",
    y: "-200px",
    ease: "ease-in-out",
    stagger: 0.1,
    duration: 1,
  });
}

function page5Animation() {
  const cursor = document.querySelector("#page5 .cursor");
  const page5 = document.querySelector("#page5");

  page5.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      left: e.x,
      top: e.y,
    });
  });

  page5.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });
  page5.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });

  let seats = 7;
  const seatsDiv = document.querySelector("#page5 h1 span");
  gsap.from(seatsDiv, {
    scrollTrigger: {
      trigger: "#page4 ",
      scroller: "#main",

      start: "top 70%",
      end: "bottom 20%",
    },
    y: "50px",
    repeat: 6,
    duration: 0.4,
  });
  gsap.to(seatsDiv, {
    scrollTrigger: {
      trigger: "#page4 ",
      scroller: "#main",

      start: "top 70%",
      end: "bottom 20%",
    },
    y: "-50px",
    repeat: 5,
    duration: 0.4,
  });

  let myinterval = setInterval(() => {
    seats--;
    seatsDiv.innerHTML = seats;
  }, 500);

  setTimeout(() => {
    clearInterval(myinterval);
  }, 2800);
}

function page6Animation() {
  gsap.from("#page6  span ", {
    scrollTrigger: {
      trigger: "#page6 ",
      scroller: "#main",

      start: "top 80%",
      end: "top 20%",
      scrub: 1,
    },
    opacity: 0,
    x: "722px",
    duration: 1,
    stagger: 0.2,
  });
}

function page8Animation() {
  gsap.from("#page8 .box a", {
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 80%",
      end: "top 20%",
    },
    // transform:"translate(20%,50%)"
    y: "200px",
    opacity: 0,
  });
}

function page8_2Animation() {
  var swiper = new Swiper("#page8-2 .mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop:true
  });
  gsap.to("#page8-2 .arrow",{
    left:"0%",
    scale:1.2,
    duration:4,
    ease:"ease-out",
    opacity:0,
    repeat:2,
    scrollTrigger:{
      trigger:"#page8-2",
      scroller:"#main",
      start:"top 80%"
    }
  })
}

gsap.from("#page9 h1 span", {
  scrollTrigger: {
    trigger: "#page9 ",
    scroller: "#main",
    start: "top 40%",
    end: "bottom 20%",
  },
  y: "-600px",
  stagger: 0.05,
  duration: 1,
});

page1Animation();
page2Animation();
page3Animation();
page4Animation();
page5Animation();
page6Animation();
page8Animation();
page8_2Animation();
