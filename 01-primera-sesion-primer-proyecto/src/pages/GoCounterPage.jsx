import Link from "next/link";
import NuevoComponente from "../components/NuevoComponente/NuevoComponente";

export default function GoCounterPage() {
  return (
    <div>
      <NuevoComponente />

      <br />

      <Link href="/">Go Home</Link>
    </div>
  );
}
