import { Greet } from '@core/greet';
import { Resource } from 'sst';

console.log(Greet.sayHello() + Resource.Database.name);
