import { atom } from "recoil";

export const LikeState = (id: number, memberId: string | null) =>
  atom<boolean>({
    key: `LikeState-${memberId}-${id}`,
    default: false,
  });
