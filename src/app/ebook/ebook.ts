import { Component } from '@angular/core';

@Component({
  selector: 'app-ebook',
  standalone: false,
  templateUrl: './ebook.html',
  styleUrl: './ebook.css'
})
export class Ebook {
  pdfUrl = "/assets/ebook_powerbi_completo.pdf";
}

