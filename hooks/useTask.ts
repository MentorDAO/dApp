import Task from 'classes/Task';
import { hexStringToJson } from 'utils/converters';
import useProjectExtContract from './contracts/useProjectExtContract';
import useSubgraph from './useSubgraph';

/**
 * Hook for work with task.
 */
export default function useTask() {
  const { taskMake } = useProjectExtContract();
  const { findClaims } = useSubgraph();

  let createTask = function (
    projectId: string,
    name: string,
    metadataUrl: string,
  ): Promise<any> {
    return taskMake(projectId, name, metadataUrl);
  };

  let getTasks = async function (
    ids?: Array<string>,
    projectId?: string,
    first = 10,
    skip = 0,
  ): Promise<Array<Task>> {
    const subgraphTasks = await findClaims(ids, projectId, first, skip);
    return subgraphTasks.map((subgraphTask: any) =>
      convertSubgraphTaskToTask(subgraphTask),
    );
  };

  return {
    createTask,
    getTasks,
  };
}

function convertSubgraphTaskToTask(subgraphTask: any) {
  return new Task(
    subgraphTask.id,
    subgraphTask.name,
    subgraphTask.uri,
    hexStringToJson(subgraphTask.uriData),
  );
}
