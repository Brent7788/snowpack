// Path aliases
import {flatten} from 'array-flatten';
import title from '@title';
console.log(flatten, title);

// All these imports should be the same
import sort from './sort'; // relative import
import sort_ from 'sort'; // bare import using baseUrl
import sort__ from 'src/sort'; // base import
console.log(sort, sort_, sort__);

// All these imports should be the same
import concat from './concat/index'; // relative import
import concat_ from 'concat/index'; // bare import using baseUrl
import concat__ from 'src/concat/index'; // bare import
import concat___ from './concat'; // relative import with index.js appended
import concat____ from 'concat'; // bare import using baseUrl and index.js appended
import concat_____ from 'src/concat'; // bare import with index.js appended
console.log(concat, concat_, concat__, concat___, concat____, concat_____);