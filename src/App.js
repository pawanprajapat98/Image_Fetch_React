import Section from './Section';
import Header from './Header';
import './Tesla.css';
import modal3 from './images/model-3.jpg';
import modaly from './images/model-y.jpg';
import modals from './images/model-s.jpg';
import modalx from './images/model-x.jpg';
import panel from './images/solar-panel.jpg';
import roof from './images/solar-roof.jpg';
import acc from './images/accessories.jpg';
import downarro from './images/down-arrow.svg'
function App() {
  return (
    <>
       <Header></Header>
     
       <Section 
        background = {modal3}
       heading="Model 3"
       pera='Order Online for touchless delivery'
       leftbtn='EXITING INVENTRY'
       rightbtn='CUSTOM ORDER'
       arrow= {downarro}
       ></Section>
       
       <Section
       background = {modaly}
       heading="Model Y"
       pera='Order Online for touchless delivery'
       leftbtn='EXITING INVENTRY'
       rightbtn='CUSTOM ORDER'
       
       ></Section>
       <Section
       background = {modals}
       heading="Model S"
       pera='Order Online for touchless delivery'
       leftbtn='EXITING INVENTRY'
       rightbtn='CUSTOM ORDER'
      
       ></Section>
       <Section 
       background = {modalx}
       heading="Model X"
       pera='Order Online for touchless delivery'
       leftbtn='EXITING INVENTRY'
       rightbtn='CUSTOM ORDER'
      
       ></Section>
       <Section
       background = {panel}
       heading="Solar Panels"
       pera='Lower Cost Solar Panels in India'
       leftbtn='ORDER NOW'
       rightbtn='LEARN MORE'
       
      ></Section>
       <Section
       background = {roof}
       heading="Solar Roof"
       pera='Produce Clean Energy from your roof'
       leftbtn='ORDER NOW'
       rightbtn='LEARN MORE'
      
      ></Section>
       <Section
       background = {acc}
       heading="Accessories"
      
       leftbtn='ORDER NOW'
      
      ></Section>
     

    </>
  )
}

export default App;
