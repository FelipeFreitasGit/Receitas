import { Component, OnInit } from '@angular/core';
import { IMenuBox } from 'src/app/components/menu-box/menu-box';
import { IReceitas } from 'src/app/interfaces/receitas';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuBox: Array<IMenuBox> = [];

  constructor(private receitasService: ReceitasService) { }

  ngOnInit(): void {
    this.getReceitas()
  }

  getReceitas(): void {
    this.receitasService.getReceitas()
      .subscribe((response: Array<IReceitas>) => {
        
        response.forEach(item => {
          
          this.menuBox.push(
            {
              icone: item.icone,
              nome: item.nome,
              resumo: item.resumo
            }
          )

        })

      })
  }
}
