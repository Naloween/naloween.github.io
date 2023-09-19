interface ProjectProps {
  name: string;
}

function Project(props: ProjectProps) {
  return (
    <div
      style={{
        height: "100%",
        border: "solid white 3px",
        borderRadius: "10px",
        boxShadow: "white 10 10",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{props.name}</h3>
    </div>
  );
}

export { Project };
