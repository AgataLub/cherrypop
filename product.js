// creating my timeline for my animation that starts when you load the page
var timeLine = gsap.timeline({defaults:{duration: 1}});

timeLine.from('#mockup > img', {opacity: 0, duration: 1.5, y: -50, ease: 'Power1.easein'})
.from('#phonedescription', {opacity: 0, duration: 1.5, y: 50, ease: 'Power1.easein'}, "-=1.4")
.from('#mockup > p', {opacity: 0, duration: 1.5, x: 40, ease: 'Power1.easein', delay: 1.1}, "-=2.8")
.from('#mockup > #arrow_mockup', {opacity: 0, duration: 1.5, x: -40, ease: 'Power1.easein', delay: 1.2},"-=3.4");

//reversing the animation when scrolling (i tried something else and i'm not using it)
// document.addEventListener('scroll',() =>{
//     timeLine.reversed() ? timeLine.play() : timeLine.reverse();
// });


//creating timeline for the image with texts on the side section 
var timeLineMax2 = new TimelineMax({onUpdate:updatePercentage2});
const controller2 = new ScrollMagic.Controller();

timeLineMax2.from('#texts', 0.5, {opacity: 0, x: 50, ease: 'Power1.easein'}, "-=5.4")
.from('#convtext', 0.5 ,  {opacity: 0, y: 40, ease: 'Power1.easein', delay: 1.1}, "-=5.8");


const scene2 = new ScrollMagic.Scene({
    triggerElement: ".scrolldown",
    // triggerHook: "onLeave",
    // duration: "50%"
})
// .setPin("#conversation")
.setTween(timeLineMax2)
    .addTo(controller2);


function updatePercentage2() {
    timeLineMax2.progress();
    console.log(timeLineMax2.progress());
}


//creating timeline for why us section
var timeLineMax3= new TimelineMax({onUpdate:updatePercentage3});
const controller3 = new ScrollMagic.Controller();

timeLineMax3.from('.whyusreason', 0.5, {opacity: 0, y: -50, ease: 'Power1.easein'},)

const scene3 = new ScrollMagic.Scene({
    triggerElement: "#whyus",
})
.setTween(timeLineMax3)
    .addTo(controller3);


function updatePercentage3() {
    timeLineMax3.progress();
    console.log(timeLineMax3.progress());
}


// creating timeline for animation to the form section 
var timeLineMax4= new TimelineMax({onUpdate:updatePercentage4});
const controller4 = new ScrollMagic.Controller();

timeLineMax4.from('#contact', 0.5, {opacity: 0, y: -50, ease: 'Power1.easein'},)
.from('#contact_form', 0.5, {opacity: 0, y: -50, ease: 'Power1.easein'},)
.from('#instagram', 0.5, {opacity: 0, x: -50, ease: 'Power1.easein'},);

const scene4 = new ScrollMagic.Scene({
    triggerElement: "#decoration",
})
.setTween(timeLineMax4)
    .addTo(controller4);


function updatePercentage4() {
    timeLineMax4.progress();
    console.log(timeLineMax3.progress());
}