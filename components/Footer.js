import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className="text-sm space-y-4 text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <div>How Airbnb works</div>
          <div>Newsroom</div>
          <div>Airbnb Plus</div>
          <div>Investors</div>
          <div>Airbnb Luxe</div>
        </div>

        <div className="text-sm space-y-4 text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <div>Accessibility</div>
          <div>This is not a real site</div>
          <div>Its a pretty awesome clone</div>
          <div>Referrals accepted</div>
          <div>Papafam</div>
        </div>

        <div className="text-sm space-y-4 text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <div>Papa React</div>
          <div>Presents</div>
          <div>Zero to Full Stack Hero</div>
          <div>Hundreds of Students</div>
          <div>Join Now</div>
        </div>

        <div className="text-sm space-y-4 text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <div>Help Centre</div>
          <div>Trust & Safety</div>
          <div>Say Hi Youtube</div>
          <div>Easter Eggs</div>
          <div>For the Win</div>
        </div>
    </div>
  );
}

export default Footer
