import React from 'react'
import Header from './Header'

const Tutorial = () => {
  return (
    <>
     <Header/> 
     <div className="container mt-5">
      <div className="row">
        <StepCard
          stepNumber={1}
          stepTitle="Upload Your Own Photo"
          stepDescription="Begin by uploading your own photo to the website. Click on the 'Upload Photo' button and select the image file from your device."
        />
        <StepCard
          stepNumber={2}
          stepTitle="Select Clothing Items"
          stepDescription="Browse through the available clothing items and select the ones you want to try on. You can filter by category, style, color, or brand to narrow down your choices."
        />
        <StepCard
          stepNumber={3}
          stepTitle="Adjust Placement"
          stepDescription="Once you've selected a clothing item, you can adjust its placement on your uploaded photo to ensure it fits and aligns correctly. Use the drag-and-drop feature or resize handles to position the clothing item as desired."
        />
        <StepCard
          stepNumber={4}
          stepTitle="Preview the Look"
          stepDescription="After adjusting the placement, preview how the selected clothing item looks on your body. The virtual try-on technology will overlay the clothing item onto your photo, giving you a realistic preview of how it would appear in real life."
        />
        <StepCard
          stepNumber={5}
          stepTitle="Try on Multiple Items"
          stepDescription="Repeat the process to try on multiple clothing items and mix and match different styles to create your desired look."
        />
        <StepCard
          stepNumber={6}
          stepTitle="Save or Share"
          stepDescription="If you're satisfied with the look, you can save the virtual try-on photo to your account or share it with friends and family on social media."
        />
        <StepCard
          stepNumber={7}
          stepTitle="Adjust Settings"
          stepDescription="Explore additional settings such as lighting, background, or angle adjustments to customize your virtual try-on experience further."
        />
        <StepCard
          stepNumber={8}
          stepTitle="Explore Recommendations"
          stepDescription="Discover personalized recommendations based on your style preferences, body type, and past selections to find new clothing items to try on."
        />
        <StepCard
          stepNumber={9}
          stepTitle="Get Help"
          stepDescription="If you encounter any difficulties or have questions while using the virtual try-on feature, don't hesitate to reach out to our support team for assistance."
        />
        <StepCard
          stepNumber={10}
          stepTitle="Enjoy Trying On Clothes Virtually"
          stepDescription="Have fun experimenting with different looks and styles using our virtual try-on feature, and discover new ways to express yourself through fashion!"
        />
      </div>
    </div>
    </>
  )
}
const StepCard = ({ stepNumber, stepTitle, stepDescription }) => {
    return (
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Step {stepNumber}</h5>
                  <h6 className="card-subtitle mb-2 text-muted"><b>{stepTitle}</b></h6>
            <p className="card-text">{stepDescription}</p>
          </div>
        </div>
      </div>
    );
  }

export default Tutorial
