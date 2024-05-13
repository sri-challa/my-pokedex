import { Outlet } from "react-router-dom";
import { Contianer } from "./AppLayout.styles";

export default function AppLayout() {
  return (
    <Contianer>
      <span> HI Pokedex</span>
      <hr />
      <Outlet />
    </Contianer>
  );
}
