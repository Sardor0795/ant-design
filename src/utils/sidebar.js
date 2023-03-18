import Generic from "../components/Generic";
import Buttons from '../components/Buttons'

export const sidebar = [
  {
    id: 1,
    title: "Buttons",
    path: "/components/buttons",
    element: <Buttons />,
  },
  { id: 2, title: "Inputs", path: "/components/inputs", element: <Generic /> },
  {
    id: 3,
    title: "Dropdown",
    path: "/components/dropdown",
    element: <Generic />,
  },
];
