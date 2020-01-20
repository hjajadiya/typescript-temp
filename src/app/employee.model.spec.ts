import { Employee } from './employee.model';

describe('Employees', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});
