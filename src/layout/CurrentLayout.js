import PublicLayout from './PublicLayout';

/**
 * Returns the current Layout component depending on different circumstances.
 */
const CurrentLayout = (props) => {
  return <PublicLayout {...props} />;
};

export default CurrentLayout;
