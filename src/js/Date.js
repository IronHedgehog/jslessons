import * as dayjs from 'dayjs';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
const dayJSObj = dayjs();

console.log(dayJSObj.format('L'));
