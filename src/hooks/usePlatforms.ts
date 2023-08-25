import useData from "./useData";
interface Platforms {
  id: number;
  name: string;
  slug: string;
}
export const usePlatforms = () =>
  useData<Platforms>("/platforms/lists/parents");
