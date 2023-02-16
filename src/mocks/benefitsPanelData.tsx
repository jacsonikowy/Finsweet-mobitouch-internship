import { ReactComponent as PencilWithLiner } from "../assets/icons/Icon(2).svg";
import { ReactComponent as Paper } from "../assets/icons/Icon(5).svg";
import { ReactComponent as People } from "../assets/icons/Icon.svg";

import { PanelProps } from "../components/Panel/Panel";

export const panelValues: PanelProps[] = [
  {
    headingText: "Customize with ease",
    level: "h6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    icon: <Paper />,
  },
  {
    headingText: "Perfectly Responsive",
    level: "h6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    icon: <PencilWithLiner />,
  },
  {
    headingText: "Friendly Support",
    level: "h6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    icon: <People />,
  },
];
