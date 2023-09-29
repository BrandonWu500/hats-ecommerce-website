import { ReadonlyURLSearchParams } from 'next/navigation';

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;

export const range = (
  size: number,
  startAt: number = 0
): ReadonlyArray<number> => {
  return [...Array(size).keys()].map((i) => i + startAt);
};
