export default function Error() {
  return <div>_error</div>;
}

export async function getServerSideProps() {
  // @ts-ignore
  throw new Error(`Can't gssp in _error for some reason!`);
}
