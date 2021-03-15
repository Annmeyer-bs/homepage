new	Swiper('.swiper-container',{
	navigation:{
		nextE1:'.swiper-button-next',
		prevE1:'.swiper-button-prev'
	},
	pagination:{
		el:'.swiper-pagination',
		clickable:true,

	},
	slidesPerView:4,
	spaceBetween:111,
	loop:true,
autoplay:{
	delay:3000,
},
breakpoints:{
320:{
	slidesPerView:1,
},	
480:{
	slidesPerView:3,
},
992:{
	slidesPerView:4,
}
},

});