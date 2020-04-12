import  {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'nameComplete'
})
export  class NameCompletePipe implements PipeTransform{
  union;

  transform(value: Array<any> ){
    this.union = value['user_name']+ ' ' + value['last_name']+ ' ' + value['second_last_name'];
    return this.union;
  }
}
