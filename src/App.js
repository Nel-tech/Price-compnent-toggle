export default function App() {
  return (
    <>
      <Section>
        <Header />
        <Background/>
      </Section>
    </>
  );
}

function Section({ children }) {
  return <div>{children}</div>;
}

function Background() {
  return <div className="background"></div>;
}

// function Backgroundbottom() {
//   return <div className=" backgroundbottom"></div>;
// }

function Header() {
  return (
    <div>
      <h1>Our Pricing</h1>

      <div className="header-container">
        <h2>Annually</h2>

        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <h2>Monthly</h2>
      </div>
    </div>
  );
}
