import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToggleComponent from "./01-useToggle/ToggleComponent";
import TimeoutComponent from "./02-useTimeout/TimeoutComponent";
import DebounceComponent from "./03-useDebounce/DebounceComponent";
import UpdateEffectComponent from "./04-useUpdateEffect/UpdateEffectComponent";
import ArrayComponent from "./05-useArray/ArrayComponent";
import PreviousComponent from "./06-usePrevious/PreviousComponent";
import StateWithHistoryComponent from "./07-useStateWithHistory/StateWithHistoryComponent";
import StorageComponent from "./08-useStorage/StorageComponent";
import AsyncComponent from "./09-useAsync/AsyncComponent";
import FetchComponent from "./10-useFetch/FetchComponent";
import ScriptComponent from "./11-useScript/ScriptComponent";
import DeepCompareEffectComponent from "./12-useDeepCompareEffect/DeepCompareEffectComponent";
import EventListenerComponent from "./13-useEventListener/EventListenerComponent";
import OnScreenComponentComponent from "./14-useOnScreen/OnScreenComponent";
import WindowSizeComponent from "./15-useWindowSize/WindowSizeComponent";
import MediaQueryComponent from "./16-useMediaQuery/MediaQueryComponent";
import GeolocationComponent from "./17-useGeolocation/GeolocationComponent";
import StateWithValidationComponent from "./18-useStateWithValidation/StateWithValidationComponent";
import SizeComponent from "./19-useSize/SizeComponent";
import EffectOnceComponent from "./20-useEffectOnce/EffectOnceComponent";
import ClickOutsideComponent from "./21-useClickOutside/ClickOutsideComponent";
import DarkModeComponent from "./22-useDarkMode/DarkModeComponent";
import CopyToClipboardComponent from "./23-useCopyToClipboard/CopyToClipboardComponent";
import CookieComponent from "./24-useCookie/CookieComponent";
import TranslationComponent from "./25-useTranslation/TranslationComponent";
import OnlineStatusComponent from "./26-useOnlineStatus/OnlineStatusComponent";
import RenderCountComponent from "./27-useRenderCount/RenderCountComponent";
import DebugInformationComponent from "./28-useDebugInformation/DebugInformationComponent";
import HoverComponent from "./29-useHover/HoverComponent";
import LongPressComponent from "./30-useLongPress.js/LongPressComponent";
import AllInputsWithAsingleonChange from "./31-useState/AllInputsWithAsingleonChange";
import HookCounter from "./31-useState/HookCounter";
import HookCounterArray from "./31-useState/HookCounterArray";
import HookCounterObject from "./31-useState/HookCounterObject";
import HookCounterTwo from "./31-useState/HookCounterTwo";
import DataFetching from "./32-useEffect/DataFetching";
import DataFetching2 from "./32-useEffect/DataFetching2";
import DataFetching3 from "./32-useEffect/DataFetching3";
import HookCounterOne from "./32-useEffect/HookCounterOne";
import HookMouse from "./32-useEffect/HookMouse";
import IntervalHookCounter from "./32-useEffect/IntervalHookCounter";
import MouseContainer from "./32-useEffect/MouseContainer";
import PostData from "./32-useEffect/PostData";
import Home from "./Home";
import "./app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/toggle",
    element: <ToggleComponent />,
  },
  {
    path: "/timeout",
    element: <TimeoutComponent />,
  },
  {
    path: "/debounce",
    element: <DebounceComponent />,
  },
  {
    path: "/update-effect",
    element: <UpdateEffectComponent />,
  },
  {
    path: "/array",
    element: <ArrayComponent />,
  },
  {
    path: "/previous",
    element: <PreviousComponent />,
  },
  {
    path: "/state-with-history",
    element: <StateWithHistoryComponent />,
  },
  {
    path: "/storage",
    element: <StorageComponent />,
  },
  {
    path: "/async",
    element: <AsyncComponent />,
  },
  {
    path: "/fetch",
    element: <FetchComponent />,
  },
  {
    path: "/script",
    element: <ScriptComponent />,
  },
  {
    path: "/deep-compare-effect",
    element: <DeepCompareEffectComponent />,
  },
  {
    path: "/event-listener",
    element: <EventListenerComponent />,
  },
  {
    path: "/on-screen-component",
    element: <OnScreenComponentComponent />,
  },
  {
    path: "/window-size",
    element: <WindowSizeComponent />,
  },
  {
    path: "/media-query",
    element: <MediaQueryComponent />,
  },
  {
    path: "/geolocation",
    element: <GeolocationComponent />,
  },
  {
    path: "/stateWith-validation",
    element: <StateWithValidationComponent />,
  },
  {
    path: "/size",
    element: <SizeComponent />,
  },
  {
    path: "/effect-once",
    element: <EffectOnceComponent />,
  },
  {
    path: "/click-outside",
    element: <ClickOutsideComponent />,
  },
  {
    path: "/dark-mode",
    element: <DarkModeComponent />,
  },
  {
    path: "/copy-to-clipboard",
    element: <CopyToClipboardComponent />,
  },
  {
    path: "/cookie",
    element: <CookieComponent />,
  },
  {
    path: "/translation",
    element: <TranslationComponent />,
  },
  {
    path: "/online-status",
    element: <OnlineStatusComponent />,
  },
  {
    path: "/render-count",
    element: <RenderCountComponent />,
  },
  {
    path: "/debug-information",
    element: <DebugInformationComponent />,
  },
  {
    path: "/hover",
    element: <HoverComponent />,
  },
  {
    path: "/long-press",
    element: <LongPressComponent />,
  },
  {
    path: "/hook",
    element: <HookCounter />,
  },
  {
    path: "/hook-counter",
    element: <HookCounterArray />,
  },
  {
    path: "/hook-counter-two",
    element: <HookCounterTwo />,
  },
  {
    path: "/hook-counter-object",
    element: <HookCounterObject />,
  },
  {
    path: "/all-input-with-a-single-on-change",
    element: <AllInputsWithAsingleonChange />,
  },
  {
    path: "/hook-counter-one",
    element: <HookCounterOne />,
  },
  {
    path: "/hook-mouse",
    element: <HookMouse />,
  },
  {
    path: "/mouse-container",
    element: <MouseContainer />,
  },
  {
    path: "/interval-hook-counter",
    element: <IntervalHookCounter />,
  },
  {
    path: "/data-fetching",
    element: <DataFetching />,
  },
  {
    path: "/data-fetching-2",
    element: <DataFetching2 />,
  },
  {
    path: "/data-fetching-3",
    element: <DataFetching3 />,
  },
  {
    path: "/post-data",
    element: <PostData />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
