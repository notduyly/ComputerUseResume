import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Orb from "../components/orb/Orb";
import '../styles/homepage.css'

export const HomePage = () => {
  const [appLink, setAppLink] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  return (
    <>
    {/* Orb */}
      <Container className='main-orb'>
        <Orb
          hoverIntensity={0.2}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
        {/* Content inside Orb */}
        <Form.Control type='file' onChange={handleFileChange} accept='.pdf' className='inside-orb'/>
      </Container>

      {/* Application Link */}
      <Container className='app-link'>
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
      </Container>
      
    </>
  );
};