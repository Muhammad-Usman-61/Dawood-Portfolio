import { BackgroundGradientAnimation } from "./components/background-gradient-animation";

function App() {
  return (
    <div className="relative">
      <BackgroundGradientAnimation />
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_15px_15px_rgba(23,178,217,0.25)] text-7xl">
        Dawood 🤌
      </p>
    </div>
  );
}

export default App;
