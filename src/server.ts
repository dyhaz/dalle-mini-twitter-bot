import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import DalleRoute from '@routes/dalle.route';
import DummyRoute from '@routes/dummy.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new DalleRoute(), new DummyRoute(), new AuthRoute()]);

app.listen();
