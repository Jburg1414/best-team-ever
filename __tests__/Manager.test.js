const Manager = require('../lib/Manager');

test('creates a new manager', () => {
    const manager = new Manager('Jerry', '1', 'Jerry@example.com', '4');

    expect(manager.name).toBe('Jerry');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('Jerry@example.com');
    expect(manager.officeNumber).toBe('4');
})