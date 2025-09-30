import request from 'supertest';
import app from '../server.js';
import { dataAccess } from '../dataAccess.js';

describe('Tasks API testing', () => {
  const resetMockData = () => {
      const mockTasks =  [
        { id: '1', title: 'Task 1' },
        { id: '2', title: 'Task 2' }
      ]
      // Spy on readData and writeData
      spyOn(dataAccess, 'readData').and.callFake(() => mockTasks);
      spyOn(dataAccess, 'writeData').and.callFake(() => true);
  }
  beforeEach(() => {
   resetMockData() 
  });

  // GET all tasks
  it('should get all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.status).toBe(200);
    expect(res.body[0].title).toContain('Task');
  });

  // GET task by ID
  it('should get a task by ID', async () => {
    const res = await request(app).get('/tasks/1');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe('1');
    expect(res.body.title).toBe('Task 1');
  });

  it('should return 404 if task not found', async () => {
    const res = await request(app).get('/tasks/999');
    expect(res.status).toBe(404);
  });

  // POST new task
  it('should create a new task', async () => {
    const newTask = { title: 'New Task' };
    const res = await request(app).post('/tasks').send(newTask);
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('New Task');
    expect(dataAccess.writeData).toHaveBeenCalled();
  });

  it('should return 400 for empty task', async () => {
    const res = await request(app).post('/tasks').send({});
    expect(res.status).toBe(400);
  });

  // PATCH update task
  it('should update an existing task', async () => {
    const updatedTask = { title: 'Updated Task' };
    const res = await request(app).put('/tasks/1').send(updatedTask);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Updated Task');
    expect(dataAccess.writeData).toHaveBeenCalled();
  });

  it('should return 404 if task to update not found', async () => {
    const res = await request(app).patch('/tasks/999').send({ title: 'X' });
    expect(res.status).toBe(404);
  });

  // DELETE task
  it('should delete a task', async () => {
    const res = await request(app).delete('/tasks/1');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Task has been deleted.');
    expect(dataAccess.writeData).toHaveBeenCalled();
  });

  it('should return 404 if task to delete not found', async () => {
    const res = await request(app).delete('/tasks/999');
    expect(res.status).toBe(404);
  });
});
