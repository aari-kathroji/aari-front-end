import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ngOnInit(){
    document.getElementById('page-1')?.classList.remove('hidden');
    document.getElementById('page-2')?.classList.add('hidden');
    document.getElementById('page-3')?.classList.add('hidden');
    document.getElementById('page-4')?.classList.add('hidden');
  }

  page1(){
    document.getElementById('page-1')?.classList.remove('hidden');
    document.getElementById('page-2')?.classList.add('hidden');
    document.getElementById('page-3')?.classList.add('hidden');
    document.getElementById('page-4')?.classList.add('hidden');
  }
  page2(){
    document.getElementById('page-1')?.classList.add('hidden');
    document.getElementById('page-2')?.classList.remove('hidden');
    document.getElementById('page-3')?.classList.add('hidden');
    document.getElementById('page-4')?.classList.add('hidden');
  }
  page3(){
    document.getElementById('page-1')?.classList.add('hidden');
    document.getElementById('page-2')?.classList.add('hidden');
    document.getElementById('page-3')?.classList.remove('hidden');
    document.getElementById('page-4')?.classList.add('hidden');
  }
  page4(){
    document.getElementById('page-1')?.classList.add('hidden');
    document.getElementById('page-2')?.classList.add('hidden');
    document.getElementById('page-3')?.classList.add('hidden');
    document.getElementById('page-4')?.classList.remove('hidden');
  }

}
