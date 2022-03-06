const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('Bob', '0', 'Bob@example.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual('0');
    expect(employee.email).toBe('Bob@example.com');
})