import { Form } from "react-bootstrap";
import Orb from "../components/orb/Orb";
import { useState } from "react";

export const HomePage = () => {
  const [appLink, setAppLink] = useState('');

  return (
    <>
      <div style={{ width: '100%', height: '60vh', marginTop: '100px' }}>
        <Orb
          hoverIntensity={0.2}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <div style={{ width: '35%', margin: '30px auto'}}>
        <Form>
          <Form.Group className=''>
            <Form.Control 
              type='text' 
              value={appLink} 
              onChange={(e) => setAppLink(e.target.value)}
              placeholder='Application Link' 
              style={{ backgroundColor: '#B8B8D9' }}
              required
            />
          </Form.Group>
        </Form>
      </div>
      
    </>
  );
};