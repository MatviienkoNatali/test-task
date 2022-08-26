import './style/global.scss';
import Hero from "./screen/hero/Hero";
import OurUsers from "./screen/ourUsers/OurUsers";

function App() {
  return (
    <div className="layout">
      <header/>
      <main>
          <Hero/>
          <OurUsers/>
      </main>
      <footer/>
    </div>
  );
}

export default App;
