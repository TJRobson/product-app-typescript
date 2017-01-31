import * as express from 'express';
import { Application, Request, Response } from 'express';
import * as process from 'process';

const app: express.Application = express();
const port: number = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(port, () => {
     process.stdout.write(`App listening at http://localhost:${port}`);
});
