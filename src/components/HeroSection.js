import { Button } from './Button'
import React from 'react'
import './HeroSection.css'


function HeroSection() {
    return (
        <>
          <div className='hero-container'>
            <video src="/videos/video.mp4" autoPlay loop muted />
            <h1>Get a loan today</h1>
            <p>Start your dream business or startup.</p>
            <div className="hero-btns">
            <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
            EXPLORE
          </Button> 
          {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            SUBSCRIBE
          </Button>  */}
            </div>
            
         
          </div>
         
        </>
    )
}

export default HeroSection

// function HeroSection({
//   lightBg,
//   topLine,
//   lightText,
//   lightTextDesc,
//   headline,
//   description,
//   buttonLabel,
//   img,
//   alt,
//   imgStart
// }) {
//   return (
//     <>
//       <div
//         className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
//       >
//         <div className='container'>
//           <div
//             className='row home__hero-row'
//             style={{
//               display: 'flex',
//               flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
//             }}
//           >
//             <div className='col'>
//               <div className='home__hero-text-wrapper'>
//                 <div className='top-line'>{topLine}</div>
//                 <h1 className={lightText ? 'heading' : 'heading dark'}>
//                   {headline}
//                 </h1>
//                 <p
//                   className={
//                     lightTextDesc
//                       ? 'home__hero-subtitle'
//                       : 'home__hero-subtitle dark'
//                   }
//                 >
//                   {description}
//                 </p>
//                 <Link to='/sign-up'>
//                   <Button buttonSize='btn--wide' buttonColor='blue'>
//                     {buttonLabel}
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//             <div className='col'>
//               <div className='home__hero-img-wrapper'>
//                 <img src={img} alt={alt} className='home__hero-img' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HeroSection;
