import Fuse from "fuse.js";
import { CstSearchListType } from "../components/menu-list";
import { fuseOptionsType } from "../components/type";

export const fuseSearch = (
  list: CstSearchListType[],
  value: string,
  fuseOptions?: fuseOptionsType
) => {
  const fuse = new Fuse(list, fuseOptions);

  return fuse.search(value);
};
