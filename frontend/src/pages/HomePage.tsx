import Orb from "../components/orb/Orb";

export const HomePage = () => {
  return (
    <>
      <p>Home Page</p>
      <div style={{ 
        width: '100%', 
        height: '65vh', 
      }}>
        <Orb
          hoverIntensity={0.2}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </>
  );
};