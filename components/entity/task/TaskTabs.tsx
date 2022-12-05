import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import EntityComments from 'components/entity/EntityComments';
import GameMembers from 'components/entity/game/GameMembers';
import { useState } from 'react';
import TaskAcceptedApplications from './TaskAcceptedApplications';
import TaskApplications from './TaskApplications';
import TaskApprovedDeliveries from './TaskApprovedDeliveries';
import TaskPostedDeliveries from './TaskPostedDeliveries';

/**
 * Task tabs
 */
export default function ProjectTabs({ item, sx }: any) {
  const [tabValue, setTabValue] = useState('1');

  function handleChange(_: any, newTabValue: any) {
    setTabValue(newTabValue);
  }

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <TabContext value={tabValue}>
        <TabList
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            mb: 1,
            maxWidth: 'calc(100vw - 32px)',
          }}
        >
          <Tab label="Posts" value="1" />
          <Tab label="Applications" value="2" />
          <Tab label="Members" value="3" />
        </TabList>
        <TabPanel value="1" sx={{ px: 0 }}>
          <EntityComments item={item} />
        </TabPanel>
        <TabPanel value="2" sx={{ px: 0 }}>
          {item && <TaskApplications task={item} sx={{ mt: 2 }} />}
          {item && <TaskAcceptedApplications task={item} sx={{ mt: 2 }} />}
          {item && <TaskPostedDeliveries task={item} sx={{ mt: 2 }} />}
          {item && <TaskApprovedDeliveries task={item} sx={{ mt: 2 }} />}
        </TabPanel>
        <TabPanel value="3" sx={{ px: 0 }}>
          <GameMembers game={item} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}