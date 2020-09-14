import createCore from './core';

// Mock
function createMock() {
  function start() {
    console.log('[mock] start...');
  }

  function stop() {
    console.log('[mock] stop...');
  }

  return {
    start,
    stop
  }
}

describe('Core quando importado', () => {
  test('deve ter o método #start e #stop', () => {
    const core = createCore({
      database: createMock(),
      webserver: createMock()
    });

    expect(core).toHaveProperty('start');
    expect(core).toHaveProperty('stop');
  });
});

describe('Core quando iniciado', () => {
  test('não deve retornar erros', () => {
    const core = createCore({
      database: createMock(),
      webserver: createMock()
    });

    expect(() => core.start()).not.toThrow();
  });
});