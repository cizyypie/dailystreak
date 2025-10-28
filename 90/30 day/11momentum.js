import moment from 'moment';

function scheduleTask() {
  moment().add(3, 'days').calendar();  
}

export default { scheduleTask };
console.log (scheduleTask())