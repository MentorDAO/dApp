import { Typography } from '@mui/material';
import { MetaAttrHelper } from 'helpers/MetaAttrHelper';

/**
 * Display Soul's description Field
 */
export default function SoulDescription({ soul, sx }: any) {
  const description = soul?.metadata?.description
    ? soul.metadata.description
    : MetaAttrHelper.extractValue(soul?.metadata?.attributes, 'Description');
  if (description) {
    return <Typography sx={{ ...sx }}>{description}</Typography>;
  }
  return <></>;
}
