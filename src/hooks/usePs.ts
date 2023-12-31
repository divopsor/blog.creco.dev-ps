import { useGistItem } from '@divops-packages/blog-creco-dev';
import { CATEGORY } from '../constants';

export function usePs(id: string) {
  return useGistItem(CATEGORY, id);
}
