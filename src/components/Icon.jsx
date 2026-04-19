function Icon({ paths }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}

export default Icon;
