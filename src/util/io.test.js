import { it,vi,expect } from "vitest";
import writeData from "./io";
import { promises as fs} from 'fs'


vi.mock('fs');
it('2 test case', () => {
    const testData = 'test';
    const testFile = 'file.txt';

    writeData(testData, testFile);

    expect(fs.writeFile).toBeCalled()
})