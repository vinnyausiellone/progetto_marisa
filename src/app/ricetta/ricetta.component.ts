import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';
import { ListaRicetta } from './ricetta.model';


@Component({
  selector: 'app-ricetta',
  templateUrl: './ricetta.component.html',
  styleUrl: './ricetta.component.scss'
})
export class RicettaComponent implements OnInit {



  constructor(private route: ActivatedRoute, private sharedService: SharedService, private router: Router) { }

  ricettaFC = new FormControl('');
  pageTitle?: string | null;
  cibiValore?: string;
  valoreRicetta?: string;
  
  @Input() isFromLista!: boolean;


  listaRicette: ListaRicetta[] = [
    { id: 'Pizza', value: 'Per fare la pizza, mescola farina, acqua, lievito e sale fino a ottenere un impasto liscio. Lascialo lievitare per circa 1-2 ore, finché raddoppia di volume. Stendi l’impasto, aggiungi il pomodoro, la mozzarella e gli altri ingredienti preferiti. Cuoci in forno preriscaldato a 250°C per 10-15 minuti, finché la crosta è dorata e la mozzarella sciolta.' },
    { id: 'Lasagna', value: 'Per fare la lasagna, prepara un ragù con carne macinata, pomodoro, cipolla, carota e sedano. Prepara anche una besciamella con burro, farina e latte. In una teglia, alterna strati di pasta per lasagna, ragù, besciamella e parmigiano grattugiato. Ripeti fino a esaurire gli ingredienti, terminando con besciamella e parmigiano. Cuoci in forno preriscaldato a 180°C per circa 30-40 minuti, finché è dorata e ben cotta.' },
    { id: 'Tacos', value: 'Per fare i tacos, cuoci carne macinata con spezie come cumino, paprika e peperoncino, oppure usa pollo o verdure a piacere. Prepara guarnizioni come lattuga tritata, pomodori a dadini, formaggio grattugiato, e salsa. Scalda le tortillas, farciscile con la carne e le guarnizioni, e servile calde con lime e coriandolo a piacere.' },
    { id: 'Tortellini', value: 'Per fare i tortellini, prepara un impasto con farina e uova e stendilo in sfoglie sottili. Per il ripieno, mescola carne macinata cotta (di maiale, prosciutto o mortadella) con parmigiano e noce moscata. Taglia la sfoglia in quadrati, aggiungi un po’ di ripieno su ciascuno, piegali a triangolo e unisci le punte per formare i tortellini. Cuocili in brodo bollente per pochi minuti e servili caldi.' },
    { id: 'Gelato', value: 'Per fare il gelato, scalda latte e panna in un pentolino. In una ciotola, sbatti i tuorli d’uovo con lo zucchero fino a ottenere un composto chiaro e spumoso. Aggiungi il latte caldo poco alla volta, mescolando, poi rimetti il tutto sul fuoco basso finché si addensa leggermente. Lascia raffreddare, poi versa la miscela nella gelatiera e segui le istruzioni fino a ottenere la consistenza desiderata.' },
    { id: 'Bruschetta', value: 'Per la bruschetta, tosta delle fette di pane fino a renderle croccanti. Strofina ogni fetta con uno spicchio d’aglio, aggiungi pomodori freschi a dadini, condisci con olio d’oliva, sale, pepe e foglie di basilico. Servi subito, ancora calda.' },
    { id: 'Sushi', value: 'Per fare il sushi, cuoci il riso giapponese e condiscilo con aceto di riso, zucchero e sale. Stendi uno strato sottile di riso su un foglio di alga nori, aggiungi al centro pesce crudo (come salmone o tonno) e verdure a piacere (come cetriolo o avocado). Arrotola con l’aiuto di una stuoia di bambù, poi taglia in pezzi. Servi con salsa di soia, zenzero e wasabi.' }
  ];


  @Output() mandaRicetta: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    const cibiValore: {cibo: string} = this.sharedService.getAttUtilObj('cibi');
    if (cibiValore) this.cibiValore = cibiValore.cibo;
    if (this.cibiValore) this.pageTitle = this.cibiValore;
    this.valoreRicetta = this.listaRicette.find(ricetta => ricetta.id === this.cibiValore)?.value;
  }

  onChangeRicetta(evento: Event) {
    console.log(evento)
  }

  onSalvaRicetta() {
    this.sharedService.setAttUtilObj('ricetta', {ricetta: this.ricettaFC.value})
    this.router.navigateByUrl('lista');
  }
}
