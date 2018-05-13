'use strict';

import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const upload = multer({dest: 'uploads/'});
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve('views/index.html'));
});

app.post('/filesize', upload.single('file'), (req, res) => {
  const filesize = req.file.size;
  const filename = req.file.filename;
  const path = `uploads/${filename}`;
  fs.unlink(path, err => {
    if (err) console.error(`fs.unlink failed: ${err}`);
    res.status(200).json({filesize});
  });
});

export default app;