const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
    const engineer = new Engineer('Jim', '2', 'Jim@example.com', 'Jim7575');

    expect(engineer.name).toBe('Jim');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('Jim@example.com');
    expect(engineer.github).toBe('Jim7575')
})