export function colorsForTypes(type: string) {
  let typeColors = { bgColor: "", mainColor: "" };

  switch (type) {
    case "normal": {
      typeColors = { bgColor: `${type}.100`, mainColor: `${type}.500` };
      break;
    }
    case "fighting": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "flying": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "poison": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "ground": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "rock": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "bug": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "ghost": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "steel": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "fire": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "water": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "grass": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "electric": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "psychic": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "ice": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "dragon": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "dark": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "fairy": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "stellar": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    case "unknown": {
      typeColors = { bgColor: "", mainColor: "" };
      break;
    }
    default:
      typeColors = { bgColor: "White", mainColor: "White" };
  }

  return typeColors;
}
