import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const LikeState = (id: number, memberId: string | null) =>
  atom<boolean>({
    key: `LikeState-${memberId}-${id}`,
    default: false,
    effects_UNSTABLE: [persistAtom],
  });
