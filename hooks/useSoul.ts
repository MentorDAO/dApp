import Soul from "classes/Soul";
import { hexStringToJson } from "utils/converters";
import useSoulContract from "./contracts/useSoulContract";
import useSubgraph from "./useSubgraph";

/**
 * Hook for work with souls.
 */
export default function useSoul() {
  const { mint } = useSoulContract();
  const { findSouls } = useSubgraph();

  let createSoul = async function (metadataUrl: string): Promise<any> {
    return mint(metadataUrl);
  };

  let getSoulByOwner = async function (owner: string): Promise<Soul | null> {
    const souls = await getSouls(undefined, [owner]);
    return souls.length > 0 ? souls[0] : null;
  };

  let getSouls = async function (
    ids?: Array<string>,
    owners?: Array<string>,
    first = 10,
    skip = 0
  ): Promise<Array<Soul>> {
    const subgraphSouls = await findSouls(ids, owners, first, skip);
    return subgraphSouls.map((subgraphSoul: any) =>
      convertSubgraphSoulToSoul(subgraphSoul)
    );
  };

  return {
    createSoul,
    getSoulByOwner,
    getSouls,
  };
}

function convertSubgraphSoulToSoul(subgraphSoul: any) {
  return new Soul(
    subgraphSoul.id,
    subgraphSoul.owner,
    subgraphSoul.uri,
    hexStringToJson(subgraphSoul.uriData),
    subgraphSoul.uriImage,
    subgraphSoul.uriFirstName,
    subgraphSoul.uriLastName
  );
}
