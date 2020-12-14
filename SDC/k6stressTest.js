/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable func-names */
import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');
export const options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '30s', target: 1000 },
    { duration: '1m', target: 1500 },
    { duration: '1m', target: 100 },
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    errors: ['rate<0.01'],
    http_req_duration: ['p(99)<50'],
  },
};

export default function () {
  const BASE_URL = `http://localhost:3003/api/products/${Math.floor(Math.random() * 10000000) + 1}/suggestions`;

  const result = check(http.get(BASE_URL), {
    'status is 200': (r) => r.status === 200,
  });

  errorRate.add(!result);

  sleep(1);
}
