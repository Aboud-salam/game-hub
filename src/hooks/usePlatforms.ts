import useData from "./useData";
interface Platforms {
  id: number;
  name: string;
}
export const usePlatforms = (selectedPlatform: string) =>
  useData<Platforms>(
    "/platforms/lists/parents",
    {
      params: {
        platforms: selectedPlatform,
      },
    },
    [selectedPlatform]
  );
