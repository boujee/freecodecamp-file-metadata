'use strict';

import {app} from '..';

const {PORT = 8080} = process.env;

app.listen(PORT, () => console.log(`listening on ${PORT}`));