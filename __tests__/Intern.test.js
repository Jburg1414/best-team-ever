const Intern = require('../lib/Intern');

test('creates an intern', () => {
    const intern = new Intern('Steve', '3', 'Steve@example.com', 'University of Arizona', );

    expect(intern.name).toBe('Steve');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('Steve@example.com');
    expect(intern.school).toBe('University of Arizona');
})