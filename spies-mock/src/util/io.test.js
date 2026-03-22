import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';
import path from 'path';

vi.mock('fs');
// vi.mock('path', () => {
//   return {
//     default: {
//       join: (...args) => {
//         return args[args.length - 1];
//       },
//     },
//   };
// });

it('should execute the writeFile method', async () => {
  const testData = 'Test';
  const testFileName = 'test.txt';
  await writeData(testData, testFileName);
  const expectedPath = path.join(process.cwd(), 'data', testFileName);
  expect(fs.writeFile).toBeCalledWith(expectedPath, testData);
});
