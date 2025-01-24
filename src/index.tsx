import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import { routes } from './route/mainRoute';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'

const root = document.getElementById('root');
if (root) {
  render(() => <Router>{routes}</Router>, root);
}
