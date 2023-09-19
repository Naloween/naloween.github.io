import { Project } from "./components/Project";

function App() {
  return (
    <>
      <h1>Naloween</h1>
      <h2>Projects</h2>
      <div style={{ display: "flex" }}>
        <Project name="Darklands"></Project>{" "}
        <Project name="FightingForms"></Project>
      </div>
    </>
  );
}

export default App;
