import useReveal from "../hooks/useReveal";

export default function Reveal({
  children,
  className = "",
  delay = "",
}) {

  useReveal();

  return (

    <div className={`reveal ${delay} ${className}`}>

      {children}

    </div>

  );
}
 