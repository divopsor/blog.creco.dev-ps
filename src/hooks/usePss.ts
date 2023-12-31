import { useGistList } from '@divops-packages/blog-creco-dev';
import { CATEGORY } from '../constants';
import { parsePs } from '../utils';

export function usePss(initialList: any) {
  return (useGistList(CATEGORY) ?? initialList).map(parsePs) as ReturnType<typeof parsePs>[];
}