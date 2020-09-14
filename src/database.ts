function createDataBaseConnection() {
  function start() {
    console.log('> [database] Starting...');
    console.log('> [database] Connecting to Postgres...');
    console.log('> [database] Running Migrations...')
    console.log('> [database] Starting Done!');
  }

  function stop() {
    console.log('> [database] Stopping...');    
    console.log('> [database] Closing Postgres connection...')
    console.log('> [database] Stopping Done!');
  }

  return {
    start,
    stop
  }
}

export default createDataBaseConnection;