const colors = {
  blue: "bg-tag-blue text-tag-text-primary",
  pink: "bg-tag-pink text-tag-text-primary",
  green: "bg-tag-green text-tag-text-primary",
  yellow: "bg-tag-yellow text-tag-text-secondary",
};

const Tag = ({ color = "blue", children }) => (
  <li
    className={`rounded-full px-4 py-1.5 text-sm font-medium ${colors[color]}`}
  >
    {children}
  </li>
);

export default Tag;
