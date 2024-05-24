import { useContext } from "react";
import { DetailsContext } from "./DetailsContext";

export function useDetails() {
  const context = useContext(DetailsContext);
  if (context === undefined) {
    throw new Error("useDetails must be used within DetailsProvider");
  }
  return context;
}
