import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ConnectionService } from './connection.service';
import { Client } from 'src/app/models/client';

xdescribe('ConnectionService', () => {
  let service: ConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: []
    });
    service = TestBed.inject(ConnectionService);
  });

  it('get method is okay', done => {
    const res = service.getConnection();

    /* let respuesta: Client[];
    const final = res.subscribe({
      next: (data: Client[]) => respuesta = { ...data },
    })
    console.log(final) */

  });
});

