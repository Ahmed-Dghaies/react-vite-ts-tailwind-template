import { MemoryRouter, MemoryRouterProps, Route, Routes } from "react-router";
import { render, RenderOptions, renderHook } from "@testing-library/react";
import { Slide, ToastContainer } from "react-toastify";
import type { DeepPartial } from "react-hook-form";
import { Provider } from "react-redux";

import { makeStore, RootState } from "@/app/store/store";

export function renderWithProviders(
  ui: React.ReactElement,
  {
    route = "/",
    path = "*",
    preloadedState,
    store = makeStore(preloadedState as Partial<RootState>),
    routerProps = {},
    ...renderOptions
  }: {
    route?: string;
    path?: string;
    preloadedState?: DeepPartial<RootState>;
    store?: ReturnType<typeof makeStore>;
    routerProps?: MemoryRouterProps;
  } & RenderOptions = {}
) {
  const rendered = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]} {...routerProps}>
        <Routes>
          <Route path={path} element={ui} />
        </Routes>
      </MemoryRouter>
    </Provider>,
    renderOptions
  );
  return {
    ...rendered,
    rerender: (ui: React.ReactElement, options?: RenderOptions) =>
      renderWithProviders(ui, { container: rendered.container, ...options }),
    store,
  };
}

export function renderHookWithProviders<T>(
  hook: () => T,
  {
    route = "/",
    preloadedState,
    store = makeStore(preloadedState),
    routerProps = {},
    ...renderOptions
  }: {
    route?: string;
    preloadedState?: Partial<RootState>;
    store?: ReturnType<typeof makeStore>;
    routerProps?: MemoryRouterProps;
  } & RenderOptions = {}
) {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]} {...routerProps}>
        {children}
      </MemoryRouter>
    </Provider>
  );

  return renderHook(hook, { ...renderOptions, wrapper });
}

export function renderWithToast(
  ui: React.ReactElement,
  options?: Parameters<typeof renderWithProviders>[1]
) {
  const result = renderWithProviders(
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        theme="light"
        closeOnClick
        transition={Slide}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        stacked
      />
      {ui}
    </>,
    options
  );

  return result;
}

export const sleep = async (ms: number) => await new Promise((resolve) => setTimeout(resolve, ms));
