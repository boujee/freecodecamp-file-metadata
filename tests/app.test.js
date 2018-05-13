'use strict';

import {app} from 'freecodecamp-file-metadata';
import request from 'supertest';

test('I can submit a FormData object that includes a file upload.', () =>
  request(app)
    .post('/filesize')
    .attach('file', Buffer.from('<span>test</span>'), 'blob.html')
    .expect(200)
);

test('When I submit something, I will receive the file size in bytes within the JSON response', () =>
  request(app)
    .post('/filesize')
    .attach('file', Buffer.from('<span>test</span>'), 'blob.html')
    .expect(200, {filesize: '<span>test</span>'.length})
);