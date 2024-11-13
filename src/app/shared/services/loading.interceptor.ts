import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { finalize, Observable } from "rxjs";
import { LoadingService } from "./loading.service";

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loadingService: LoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.show();
        return next.handle(req).pipe(
            finalize(() => this.loadingService.hide())
        );
    }
}

// Gli interceptor permettono di intercettare le chiamate HTTP e di modificare il loro comportamento.
// Qui vogliamo modificare il comportamneto per mostrare e nascondere lo spinner durante le richieste HTTP
// L'operatore finalize() assicura che lo spinner venga nascosto sia in caso di successo che di errore della richiesta