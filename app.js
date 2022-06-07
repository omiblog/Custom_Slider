const slide = document.querySelectorAll('.slide');
var counter = 0;
slide.forEach( (value, index) => {
    value.style.bottom =  `${index * 100}%`

}
)
const goPrev = () => {
	counter--
	slideImage();
}
const gonext = () => {
	counter++
	slideImage();
}


const slideImage =  () => {

	slide.forEach( (value) => {

		value.style.transform = ` translateY( ${counter * 100}%)`

	})

}