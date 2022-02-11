import './style.main.scss'
// const DIVIDER = 'divider'
// const firstSidebar = document.getElementById('firstSidebar')
// const secondSidebar = document.getElementById('secondSidebar')
// console.log(firstSidebar.closest('.sidebar'))
// firstSidebar.addEventListener('mousedown', dividerHandler)

// function dividerHandler(e) {
//   if(e.target.dataset.type === DIVIDER){
//     console.log(123)
//     const h = 100
//     document.onmousemove = () => {
//       // console.log(e.pageY - this.getBoundingClientRect().bottom + 'px')
//       console.log(this.getBoundingClientRect())
//       const a  = (e.pageY - this.getBoundingClientRect().height)
//       console.log(a)
//       this.style.height = a + 'px';
//       // console.log(this.getBoundingClientRect())
//       // this.style.height = '300px'



//       // if (type === 'col') {
//       //   const delta = e.pageX - coords.right
//       //   value = coords.width + delta
//       //   $resizer.css({right: -delta + 'px'})
//       // } else {
//       //   const delta = e.pageY - coords.bottom
//       //   value = coords.height + delta
//       //   $resizer.css({bottom: -delta + 'px'})
//       // }
//     }
//     document.onmouseup = () => {
//       document.onmousemove = null
//       document.onmouseup = null
//     }
//   }
// }