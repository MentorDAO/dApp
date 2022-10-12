import { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import useError from 'hooks/useError';
import { SupervisedUserCircle } from '@mui/icons-material';
// import Link from 'components/utils/Link';
// import { addressToShortAddress } from 'utils/converters';

/**
 * Component: Display POAP
 */
export default function DisplayPOAP({
  account,
  displayCount = 12,
  sx = {},
}: any): JSX.Element {
  const { handleError } = useError();
  const [items, setItems] = useState<Array<any>>([]);
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  //Load POAPs
  async function getPOAP(address: string): Promise<void> {
    const options: any = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-Key': process.env.NEXT_PUBLIC_POAP_API_KEY,
      },
    };
    try {
      const response = await fetch(
        `https://api.poap.tech/actions/scan/${address}`,
        options,
      ).then((response) => response.json());
      // .then((response) => console.log(response))
      // .catch((err) => console.error(err));
      console.log('POAP Res:', { account, response });
      setItems(response);
    } catch (error: any) {
      setItems([]);
      console.error('POAP Fetch Failed:', { error, address });
      handleError(
        {
          message: `POAP Fetch Failed: ${error}`,
          name: 'POAP API Failed',
        },
        true,
      );
    }
  }

  useEffect(() => {
    //Load POAPs
    account ? getPOAP(account) : setItems([]);
  }, [account]);

  if (!account) return <></>;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Grid container spacing={2} sx={{ ...sx }}>
        {!items && (
          <Grid item xs={12}>
            <Typography>Loading...</Typography>
          </Grid>
        )}
        {items?.length === 0 && (
          <Grid key="none" item xs={12}>
            <Typography>
              {/* No POAPs for {addressToShortAddress(account)} */}
            </Typography>
          </Grid>
        )}
        {items?.length > 0 && (
          <>
            {items.map((item: any, index: number) =>
              index >= displayCount && !isShowMore ? (
                <></>
              ) : (
                <Grid key={item.event.id.toString()} item xs={12} md={1}>
                  <Tooltip
                    title={`${item.event.name} - ${item.event.description}`}
                  >
                    <Stack direction="column" spacing={1} sx={{ ...sx }}>
                      <Avatar
                        alt={item.event.name}
                        sx={{
                          width: '96%',
                          height: '96%',
                          borderRadius: '12%',
                          ...sx,
                        }}
                        src={item?.event?.image_url}
                      >
                        <SupervisedUserCircle />
                      </Avatar>
                      <Box>
                        {/* <Link href={`/POAP/${item.id}`}> */}
                        <Typography variant="body1">{item.name}</Typography>
                        {/* </Link> */}
                      </Box>
                    </Stack>
                  </Tooltip>
                </Grid>
              ),
            )}
            {items.length > displayCount && !isShowMore && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button onClick={() => setIsShowMore(true)}>Show All</Button>
              </Box>
            )}
          </>
        )}
      </Grid>
    </Box>
  );
}