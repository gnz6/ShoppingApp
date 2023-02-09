import "../index.css";

export interface MyLabelProps {
  /**
   * Name the label.
   */
  label: string;
  /**
   * Define the size of it
   */
  size: "normal" | "h1" | "h2" | "h3";

  // Label Color
  color?: "primary" | "secondary" | "tertiary";

  //Mayus
  allCaps: boolean;

  fontColor?: string
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor 
}: MyLabelProps) => {
  return (
    <span className={`label ${size}  text-${color}`}  style={{color:fontColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
