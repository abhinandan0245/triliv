export default function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255, 255, 255, 0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 100 100"
        fill="#0e32e9ff"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x="47"
            y="24"
            rx="3"
            ry="3"
            width="6"
            height="12"
            transform={`rotate(${i * 30} 50 50)`}
          >
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="1s"
              begin={`${i * 0.083}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </svg>
    </div>
  );
}