import { Component,OnInit } from '@angular/core';

interface Call {
  name: string;
  logo: string;
  date: string;
  time: string;
  data: string;
  type: 'incoming' | 'outgoing';

}
@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent {

    [x: string]: any;
    // [x: string]: any;
    
    calls: Call[]=[
      {
        name: 'ashu(2)', 
        logo: "https://e1.pxfuel.com/desktop-wallpaper/600/586/desktop-wallpaper-%D8%AA%D9%8A%D8%AA%D8%A7%D9%86%D9%8A%D8%A7-%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84-on-frozen-elsa-and-anna-baby-thumbnail.jpg",
        date: '12/5/2024',
        data: ",",
        time: '4:30 pm',
        type: 'incoming'
      },
      {
        name: 'Kavya', 
        logo: "https://m.media-amazon.com/images/I/61lfVFPybUL.AC_UF894,1000_QL80.jpg",
        date: '13/6/2024',
        data: ",",
        time: '5:30 pm',
        type: 'outgoing'
      },
      {
        name: 'Jaya(5)', 
        logo: "https://pics.craiyon.com/2023-07-11/7491e24fbadd440a8f4e8dc51f2a2785.webp",
        date: '14/7/2024',
        data: ",",
        time: '2:30 pm',
        type: 'incoming'
      },
      {
        name: 'Ramana', 
        logo: 'https://pbs.twimg.com/media/GQ4mI-NWIAEv5c0.jpg',
        date: '16/6/2024',
        data: ",",
        time: '1:30 pm',
        type: 'outgoing'
      },
      {
        name: 'Kishore', 
        logo: 'https://i.pinimg.com/474x/84/94/72/849472f0359f1283c403a355f53db4e5.jpg',
        date: '27/7/2024',
        data: ",",
        time: '12:30 pm',
        type: 'incoming'
      },
    ];
    
    showContextMenu = false;
    contextMenuPosition = { x:0, y: 0};
    selectedIndex: number | null = null;
    
    onRightClick(event: MouseEvent, index: number):void{
      event.preventDefault();
      // this.calls.splice(index, 1);
      this.showContextMenu= true;
      this.contextMenuPosition = { x: event.clientX, y: event.clientY};
      this.selectedIndex = index;
    }
    deleteCall(index: number | null): void {
      if (index !== null){
        this.calls.splice(index,1);
        this.showContextMenu = false;
        this.selectedIndex = null;
      }
    }
    
    closeContextMenu():void{
      this.showContextMenu = false;
      this.selectedIndex = null;
    }
}
