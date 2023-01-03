import useSubgraph from './useSubgraph';

/**
 * Hook for work with task.
 */
export default function useTask() {
  const { findClaims } = useSubgraph();

  const getTaskById = async function (id: string): Promise<any | null> {
    const items = await getTasks([id], undefined);
    return items.length > 0 ? items[0] : null;
  };

  const getTasks = async function (
    ids?: Array<string>,
    type?: string,
    projectId?: string,
    first = 10,
    skip = 0,
  ): Promise<Array<any>> {
    const subgraphTasks = await findClaims(ids, type, projectId, first, skip);
    return subgraphTasks;
  };

  const isSoulHasRole = function (
    task: any,
    soul: string,
    roleId: string,
  ): boolean {
    return getSoulsByRole(task, roleId).includes(soul);
  };

  const getSoulsByRole = function (task: any, roleId: string): Array<string> {
    const taskRole = task.roles?.find(
      (element: any) => element?.roleId === roleId,
    );
    // console.log('[DEBUG] Souls for Role', {souls:taskRole?.souls, taskRoles:task?.roles, roleId, })
    return taskRole?.souls || [];
  };

  return {
    getTaskById,
    getTasks,
    isSoulHasRole,
    getSoulsByRole,
  };
}
