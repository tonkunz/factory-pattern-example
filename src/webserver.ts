function createWebserver() {
  function start() {
    console.log('> [webserver] Starting...');
    console.log('> [webserver] Waiting a avaliable port...');
    console.log('> [webserver] Starting Done!');    
  }

  function stop() {
    console.log('> [webserver] Stopping...');
    console.log('> [webserver] Gracefully waiting for all clients...');
    console.log('> [webserver] Closing all ports...');
    console.log('> [webserver] Stopping Done!');
  }

  return {
    start,
    stop
  }
}

export default createWebserver;