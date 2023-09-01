import {useWindowEvent} from "./useWindowEvent";
import {useState} from "react";

export function useViewportSize() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useWindowEvent('resize', () => {
    setHeight(document.documentElement.clientHeight);
    setWidth(document.documentElement.clientWidth);
  });

  return { height, width }
}