import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";

const ToggleComponent = lazy(() => import("./01-useToggle/ToggleComponent"));
const TimeoutComponent = lazy(() => import("./02-useTimeout/TimeoutComponent"));
const DebounceComponent = lazy(() => import("./03-useDebounce/DebounceComponent"));
const UpdateEffectComponent = lazy(() => import("./04-useUpdateEffect/UpdateEffectComponent"));
const ArrayComponent = lazy(() => import("./05-useArray/ArrayComponent"));
const PreviousComponent = lazy(() => import("./06-usePrevious/PreviousComponent"));
const StateWithHistoryComponent = lazy(() => import("./07-useStateWithHistory/StateWithHistoryComponent"));
const StorageComponent = lazy(() => import("./08-useStorage/StorageComponent"));
const AsyncComponent = lazy(() => import("./09-useAsync/AsyncComponent"));
const FetchComponent = lazy(() => import("./10-useFetch/FetchComponent"));
const ScriptComponent = lazy(() => import("./11-useScript/ScriptComponent"));
const DeepCompareEffectComponent = lazy(() => import("./12-useDeepCompareEffect/DeepCompareEffectComponent"));
const EventListenerComponent = lazy(() => import("./13-useEventListener/EventListenerComponent"));
const OnScreenComponentComponent = lazy(() => import("./14-useOnScreen/OnScreenComponent"));
const WindowSizeComponent = lazy(() => import("./15-useWindowSize/WindowSizeComponent"));
const MediaQueryComponent = lazy(() => import("./16-useMediaQuery/MediaQueryComponent"));
const GeolocationComponent = lazy(() => import("./17-useGeolocation/GeolocationComponent"));
const StateWithValidationComponent = lazy(() => import("./18-useStateWithValidation/StateWithValidationComponent"));
const SizeComponent = lazy(() => import("./19-useSize/SizeComponent"));
const EffectOnceComponent = lazy(() => import("./20-useEffectOnce/EffectOnceComponent"));
const ClickOutsideComponent = lazy(() => import("./21-useClickOutside/ClickOutsideComponent"));
const DarkModeComponent = lazy(() => import("./22-useDarkMode/DarkModeComponent"));
const CopyToClipboardComponent = lazy(() => import("./23-useCopyToClipboard/CopyToClipboardComponent"));
const CookieComponent = lazy(() => import("./24-useCookie/CookieComponent"));
const TranslationComponent = lazy(() => import("./25-useTranslation/TranslationComponent"));
const OnlineStatusComponent = lazy(() => import("./26-useOnlineStatus/OnlineStatusComponent"));
const RenderCountComponent = lazy(() => import("./27-useRenderCount/RenderCountComponent"));
const DebugInformationComponent = lazy(() => import("./28-useDebugInformation/DebugInformationComponent"));
const HoverComponent = lazy(() => import("./29-useHover/HoverComponent"));
const LongPressComponent = lazy(() => import("./30-useLongPress.js/LongPressComponent"));
const AllInputsWithAsingleonChange = lazy(() => import("./31-useState/AllInputsWithAsingleonChange"));
const HookCounter = lazy(() => import("./31-useState/HookCounter"));
const HookCounterArray = lazy(() => import("./31-useState/HookCounterArray"));
const HookCounterObject = lazy(() => import("./31-useState/HookCounterObject"));
const HookCounterTwo = lazy(() => import("./31-useState/HookCounterTwo"));
const DataFetching = lazy(() => import("./32-useEffect/DataFetching"));
const DataFetching2 = lazy(() => import("./32-useEffect/DataFetching2"));
const DataFetching3 = lazy(() => import("./32-useEffect/DataFetching3"));
const HookCounterOne = lazy(() => import("./32-useEffect/HookCounterOne"));
const HookMouse = lazy(() => import("./32-useEffect/HookMouse"));
const IntervalHookCounter = lazy(() => import("./32-useEffect/IntervalHookCounter"));
const MouseContainer = lazy(() => import("./32-useEffect/MouseContainer"));
const PostData = lazy(() => import("./32-useEffect/PostData"));
const Home = lazy(() => import("./Home"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="Loading...">
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/toggle",
    element: (
      <Suspense fallback="Loading...">
        <ToggleComponent />
      </Suspense>
    ),
  },
  {
    path: "/timeout",
    element: (
      <Suspense fallback="Loading...">
        <TimeoutComponent />
      </Suspense>
    ),
  },
  {
    path: "/debounce",
    element: (
      <Suspense fallback="Loading...">
        <DebounceComponent />
      </Suspense>
    ),
  },
  {
    path: "/update-effect",
    element: (
      <Suspense fallback="Loading...">
        <UpdateEffectComponent />
      </Suspense>
    ),
  },
  {
    path: "/array",
    element: (
      <Suspense fallback="Loading...">
        <ArrayComponent />
      </Suspense>
    ),
  },
  {
    path: "/previous",
    element: (
      <Suspense fallback="Loading...">
        <PreviousComponent />
      </Suspense>
    ),
  },
  {
    path: "/state-with-history",
    element: (
      <Suspense fallback="Loading...">
        <StateWithHistoryComponent />
      </Suspense>
    ),
  },
  {
    path: "/storage",
    element: (
      <Suspense fallback="Loading...">
        <StorageComponent />
      </Suspense>
    ),
  },
  {
    path: "/async",
    element: (
      <Suspense fallback="Loading...">
        <AsyncComponent />
      </Suspense>
    ),
  },
  {
    path: "/fetch",
    element: (
      <Suspense fallback="Loading...">
        <FetchComponent />
      </Suspense>
    ),
  },
  {
    path: "/script",
    element: (
      <Suspense fallback="Loading...">
        <ScriptComponent />
      </Suspense>
    ),
  },
  {
    path: "/deep-compare-effect",
    element: (
      <Suspense fallback="Loading...">
        <DeepCompareEffectComponent />
      </Suspense>
    ),
  },
  {
    path: "/event-listener",
    element: (
      <Suspense fallback="Loading...">
        <EventListenerComponent />
      </Suspense>
    ),
  },
  {
    path: "/on-screen-component",
    element: (
      <Suspense fallback="Loading...">
        <OnScreenComponentComponent />
      </Suspense>
    ),
  },
  {
    path: "/window-size",
    element: (
      <Suspense fallback="Loading...">
        <WindowSizeComponent />
      </Suspense>
    ),
  },
  {
    path: "/media-query",
    element: (
      <Suspense fallback="Loading...">
        <MediaQueryComponent />
      </Suspense>
    ),
  },
  {
    path: "/geolocation",
    element: (
      <Suspense fallback="Loading...">
        <GeolocationComponent />
      </Suspense>
    ),
  },
  {
    path: "/stateWith-validation",
    element: (
      <Suspense fallback="Loading...">
        <StateWithValidationComponent />
      </Suspense>
    ),
  },
  {
    path: "/size",
    element: (
      <Suspense fallback="Loading...">
        <SizeComponent />
      </Suspense>
    ),
  },
  {
    path: "/effect-once",
    element: (
      <Suspense fallback="Loading...">
        <EffectOnceComponent />
      </Suspense>
    ),
  },
  {
    path: "/click-outside",
    element: (
      <Suspense fallback="Loading...">
        <ClickOutsideComponent />
      </Suspense>
    ),
  },
  {
    path: "/dark-mode",
    element: (
      <Suspense fallback="Loading...">
        <DarkModeComponent />
      </Suspense>
    ),
  },
  {
    path: "/copy-to-clipboard",
    element: (
      <Suspense fallback="Loading...">
        <CopyToClipboardComponent />
      </Suspense>
    ),
  },
  {
    path: "/cookie",
    element: (
      <Suspense fallback="Loading...">
        <CookieComponent />
      </Suspense>
    ),
  },
  {
    path: "/translation",
    element: (
      <Suspense fallback="Loading...">
        <TranslationComponent />
      </Suspense>
    ),
  },
  {
    path: "/online-status",
    element: (
      <Suspense fallback="Loading...">
        <OnlineStatusComponent />
      </Suspense>
    ),
  },
  {
    path: "/render-count",
    element: (
      <Suspense fallback="Loading...">
        <RenderCountComponent />
      </Suspense>
    ),
  },
  {
    path: "/debug-information",
    element: (
      <Suspense fallback="Loading...">
        <DebugInformationComponent />
      </Suspense>
    ),
  },
  {
    path: "/hover",
    element: (
      <Suspense fallback="Loading...">
        <HoverComponent />
      </Suspense>
    ),
  },
  {
    path: "/long-press",
    element: (
      <Suspense fallback="Loading...">
        <LongPressComponent />
      </Suspense>
    ),
  },
  {
    path: "/hook",
    element: (
      <Suspense fallback="Loading...">
        <HookCounter />
      </Suspense>
    ),
  },
  {
    path: "/hook-counter",
    element: (
      <Suspense fallback="Loading...">
        <HookCounterArray />
      </Suspense>
    ),
  },
  {
    path: "/hook-counter-two",
    element: (
      <Suspense fallback="Loading...">
        <HookCounterTwo />
      </Suspense>
    ),
  },
  {
    path: "/hook-counter-object",
    element: (
      <Suspense fallback="Loading...">
        <HookCounterObject />
      </Suspense>
    ),
  },
  {
    path: "/all-input-with-a-single-on-change",
    element: (
      <Suspense fallback="Loading...">
        <AllInputsWithAsingleonChange />
      </Suspense>
    ),
  },
  {
    path: "/hook-counter-one",
    element: (
      <Suspense fallback="Loading...">
        <HookCounterOne />
      </Suspense>
    ),
  },
  {
    path: "/hook-mouse",
    element: (
      <Suspense fallback="Loading...">
        <HookMouse />
      </Suspense>
    ),
  },
  {
    path: "/mouse-container",
    element: (
      <Suspense fallback="Loading...">
        <MouseContainer />
      </Suspense>
    ),
  },
  {
    path: "/interval-hook-counter",
    element: (
      <Suspense fallback="Loading...">
        <IntervalHookCounter />
      </Suspense>
    ),
  },
  {
    path: "/data-fetching",
    element: (
      <Suspense fallback="Loading...">
        <DataFetching />
      </Suspense>
    ),
  },
  {
    path: "/data-fetching-2",
    element: (
      <Suspense fallback="Loading...">
        <DataFetching2 />
      </Suspense>
    ),
  },
  {
    path: "/data-fetching-3",
    element: (
      <Suspense fallback="Loading...">
        <DataFetching3 />
      </Suspense>
    ),
  },
  {
    path: "/post-data",
    element: (
      <Suspense fallback="Loading...">
        <PostData />
      </Suspense>
    ),
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
