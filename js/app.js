
if (window.innerWidth > 737) {
	$(document).ready(function () {
		$('#fullpage').fullpage({
			//Navigation

			lockAnchors: false,
			anchors: ['onePage', 'twoPage', 'threePage', 'fourPage', 'fivePage', 'sixPage'],
			navigation: true,
			navigationPosition: 'left',
			afterLoad: function (anchorLink, index) {
				if (index == onePage) {
					$('.about__text, .about__video, .about__lines').addClass('active');
				}
			},
			//Scrolling
			css3: true,
			scrollingSpeed: 700,
			autoScrolling: true,
			fitToSection: true,
			fitToSectionDelay: 1000,
			scrollBar: false,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			loopBottom: false,
			loopTop: false,
			loopHorizontal: true,
			continuousVertical: false,
			continuousHorizontal: false,
			scrollHorizontally: false,
			interlockedSlides: false,
			dragAndMove: false,
			offsetSections: false,
			resetSliders: false,
			fadingEffect: false,
			normalScrollElements: '#element1, .element2',
			scrollOverflow: false,
			scrollOverflowReset: false,
			scrollOverflowOptions: null,
			touchSensitivity: 15,
			normalScrollElementTouchThreshold: 5,
			bigSectionsDestination: null,

			//Accessibility
			keyboardScrolling: true,
			animateAnchor: true,
			recordHistory: true,

			//Design
			controlArrows: true,
			paddingTop: '0',
			paddingBottom: '0',
			responsiveWidth: 0,
			responsiveHeight: 0,
			responsiveSlides: false,
			parallax: false,
			parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },

			//Custom selectors
			sectionSelector: '.section',
			slideSelector: '.slide',


			//events
			onLeave: function (index, nextIndex, direction) { },
			afterLoad: function (anchorLink, index) { },
			afterRender: function () { },
			afterResize: function () { },
			afterResponsive: function (isResponsive) { },
			afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) { },
			onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) { }
		});
	});
} else {
	const links = document.querySelectorAll("a.link");

	for (const link of links) {
		link.addEventListener("click", clickHandler);
	}

	function clickHandler(e) {
		e.preventDefault();
		const href = this.getAttribute("href");
		const offsetTop = document.querySelector(href).offsetTop;

		scroll({
			top: offsetTop,
			behavior: "smooth"
		});
	}


	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__nav');
	const menuItem = document.querySelectorAll('.nav-header__item');

	const dark = document.querySelector('.bg-mob');

	burger.onclick = function () {
		burger.classList.toggle('active');
		dark.classList.toggle('active');
		menu.classList.toggle('active');
	}

	dark.onclick = function () {
		burger.classList.toggle('active');
		dark.classList.toggle('active');
		menu.classList.toggle('active');
	}

	menuItem.forEach(function (el) {
		el.onclick = function () {
			burger.classList.toggle('active');
			dark.classList.toggle('active');
			menu.classList.toggle('active');
		}
	});
}



function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		total: t,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	};
}

function initializeClock(id, endtime) {
	var daysSpan = document.querySelector(".days");
	var hoursSpan = document.querySelector(".hours");
	var minutesSpan = document.querySelector(".minutes");
	var secondsSpan = document.querySelector(".seconds");

	function updateClock() {
		var t = getTimeRemaining(endtime);

		if (t.total <= 0) {
			// document.querySelector(".inner-tarif__price").classList.add("_time");
			clearInterval(timeinterval);
			return true;
		}

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
		minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
		secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}


var deadline = "Sep 19 2021 01:00:00 GMT+0300";

initializeClock("countdown", deadline);


$("input[name=email]").inputmask({
	mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
	greedy: false,
	onBeforePaste: function (pastedValue, opts) {
		pastedValue = pastedValue.toLowerCase();
		return pastedValue.replace("mailto:", "");
	},
	definitions: {
		'*': {
			validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
			cardinality: 1,
			casing: "lower"
		}
	}
});





