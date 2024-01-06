export default function App() {
  return (
    <>
      <Section>
        <Header />

        <PricingComponent />
        <Background />
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
      <h1 className="title">Our Pricing</h1>

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

function PricingComponent() {
  return (
    <div>
      <section>
        <div className="componenet1">
          <p>Basic</p>
          <h1>$199.99</h1>
          <line></line>
          <p>500 GB Storage </p>
          <line></line>
          <p>2 Users Allowed </p>
          <line></line>
          <p>Send up to 3 GB </p>
          <line></line>
          <button>LEARN MORE</button>
        </div>

        <div className="componenet2">
          <p>Professional</p>
          <h1>$249.99</h1>
          <line></line>
          <p>1 TB Storage </p>
          <line></line>
          <p>5 Users Allowed </p>
          <line></line>
          <p>Send up to 10 GB </p>
          <line></line>
          <button>LEARN MORE</button>
        </div>

        <div className="componenet3">
          <p>Master</p>
          <h1>$399.99</h1>
          <line></line>
          <p>2 TB Storage </p>
          <line></line>
          <p>10 Users Allowed </p>
          <line></line>
          <p>Send up to 20 GB </p>
          <line></line>
          <button>LEARN MORE</button>
        </div>
      </section>
    </div>
  );
}
