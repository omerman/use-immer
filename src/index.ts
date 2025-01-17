import produce, { Draft, nothing } from "immer";
import { useState, useReducer, useCallback, useMemo, Dispatch } from "react";

export type Reducer<S = any, A = any> = (
  draftState: Draft<S>,
  action: A
) => void | (S extends undefined ? typeof nothing : S);

export type Updater<S> = (f: ((draft: Draft<S>) => void) | S) => Promise<S>;

export type ImmerHook<S> = [S, Updater<S>];

export function useImmer<S = any>(initialValue: S | (() => S)): ImmerHook<S>;

export function useImmer(initialValue: any) {
  const [val, updateValue] = useState(initialValue);
  return [
    val,
    useCallback((updater) => {
      if (typeof updater === "function") {
        let nextValue: any;
        return new Promise((resolve) => {
          updateValue((curr: any) => {
            nextValue = produce(curr, updater);
            resolve(nextValue);
            return nextValue;
          });
        });
      } else {
        const nextValue = updater;
        updateValue(nextValue);
        return Promise.resolve(nextValue);
      }
    }, []),
  ];
}

export function useImmerReducer<S = any, A = any>(
  reducer: Reducer<S, A>,
  initialState: S,
  initialAction?: (initial: any) => S
): [S, Dispatch<A>];
export function useImmerReducer(
  reducer: any,
  initialState: any,
  initialAction: any
) {
  const cachedReducer = useMemo(() => produce(reducer), [reducer]);
  return useReducer(cachedReducer, initialState as any, initialAction);
}
