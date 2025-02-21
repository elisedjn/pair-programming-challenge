import { cleanDatabase } from './testing.utils';

afterAll(async () => {
  await cleanDatabase();
  jest.clearAllMocks();
});

beforeEach(async () => {
  await cleanDatabase();
});

jest.setTimeout(100000);
